import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import Dashboard from "./components/dashboard/Dashboard";
// import Profile from "./components/Profile";
// import NotFound from "./components/NotFound";
import PrivateRoute from "./components/auth/PrivateRoute";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Route>

          {/* Redirect / to dashboard if logged in, otherwise to login */}
          <Route
            path="/"
            element={
              // <RequireAuth redirectTo="/login" redirectIfFound="/dashboard" />
              <Landing />
            }
          />

          
        </Routes>
      </AuthProvider>
    </Router>
  );
}

// Helper component to manage redirects
function RequireAuth({ redirectTo, redirectIfFound }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Navigate to={redirectIfFound} replace />
  ) : (
    <Navigate to={redirectTo} replace />
  );
}

export default App;
