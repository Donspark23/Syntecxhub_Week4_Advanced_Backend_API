const router = require("express").Router();

const {
  getLogs,
  filterLogs,
  getStats
} = require("../controllers/adminController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// 📜 All logs
router.get("/logs", protect, adminOnly, getLogs);

// 🔍 Filter logs
router.get("/logs/filter", protect, adminOnly, filterLogs);

// 📊 Stats
router.get("/stats", protect, adminOnly, getStats);

module.exports = router;
