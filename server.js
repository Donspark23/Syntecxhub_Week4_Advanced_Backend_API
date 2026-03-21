const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();

// 🔐 SECURITY HEADERS
app.use(helmet());

// 🌍 CORS (allow all for now, restrict later)
app.use(cors());
app.use(cors({
  origin: "https://your-frontend.com"
}));

// 🧠 BODY PARSER
app.use(express.json());

// 🚫 RATE LIMITING (ANTI-SPAM)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // max requests per IP
  message: "Too many requests, try again later"
});

app.use(limiter);

// 📌 ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// ❌ 404 HANDLER
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ⚠️ GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Server Error"
  });
});

// 🚀 START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
