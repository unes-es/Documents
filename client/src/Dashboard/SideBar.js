import React from "react";
import Nav from "react-bootstrap/Nav";

import { Link, useNavigate } from "react-router-dom";

export default function SideBar(props) {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const pd = (e) => {
    e.preventDefault();
    const target = e.target.href;
    navigate(e.target.href.replace("http://localhost:3000", ""));
  };
  return (
    <Nav
      defaultActiveKey={path}
      variant="pills"
      className="flex-column sticky-top"
    >
      <Nav.Item>
        <Nav.Link href="/dashboard" onClick={(e) => pd(e)}>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Link href="/dashboard/folders" onClick={(e) => pd(e)}>
        <Link className="nav-link" to="/dashboard/folders">
          Folders
        </Link>
      </Nav.Link>
      <Nav.Link href="/dashboard/clients" onClick={(e) => pd(e)}>
        <Link className="nav-link" to="/dashboard/clients">
          Clients
        </Link>
      </Nav.Link>
      <Nav.Link href="/dashboard/users" onClick={(e) => pd(e)}>
        <Link className="nav-link" to="/dashboard/users">
          Users
        </Link>
      </Nav.Link>
      <Nav.Link href="/dashboard/plot" onClick={(e) => pd(e)}>
        <Link className="nav-link" to="/dashboard/plot">
          Plot
        </Link>
      </Nav.Link>
    </Nav>
  );
}
