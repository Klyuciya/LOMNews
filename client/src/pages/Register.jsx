import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, checkIsAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  const { status } = useSelector((state) => state.auth); //for toastify modal window

  const data = useSelector((state) => state.auth);
  const user = {data};
  console.log(`user object: `, user);


  console.log("status regist: " + status);
  const isAuth = useSelector(checkIsAuth);
  //console.log("isAuth regist: " + isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      console.log("register.jsx if (status): " + status);
      toast(status);
    }
    if (isAuth) navigate("/"); //if logged in then homepage
  }, [status, isAuth, navigate]);

  console.log("status regist2: " + status);

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ name, email, password, avatarURL }));
      //clean form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAvatarURL("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center "
      style={{ height: window.innerHeight - 54 }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        // onSubmit={handleSubmit(onSubmit)}
        className="w-1/4 h-60 mx-auto mt-40"
      >
        <h1 className="text-lg  font-bold text-black text-center py-2 pt-4">
          Registration form
        </h1>
        <Row className="mb-2 py-2">
          <label className="px-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className=" border py-1 px-2 "
          />
        </Row>
        <Row className="mb-2 py-2">
          <label className="px-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" border py-1 px-2 "
          />
        </Row>
        <Row className="mb-2 py-2">
          <label className="px-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className=" border py-1 px-2 "
          />
        </Row>
        <Row className="mb-2 py-2">
          <label className="px-2">Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className=" border py-1 px-2 "
          />
        </Row>
        <Row className="mb-2 py-2">
          <label className="px-2">Avatar:</label>
          <input
            type="text"
            value={avatarURL}
            onChange={(e) => setAvatarURL(e.target.value)}
            placeholder="Avatar"
            className=" border py-1 px-2 "
          />
        </Row>
        <div className="flex gap-8 justify-center mt-4">
          <Button type="submit" onClick={handleSubmit} className=" py-2 px-4">
            Sign up
          </Button>
          <Link
            to="/login"
            className="flex justify-center items-center text-xs text-black font-bold py-2 px-4"
          >
            Already signed up? Log in
          </Link>
        </div>
      </form>
    </Container>
  );
};
