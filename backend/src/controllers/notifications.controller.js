const {
  createNotification,
  getUserNotifications,
  markNotificationAsRead
} = require("../services/notifications.service");

const create = (req, res) => {
  const result = createNotification(req.body);

  return res.status(result.statusCode).json(result);
};

const getByUser = (req, res) => {
  const { userId } = req.params;

  const result = getUserNotifications(userId);

  return res.status(result.statusCode).json(result);
};

const markAsRead = (req, res) => {
  const { notificationId } = req.params;

  const result = markNotificationAsRead(notificationId);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getByUser,
  markAsRead
};