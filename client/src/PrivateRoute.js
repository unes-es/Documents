import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function PrivateRoute() {
  let auth = { token: getAuth().currentUser != null ? true : false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
