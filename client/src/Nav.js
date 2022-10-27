import React from "react";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Nav_() {
  const expand = "md";
  const path = window.location.pathname;

  return (
    <>
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
                <Nav.Link>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/features">
                    Features
                  </Link>
                </Nav.Link>
                {/* <Nav.Item> */}
                <Link className="nav-link" to="/login">
                  <Button
                    variant="primary"
                    style={{ height: "35px", marginTop: "2px" }}
                    size="sm"
                  >
                    Login
                  </Button>
                </Link>
                {/* </Nav.Item> */}
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
    </>
  );
}
