const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

require("./jobs/cronJobs"); // 👈 ADD THIS
// Swagger Docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/logs", require("./routes/logRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

// Root route
app.get("/", (req, res) => {
  res.send("Week 4 Advanced Backend API is running 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
