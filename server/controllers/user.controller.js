// User controller for user-related operations
const User = require("../models/user");

/**
 * Get user profile from MongoDB
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.user.uid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Return user data excluding sensitive fields
    return res.status(200).json({
      success: true,
      data: {
        id: user._id,
        firebaseUid: user.firebaseUid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        address: user.address,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error getting user profile:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching user profile",
    });
  }
};

/**
 * Update user profile in MongoDB
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const updateUserProfile = async (req, res) => {
  try {
    // Fields that users are allowed to update
    const allowedUpdates = ["displayName", "phoneNumber", "address"];

    // Filter request body to only include allowed fields
    const updates = {};
    Object.keys(req.body).forEach((key) => {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    });

    // Update user
    const updatedUser = await User.findOneAndUpdate(
      { firebaseUid: req.user.uid },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        displayName: updatedUser.displayName,
        phoneNumber: updatedUser.phoneNumber,
        address: updatedUser.address,
        updatedAt: updatedUser.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while updating profile",
    });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
