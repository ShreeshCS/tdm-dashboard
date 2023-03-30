
import React from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="headerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png"
              alt="Deloitte."
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">People Manager</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="pageHead">
        <Navbar className="navbar_class">
          <NavLink id="projD" to='/'>Bulk Upload</NavLink>
          <NavLink id="empD" to="/employeeDetails">Employee Details</NavLink>
        </Navbar>
      </div>

    </div >
  );
};

export default Header;



// import {Logo} from "./Childs/Logo";
// import { DashboardHeading } from "./Childs/DashboardHeading";
// import { Fragment } from "react";
// import './Header.css';

// function Header() {
//   return (
//     <Fragment>
//       <div>
//         <Logo />
//         <DashboardHeading />
//       </div>
//     </Fragment>
//   );
// }

// export default Header;
