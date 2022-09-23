import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export const Navigbar = () => {
  const isAuth = useSelector(checkIsAuth);

  const dispatch = useDispatch();

  console.log("isAuth  " + isAuth);
  //highlight active link
  const activeStyles = {
    color: "black",
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("You have been logged out");
  };
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to={"/"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/posts"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              News
            </NavLink>
            <NavLink
              to={"/new"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Add News
            </NavLink>
          </Nav>
        </Container>
        <div className=" px-4 py-2">
          {isAuth ? (
            <Button onClick={logoutHandler} variant="primary">
              Logout
            </Button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </Navbar>
    </div>
  );
};
