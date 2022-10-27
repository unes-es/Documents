import React from "react";

import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  let auth = true;
  if (!auth) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}
