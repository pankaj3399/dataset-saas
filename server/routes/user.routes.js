// User routes
const express = require("express");
const router = express.Router();
const {
  verifyToken,
  ensureUserExists,
} = require("../middleware/authMiddleware");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/user.controller");

// Apply middleware to all routes
router.use(verifyToken);
router.use(ensureUserExists);

// Get user profile
router.get("/profile", getUserProfile);

// Update user profile
router.put("/profile", updateUserProfile);

module.exports = router;
