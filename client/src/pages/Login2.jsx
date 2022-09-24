import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, checkIsAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Container, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSelector((state) => state.auth); //for toastify modal window
  //console.log("status: " + status);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }));
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Form>
        <h1 className="text-lg  font-bold text-black text-center py-2">
          Login
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="text" placeholder="password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* <label className="text-xs  text-400 font-semibold px-4">
          Email:</label>
          <Form.Label>City</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-1  border py-1 px-2 "
          /> */}

        {/* <label className="text-xs text-400 font-semibold px-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 border py-1 px-2"
          />
        </label> */}
        <div className="flex gap-8 justify-center mt-4">
          <Button type="submit" onClick={handleSubmit} className=" py-2 px-4">
            Login
          </Button>
          <Link
            to="/register"
            className="flex justify-center items-center  px-4 "
          >
            New to LOMNews? Sign Up
          </Link>
        </div>
      </Form>
    </Container>
  );
};
