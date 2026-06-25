const crypto = require("crypto");
const {
  supabase,
  isSupabaseConfigured
} = require("../config/supabase");

const usersMemory = [];

const hashPassword = (password, salt = crypto.randomBytes(16).toString("hex")) => ({
  salt,
  hash: crypto.scryptSync(password, salt, 64).toString("hex")
});

const verifyPassword = (password, passwordHash, passwordSalt) => {
  const storedHash = Buffer.from(passwordHash, "hex");
  const candidateHash = crypto.scryptSync(password, passwordSalt, 64);

  return storedHash.length === candidateHash.length
    && crypto.timingSafeEqual(storedHash, candidateHash);
};

const mapSupabaseUser = (user) => ({
  id: user.id,
  fullName: user.user_metadata?.full_name || "Cliente LEX-IA",
  email: user.email,
  phone: user.user_metadata?.phone || null,
  state: user.user_metadata?.state || null,
  role: "client",
  status: user.email_confirmed_at ? "active" : "pending_email_verification",
  createdAt: user.created_at
});

const registerMemoryUser = ({ fullName, email, phone, state, password }) => {
  const existingUser = usersMemory.find((user) => user.email === email);

  if (existingUser) {
    return {
      success: false,
      statusCode: 409,
      message: "El correo ya se encuentra registrado"
    };
  }

  const passwordData = hashPassword(password);
  const newUser = {
    id: `user_${usersMemory.length + 1}`,
    fullName,
    email,
    phone,
    state,
    role: "client",
    status: "active",
    createdAt: new Date().toISOString()
  };

  usersMemory.push({
    ...newUser,
    passwordHash: passwordData.hash,
    passwordSalt: passwordData.salt
  });

  return {
    success: true,
    statusCode: 201,
    message: "Usuario registrado correctamente en modo local",
    requiresEmailVerification: false,
    provider: "memory",
    user: newUser
  };
};

const registerUser = async ({ fullName, email, phone, state, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  if (!isSupabaseConfigured) {
    return registerMemoryUser({
      fullName,
      email: normalizedEmail,
      phone,
      state,
      password
    });
  }

  const emailRedirectTo = process.env.AUTH_EMAIL_REDIRECT_URL;
  const { data, error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
    options: {
      ...(emailRedirectTo ? { emailRedirectTo } : {}),
      data: {
        full_name: fullName,
        phone,
        state
      }
    }
  });

  if (error) {
    return {
      success: false,
      statusCode: error.status || 400,
      message: error.message
    };
  }

  const requiresEmailVerification = !data.session;

  if (!data.user) {
    return {
      success: false,
      statusCode: 502,
      message: "Supabase no devolvió el usuario registrado"
    };
  }

  return {
    success: true,
    statusCode: 201,
    message: requiresEmailVerification
      ? "Cuenta creada. Revisa tu correo para confirmar tu dirección antes de iniciar sesión."
      : "Usuario registrado correctamente",
    requiresEmailVerification,
    provider: "supabase",
    token: data.session?.access_token || null,
    user: mapSupabaseUser(data.user)
  };
};

const loginMemoryUser = ({ email, password }) => {
  const user = usersMemory.find((item) => item.email === email);

  if (!user || !verifyPassword(password, user.passwordHash, user.passwordSalt)) {
    return {
      success: false,
      statusCode: 401,
      message: "Correo o contraseña incorrectos"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Inicio de sesión correcto en modo local",
    provider: "memory",
    token: "token_temporal_lexia_case",
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      status: user.status
    }
  };
};

const loginUser = async ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();

  if (!isSupabaseConfigured) {
    return loginMemoryUser({ email: normalizedEmail, password });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password
  });

  if (error) {
    return {
      success: false,
      statusCode: error.status || 401,
      message: "Correo, contraseña o verificación de email incorrectos"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Inicio de sesión correcto",
    provider: "supabase",
    token: data.session.access_token,
    user: mapSupabaseUser(data.user)
  };
};

const getProfileTest = () => ({
  success: true,
  statusCode: 200,
  message: "Perfil de prueba AUTH funcionando correctamente",
  authProvider: isSupabaseConfigured ? "supabase" : "memory",
  user: {
    id: "user_test_001",
    fullName: "Cliente de prueba LEX-IA",
    email: "cliente@lexia.test",
    role: "client",
    status: "active"
  }
});

module.exports = {
  registerUser,
  loginUser,
  getProfileTest
};
