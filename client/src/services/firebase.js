// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKuWFOKAUBfanYLuW5F0BaY3CHqeEFHH4",
  authDomain: "riverytics.firebaseapp.com",
  projectId: "riverytics",
  storageBucket: "riverytics.firebasestorage.app",
  messagingSenderId: "45456910880",
  appId: "1:45456910880:web:a36e5ba85f55f371546a45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Authentication functions
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const registerWithEmailAndPassword = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Update profile with display name if provided
    if (displayName) {
      await updateProfile(result.user, { displayName });
    }

    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get the current user token
const getCurrentUserToken = async () => {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    return await user.getIdToken(true);
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  loginWithGoogle,
  resetPassword,
  logoutUser,
  getCurrentUserToken,
  onAuthStateChanged,
};
