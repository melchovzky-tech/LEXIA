const usersMemory = [];

const registerUser = ({ fullName, email, phone, state, password }) => {
  const existingUser = usersMemory.find((user) => user.email === email);

  if (existingUser) {
    return {
      success: false,
      statusCode: 409,
      message: "El correo ya se encuentra registrado"
    };
  }

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
    password
  });

  return {
    success: true,
    statusCode: 201,
    message: "Usuario registrado correctamente",
    user: newUser
  };
};

const loginUser = ({ email, password }) => {
  const user = usersMemory.find((item) => item.email === email);

  if (!user || user.password !== password) {
    return {
      success: false,
      statusCode: 401,
      message: "Correo o contraseña incorrectos"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Inicio de sesión correcto",
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

const getProfileTest = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Perfil de prueba AUTH funcionando correctamente",
    user: {
      id: "user_test_001",
      fullName: "Cliente de prueba LEX-IA",
      email: "cliente@lexia.test",
      role: "client",
      status: "active"
    }
  };
};

module.exports = {
  registerUser,
  loginUser,
  getProfileTest
};