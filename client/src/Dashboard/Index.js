import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SideBar from "./SideBar";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

export default function index() {
  return (
    <Row>
      <Col className="sideBar" md={2}>
        <SideBar />
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
}
