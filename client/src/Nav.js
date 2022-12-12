import React, { useState } from "react";

import { Link, useNavigate, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default function Nav_() {
  const expand = "md";
  const path = window.location.pathname;
  const auth = getAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        //TODO: An error happened.
      });
  };

  return (
    <Navbar
      key={expand}
      bg="dark"
      variant="dark"
      expand={expand}
      className="mb-3"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Link className="nav-link" to="/">
            Documents
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              defaultActiveKey={path}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/features">
                Features
              </Link>

              {getAuth().currentUser != null ? (
                <>
                  <Button
                    variant="light"
                    onClick={() => {
                      logOut();
                    }}
                    size="sm"
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={(e) => {
                      navigate("/login/SignIn");
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="link"
                    onClick={(e) => {
                      navigate("/login/SignUp");
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </Nav>

            {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
