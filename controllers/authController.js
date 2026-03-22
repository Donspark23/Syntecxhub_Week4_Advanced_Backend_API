const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate Token
const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ================= REGISTER =================
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // 🔥 CHECK IF FIRST USER
  const userCount = await User.countDocuments();

  const user = await User.create({
    name,
    email,
    password,
    role: userCount === 0 ? "admin" : "user" // 👈 MAGIC LINE
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, // 👈 include role for testing
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d"
      })
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// ================= LOGIN =================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Check user
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if blocked
    if (user.isBlocked) {
      return res.status(403).json({ message: "User is blocked" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role)
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
