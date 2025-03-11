import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBVy-OvEtqBf5yGbwWy_KLHS4j_A0qJR4",
    authDomain: "riverlytics.firebaseapp.com",
    projectId: "riverlytics",
    storageBucket: "riverlytics.firebasestorage.app",
    messagingSenderId: "907247668690",
    appId: "1:907247668690:web:45157692e03c52aa190c0b",
    measurementId: "G-WGNLJ2HEC9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export { auth, signInWithGoogle };
