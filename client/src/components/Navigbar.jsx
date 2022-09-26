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
const date = new Date();
const time = `${date.getHours()}:${('0'+ date.getMinutes()).slice(-2)}`
// const weekOfMonth = Math.ceil(current.getDate() / 7);
 
//   const date = `${current.getDate()} ${monthNames[current.getMonth()+1]} ${weekOfMonth} ${current.getFullYear()}`;
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
	    <div class="container">
	     	<div class="top_ber">
				<div class="row">
		    		<div class="col-md-6">
						<div class="top_ber_left">
            {date.toDateString()} {time.toLocaleString('en-US', { hour: 'numeric', hour12: true},60000)}
						</div>
		    		</div>
		    		<div class="col-md-6">
		    			<div class="top_ber_right">
		    				<div class="top-menu">
		    					<ul class="nav navbar-nav flex-row ">    
                  <li><NavLink className="text-decoration-none"
              to={"/"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}>
              Home
            </NavLink></li>
            <li><NavLink className="text-decoration-none"
              to={"/news"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              News
            </NavLink></li>
            <li><NavLink className="text-decoration-none"
              to={"/new"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Add News
            </NavLink></li>
            <li><NavLink className="text-decoration-none"
              to={"/new"}
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Edit News
            </NavLink></li>
            <li><NavLink
              to={"/news/user/my"} className="text-decoration-none"
              href="#"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              My News
            </NavLink></li>
            <li>
            {isAuth ? (
            <NavLink onClick={logoutHandler} variant="primary" className="text-decoration-none"> 
              Logout
            </NavLink>
          ) : (
            <NavLink className="text-decoration-none" to={"/login"}>Login</NavLink>
          )}
            </li>
			                        {/* <li><a href="#" style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >Home</a></li> */}
                  {/* <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="#home">Logo</Navbar.Brand>
//           <Nav className="me-auto">
//             <NavLink
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
            <Button onClick={logoutHandler} variant="primary">
              Logout
            </Button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </Navbar> */}
	                    		</ul>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
	     	</div>
      </div>
//     <div>
//       <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="#home">Logo</Navbar.Brand>
//           <Nav className="me-auto">
//             <NavLink
//               to={"/"}
//               href="#"
//               style={({ isActive }) => (isActive ? activeStyles : undefined)}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to={"/news"}
//               href="#"
//               style={({ isActive }) => (isActive ? activeStyles : undefined)}
//             >
//               News
//             </NavLink>
//             <NavLink
//               to={"/new"}
//               href="#"
//               style={({ isActive }) => (isActive ? activeStyles : undefined)}
//             >
//               Add News
//             </NavLink>
//             <NavLink
//               to={"/new"}
//               href="#"
//               style={({ isActive }) => (isActive ? activeStyles : undefined)}
//             >
//               Edit News
//             </NavLink>
// <br></br>
//             <NavLink
//               to={"/news/user/my"}
//               href="#"
//               style={({ isActive }) => (isActive ? activeStyles : undefined)}
//             >
//               My News
//             </NavLink>

//           </Nav>
//         </Container>
//         <div className=" px-4 py-2">
//           {isAuth ? (
//             <Button onClick={logoutHandler} variant="primary">
//               Logout
//             </Button>
//           ) : (
//             <Link to={"/login"}>Login</Link>
//           )}
//         </div>
//       </Navbar>
//     </div>
  );
};
