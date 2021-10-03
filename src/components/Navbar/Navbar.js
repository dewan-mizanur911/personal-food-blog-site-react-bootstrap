import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const NavbarContainer = () => {
    return (
    <Navbar variant="dark" expand="lg" className="mb-5">
  <Container fluid>
    <Navbar.Brand href="/home">
      <img
        alt=""
        src={logo}
        width="160"
        height="50"
        className="d-inline-block align-top"
      />{" "}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link>
         <NavLink to="/home" className="nav-link">Home</NavLink>
        </Nav.Link>
        <Nav.Link>
         <NavLink to="/todos" className="nav-link">To-do</NavLink>
        </Nav.Link>
        <Nav.Link>
         <NavLink to="/meals" className="nav-link">Meals</NavLink>
        </Nav.Link>
        <Nav.Link>
         <NavLink to="/about" className="nav-link">About Us</NavLink>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
};

export default NavbarContainer;