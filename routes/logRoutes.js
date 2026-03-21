const router = require("express").Router();
const { getLogs } = require("../controllers/logController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Logs
 *   description: Audit logs
 */

/**
 * @swagger
 * /api/logs:
 *   get:
 *     summary: Get audit logs
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logs fetched
 */
router.get("/", protect, adminOnly, getLogs);

module.exports = router;
