const router = require("express").Router();

const {
  getUsers,
  promoteUser,
  blockUser,
  unblockUser
} = require("../controllers/userController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
console.log(getUsers, protect, adminOnly);
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users fetched
 */
router.get("/", protect, adminOnly, getUsers);

/**
 * @swagger
 * /api/users/{id}/promote:
 *   put:
 *     summary: Promote user to admin
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User promoted
 */
router.put("/:id/promote", protect, adminOnly, promoteUser);

module.exports = router;
