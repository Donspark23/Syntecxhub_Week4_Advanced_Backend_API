const Log = require("../models/Log");

// GET ALL LOGS (Admin)
const getLogs = async (req, res) => {
  try {
    const logs = await Log.find()
      .populate("user", "name email")
      .populate("target", "name email");

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getLogs };
