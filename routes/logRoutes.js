const router = require("express").Router();

const { getLogs } = require("../controllers/logController");
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

router.get("/", protect, isAdmin, getLogs);

module.exports = router;
