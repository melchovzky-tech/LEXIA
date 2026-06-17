const notificationsMemory = [];

const createNotification = (data) => {
  const {
    userId,
    title,
    message,
    type,
    relatedCaseId,
    relatedDocumentId,
    relatedPaymentId
  } = data;

  if (!userId || !title || !message) {
    return {
      success: false,
      statusCode: 400,
      message: "El usuario, título y mensaje son obligatorios"
    };
  }

  const newNotification = {
    id: `notification_${notificationsMemory.length + 1}`,
    userId,
    title,
    message,
    type: type || "general",
    status: "no_leida",
    relatedCaseId: relatedCaseId || null,
    relatedDocumentId: relatedDocumentId || null,
    relatedPaymentId: relatedPaymentId || null,
    createdAt: new Date().toISOString(),
    readAt: null
  };

  notificationsMemory.push(newNotification);

  return {
    success: true,
    statusCode: 201,
    message: "Notificación creada correctamente",
    notification: newNotification
  };
};

const getUserNotifications = (userId) => {
  if (!userId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del usuario es obligatorio"
    };
  }

  const userNotifications = notificationsMemory.filter(
    (notification) => notification.userId === userId
  );

  return {
    success: true,
    statusCode: 200,
    message: "Notificaciones obtenidas correctamente",
    userId,
    total: userNotifications.length,
    notifications: userNotifications
  };
};

const markNotificationAsRead = (notificationId) => {
  const foundNotification = notificationsMemory.find(
    (notification) => notification.id === notificationId
  );

  if (!foundNotification) {
    return {
      success: false,
      statusCode: 404,
      message: "Notificación no encontrada"
    };
  }

  foundNotification.status = "leida";
  foundNotification.readAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Notificación marcada como leída correctamente",
    notification: foundNotification
  };
};

module.exports = {
  createNotification,
  getUserNotifications,
  markNotificationAsRead
};