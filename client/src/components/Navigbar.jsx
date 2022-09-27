import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  console.log("isAuth  " + isAuth);
  //highlight active link
  const activeStyles = {
    color: "black",
  };

  const adminPanelHandler = () => {
    navigate("/admin");
    // dispatch(logout());
    // window.localStorage.removeItem("token");
    // toast("You have been logged out");
  };
  const adminPanelHandlerInactive = () => {
    // navigate("/admin");
    // dispatch(logout());
    // window.localStorage.removeItem("token");
    toast("Please Log in");
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
              to={"/news"}
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
            <NavLink
              to={"/new"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Edit News
            </NavLink>
            <br></br>
            <NavLink
              to={"/news/user/my"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              My News
            </NavLink>
          </Nav>
        </Container>
        <div className=" px-4 py-2">
          {isAuth ? (
            <Button onClick={adminPanelHandler} variant="primary">
              Admin
            </Button>
          ) : (
            <Button onClick={adminPanelHandlerInactive} variant="primary">
              Admin
            </Button>
          )}
        </div>
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
