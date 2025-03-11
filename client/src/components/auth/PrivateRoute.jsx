import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Spinner from "../layouts/Spinner";

const PrivateRoute = () => {
  const { currentUser, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return <Spinner />;
  }

  // Redirect to login if not authenticated
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
