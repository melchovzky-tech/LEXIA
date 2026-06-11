const getCurrentUser = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Usuario autenticado de prueba obtenido correctamente",
    user: {
      id: "user_test_001",
      fullName: "Raymundo Marcial Melchi",
      email: "raymundo@test.com",
      phone: "7440000000",
      state: "GRO",
      role: "client",
      status: "active",
      createdAt: "2026-06-11T00:00:00.000Z"
    }
  };
};

const updateCurrentUser = (data) => {
  const updatedUser = {
    id: "user_test_001",
    fullName: data.fullName || "Raymundo Marcial Melchi",
    email: "raymundo@test.com",
    phone: data.phone || "7440000000",
    state: data.state || "GRO",
    city: data.city || "No especificada",
    preferredContactMethod: data.preferredContactMethod || "email",
    role: "client",
    status: "active",
    updatedAt: new Date().toISOString()
  };

  return {
    success: true,
    statusCode: 200,
    message: "Perfil actualizado correctamente en modo prueba",
    user: updatedUser
  };
};

const changeCurrentUserPassword = ({ currentPassword, newPassword }) => {
  if (!currentPassword || !newPassword) {
    return {
      success: false,
      statusCode: 400,
      message: "La contraseña actual y la nueva contraseña son obligatorias"
    };
  }

  if (newPassword.length < 6) {
    return {
      success: false,
      statusCode: 400,
      message: "La nueva contraseña debe tener al menos 6 caracteres"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Contraseña actualizada correctamente en modo prueba"
  };
};

module.exports = {
  getCurrentUser,
  updateCurrentUser,
  changeCurrentUserPassword
};