// Firebase Admin SDK Configuration
const admin = require("firebase-admin");
const path = require("path");
require("dotenv").config();

// Initialize Firebase Admin
const initFirebaseAdmin = () => {
  if (!admin.apps.length) {
    try {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error) {
      console.error("Error initializing Firebase Admin:", error);
      throw error;
    }
  }
  return admin;
};

module.exports = {
  admin: initFirebaseAdmin(),
  auth: initFirebaseAdmin().auth(),
};
