import React from 'react';
import '../../styles/nav/adminNav.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


export function PreAdminNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container>
        <Navbar.Brand as={'text'} >Organize IT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Customer Support
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Insights</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#a">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
