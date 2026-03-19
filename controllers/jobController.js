const Log = require("../models/Log");

const runCleanup = async (req, res) => {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  const result = await Log.deleteMany({
    createdAt: { $lt: date }
  });

  res.json({ deleted: result.deletedCount });
};

module.exports = { runCleanup };
