import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { Button, Form, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import Alert from "../Alert";

export default function Login() {
  const navigate = useNavigate();
  const auth = getAuth();
  const { s } = useParams();

  const [key, setKey] = useState(s);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({ email: "", password: "", username: "" });

  const handleChange = (e) => {
    const user_ = { ...user };
    user_[e.target.name] = e.target.value;
    setUser(user_);
  };

  const signUp = (e) => {
    const er = [];
    setErrors(er);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: user.username,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log(error);
            const er = [...errors];
            er.push(error.message);
            setErrors(er);
            console.log(errors);
          });
        // Signed in
        console.log(userCredential);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        const er = [...errors];
        er.push(error.message);
        setErrors(er);
        console.log(errors);
        // ..
      });
  };
  const signIn = (e) => {
    const er = [];
    setErrors(er);
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const er = [...errors];
        er.push(error.message);
        setErrors(er);
        console.log(errorMessage);
      });
  };

  return getAuth().currentUser === null ? (
    <Row className="justify-content-md-center">
      <Col lg="5" md="5" xs="12" sm="12">
        {errors.length > 0 ? (
          <Alert>
            <ul>
              {errors.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </Alert>
        ) : (
          ""
        )}
        <Tabs
          variant="pills"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          fill
        >
          <Tab eventKey="SignIn" title="Sign In">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={user.email}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={user.password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  signIn(e);
                }}
                variant="primary"
                type="submit"
              >
                Sign In
              </Button>
            </Form>
          </Tab>
          <Tab title="Or"></Tab>
          <Tab eventKey="SignUp" title="Sign Up">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={user.username}
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={user.email}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={user.password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  signUp(e);
                }}
                variant="primary"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  ) : (
    <Navigate to="/dashboard" />
  );
}
