const router = require("express").Router();

const {
  getAllUsers,
  promoteUser,
  blockUser,
  unblockUser
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

// All routes below are ADMIN ONLY

router.get("/", protect, isAdmin, getAllUsers);
router.patch("/:id/promote", protect, isAdmin, promoteUser);
router.patch("/:id/block", protect, isAdmin, blockUser);
router.patch("/:id/unblock", protect, isAdmin, unblockUser);

module.exports = router;
