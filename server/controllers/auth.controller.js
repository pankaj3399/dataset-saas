// Authentication controller
const User = require("../models/user");
const { auth } = require("../config/firebase-admin");

/**
 * Verify user and return user data
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const verifyUser = async (req, res) => {
  try {
    // User is already verified by middleware
    const user = await User.findOne({ firebaseUid: req.user.uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found in database",
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    return res.status(200).json({
      success: true,
      message: "User authenticated successfully",
      data: {
        uid: user.firebaseUid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during authentication",
    });
  }
};

/**
 * Register a new user in MongoDB after Firebase authentication
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const registerUser = async (req, res) => {
  try {
    // User is already verified by middleware and created if needed
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        uid: req.mongoUser.firebaseUid,
        email: req.mongoUser.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

module.exports = {
  verifyUser,
  registerUser,
};
