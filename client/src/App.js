import React from "react";
import Nav_ from "./Nav";
import Home from "./Home/Home";
import About from "./About";
import Dashboard from "./Dashboard/Index";
import Users from "./Dashboard/Users";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "./NotFoundPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Folders from "./Dashboard/Folders";
import PlotExemple from "./Dashboard/PlotExemple";
import Clients from "./Dashboard/Clients";

export default function App() {
  return (
    <Router>
      <div>
        <Nav_ />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={"login"} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="folders" element={<Folders />} />
            <Route path="users" element={<Users />} />
            <Route path="plot" element={<PlotExemple />} />
            <Route path="clients" element={<Clients />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
