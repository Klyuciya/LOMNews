import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, checkIsAuth} from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
//   const data = useSelector((state) => state.auth);
//   const user = {data};
//   console.log(`user object: `, user);
// console.log("Role:" + JSON.stringify(data.user.role))

  const { status } = useSelector((state) => state.auth); //for toastify modal window

  //console.log("status: " + status);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
 



  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate("/");

  }, [status, isAuth, navigate]);

  // console.log(data);
  

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }));
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
          Login
        </h1>
        <label className="text-xs  text-400 font-semibold ">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-1 text-black w-full rounded-md bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          />
        </label>
        <label className="text-xs text-400 font-semibold px-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 text-black w-full rounded-md bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 "
          />
        </label>
        <div className="flex gap-8 justify-center mt-4">
          <Button type="submit" onClick={handleSubmit} className=" py-2 px-4">
            Login
          </Button>
          <Link
            to="/register"
            className="flex justify-center items-center text-xs text-black font-bold px-4 "
          >
            New to LOMNews? Sign Up
          </Link>
        </div>
      </form>
    </Container>
  );
};
