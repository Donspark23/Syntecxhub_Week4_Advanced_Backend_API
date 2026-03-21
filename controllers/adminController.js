const Log = require("../models/Log");
const User = require("../models/User");

// 📜 GET ALL LOGS
const getLogs = async (req, res) => {
  const logs = await Log.find()
    .populate("user", "name email")
    .populate("target", "name email")
    .sort({ createdAt: -1 });

  res.json(logs);
};

// 🔍 FILTER LOGS (e.g. ?action=BLOCK_USER)
const filterLogs = async (req, res) => {
  const { action } = req.query;

  const logs = await Log.find(action ? { action } : {})
    .populate("user", "name email")
    .populate("target", "name email")
    .sort({ createdAt: -1 });

  res.json(logs);
};

// 📊 USER ANALYTICS
const getStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const admins = await User.countDocuments({ role: "admin" });
  const blocked = await User.countDocuments({ isBlocked: true });

  res.json({
    totalUsers,
    admins,
    blocked
  });
};

module.exports = {
  getLogs,
  filterLogs,
  getStats
};
