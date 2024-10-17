import React from 'react';
import '../../styles/nav/adminNav.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


export function AdminNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  style={{ backgroundColor: '#007bff' }}>
      <Container>
        <Navbar.Brand href="#home">Organize IT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Tasks</Nav.Link>
            <Nav.Link href="#link">Calender</Nav.Link>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Employees</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Company Tasks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Insights</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
