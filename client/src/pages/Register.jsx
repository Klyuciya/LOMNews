import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, checkIsAuth } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  const { status } = useSelector((state) => state.auth); //for toastify modal window

  const data = useSelector((state) => state.auth);
  const user = {data};
  console.log(`user object: `, user);


  console.log("status regist: " + status);
  const isAuth = useSelector(checkIsAuth);
  console.log("isAuth regist: " + isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      console.log("if (status): " + status);
      toast(status);
    }
    if (isAuth) navigate("/"); //if logged in then homepage
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ name, email, password, avatarURL }));
      //clean form
      setName("");
      setEmail("");
      setPassword("");
      setAvatarURL("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/4 h-60 mx-auto mt-40"
      >
        <h1 className="text-lg  font-bold text-black text-center py-2">
          Registration form
        </h1>
        <label className="">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className=" border py-1 px-2 "
          />
        </label>
        <label className="px-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" border py-1 px-2 "
          />
        </label>
        <label className="px-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className=" border py-1 px-2 "
          />
        </label>
        <label className="px-2">
          Avatar:
          <input
            type="text"
            value={avatarURL}
            onChange={(e) => setAvatarURL(e.target.value)}
            placeholder="Avatar"
            className=" border py-1 px-2 "
          />
        </label>

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
