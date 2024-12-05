import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/myState'; // Assuming you manage auth context here

const ProtectedRouteForAdmin = ({ children }) => {
  const { user, isAdmin } = useAuth(); // Assuming user and admin status are provided by context

  if (!user || !isAdmin) {
    // If not logged in or not an admin, redirect to login
    return <Navigate to="/login" />;
  }

  return children; // Render the admin page if the user is an admin
};

export { ProtectedRouteForAdmin };
