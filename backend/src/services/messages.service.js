const messagesMemory = [];

const createMessage = (caseId, data) => {
  const {
    senderId,
    senderRole,
    recipientId,
    recipientRole,
    subject,
    content,
    messageType
  } = data;

  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  if (!senderId || !senderRole || !content) {
    return {
      success: false,
      statusCode: 400,
      message: "El remitente, rol del remitente y contenido son obligatorios"
    };
  }

  const newMessage = {
    id: `message_${messagesMemory.length + 1}`,
    caseId,
    senderId,
    senderRole,
    recipientId: recipientId || null,
    recipientRole: recipientRole || "general",
    subject: subject || "Mensaje del expediente",
    content,
    messageType: messageType || "case_message",
    status: "no_leido",
    createdAt: new Date().toISOString(),
    readAt: null
  };

  messagesMemory.push(newMessage);

  return {
    success: true,
    statusCode: 201,
    message: "Mensaje registrado correctamente en el expediente",
    caseMessage: newMessage
  };
};

const getMessagesByCaseId = (caseId) => {
  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  const caseMessages = messagesMemory.filter(
    (message) => message.caseId === caseId
  );

  return {
    success: true,
    statusCode: 200,
    message: "Mensajes del expediente obtenidos correctamente",
    caseId,
    total: caseMessages.length,
    messages: caseMessages
  };
};

const markMessageAsRead = (messageId) => {
  const foundMessage = messagesMemory.find(
    (message) => message.id === messageId
  );

  if (!foundMessage) {
    return {
      success: false,
      statusCode: 404,
      message: "Mensaje no encontrado"
    };
  }

  foundMessage.status = "leido";
  foundMessage.readAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Mensaje marcado como leído correctamente",
    caseMessage: foundMessage
  };
};

module.exports = {
  createMessage,
  getMessagesByCaseId,
  markMessageAsRead
};