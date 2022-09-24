import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, checkIsAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from "yup";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSelector((state) => state.auth); //for toastify modal window
  const { message } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  // const { data } = useSelector((state) => state.auth.data);
  // console.log("userinfo.role " + user + status);

  console.log("Login.jsx status: " + status);
  console.log("Login.jsx token: " + token);
  console.log("Login.jsx message: " + message);
  //console.log("Login.jsx user.email): " + data.user.email);
  // console.log("Login.jsx data.role): " + data);
  const isAuth = useSelector(checkIsAuth);
  //  const logMes = useSelector(LoginMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("Login.jsx logMes: " + logMes);

  useEffect(() => {
    if (status) {
      toast(status);
      console.log("Login.jsx status:useEffect: " + status);
    }
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  // const initialValues = {
  //   email: "",
  //   password: "",
  // };

  // const validationSchema = yup.object().shape({
  //   email: yup.string().min(3, "email min").required(),
  //   password: yup.string().min(4).max(20).required(),
  // });

  return (
    <Container className="d-flex  " style={{ height: window.innerHeight - 54 }}>
      {/* <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        //  onSubmit={(e) => e.preventDefault()}
        validationSchema={validationSchema}
      > */}
      <Form onSubmit={(e) => e.preventDefault()} className="h-60 mx-auto mt-40">
        <h1 className="text-lg  font-bold text-black text-center py-2">
          Login
        </h1>
        <Row className="mb-6 py-2">
          <label className="">Email:</label>
          {/* <ErrorMessage name="email" component="span" /> */}
          <input
            type="email"
            value={email}
            // onChange={Formik.handleChange}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-1  border py-2 px-2 "
            // name="email"
          />
        </Row>
        <Row className="mb-6 py-2">
          <label className="">Password:</label>
          {/* <ErrorMessage name="password" component="span" /> */}
          <input
            type="password"
            value={password}
            // onChange={Formik.handleChange}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 border py-2 px-2"
            // name="password"
          />
        </Row>

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
      {/* </Formik> */}
    </Container>
  );
};
