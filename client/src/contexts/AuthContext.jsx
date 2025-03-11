import React, { createContext, useContext, useState, useEffect } from "react";
import {
  auth,
  onAuthStateChanged,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  loginWithGoogle,
  logoutUser,
  resetPassword,
} from "../services/firebase";
import { authAPI } from "../services/api";

// Create context
const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [mongoUser, setMongoUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Login with email and password
  const login = async (email, password) => {
    setError("");
    try {
      const user = await loginWithEmailAndPassword(email, password);

      // Verify with backend
      await syncWithBackend();

      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Register with email and password
  const register = async (email, password, displayName) => {
    setError("");
    try {
      const user = await registerWithEmailAndPassword(
        email,
        password,
        displayName
      );

      // Register with backend
      await syncWithBackend();

      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Login with Google
  const loginWithGoogleProvider = async () => {
    setError("");
    try {
      const user = await loginWithGoogle();

      // Verify with backend
      await syncWithBackend();

      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Reset password
  const forgotPassword = async (email) => {
    setError("");
    try {
      await resetPassword(email);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    setError("");
    try {
      await logoutUser();
      setMongoUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Sync with MongoDB through backend
  const syncWithBackend = async () => {
    try {
      // Register user in MongoDB if needed
      await authAPI.register();

      // Get user data from backend
      const response = await authAPI.verifyToken();

      if (response.data.success) {
        setMongoUser(response.data.data);
      }

      return response.data;
    } catch (err) {
      console.error("Error syncing with backend:", err);
      return null;
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        // If user is logged in, sync with backend
        try {
          await syncWithBackend();
        } catch (err) {
          console.error("Error syncing with backend:", err);
        }
      } else {
        // If user is logged out, clear MongoDB user
        setMongoUser(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Context value
  const value = {
    currentUser,
    mongoUser,
    login,
    register,
    loginWithGoogle: loginWithGoogleProvider,
    logout,
    forgotPassword,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
