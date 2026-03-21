const User = require("../models/User");

// ✅ GET USERS
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// ✅ PROMOTE USER
const promoteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.role = "admin";
    await user.save();
    res.json({ message: "User promoted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// ✅ BLOCK USER
const blockUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isBlocked = true;
    await user.save();
    res.json({ message: "User blocked" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// ✅ UNBLOCK USER
const unblockUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isBlocked = false;
    await user.save();
    res.json({ message: "User unblocked" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// 🚨 VERY IMPORTANT
module.exports = {
  getUsers,
  promoteUser,
  blockUser,
  unblockUser
};
