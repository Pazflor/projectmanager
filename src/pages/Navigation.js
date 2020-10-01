import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand>Project Manager</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/employees">
              Employees
            </Nav.Link>
            <Nav.Link as={Link} to="/clients">
              Clients
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
