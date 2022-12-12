import React from "react";
import Nav from "./Nav";
import Home from "./Home/Home";
import About from "./About";
import DashboardMain from "./Dashboard/Index";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Dashboard/Users";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "./NotFoundPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Folders from "./Dashboard/Folders";
import PlotExemple from "./Dashboard/PlotExemple";
import Clients from "./Dashboard/Clients";
import Login from "./Authentication/Index";

import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";

import { firebaseConfig } from "./Authentication/firebase-config";
//import TestParent from "./TestParent";

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);
//export const auth = getAuth(app);

export default function App() {
  initializeApp(firebaseConfig);
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About user="f" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:s" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardMain />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="folders" element={<Folders />} />
              <Route path="users" element={<Users />} />
              <Route path="plot" element={<PlotExemple />} />
              <Route path="clients" element={<Clients />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
