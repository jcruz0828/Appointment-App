// src/components/nav.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/nav.css'; 
import { useState,useEffect } from 'react'; 

const NavigationBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => { 
    if (window.scrollY === 0) {
      setVisible(true); // Show the navbar
      return;
    }
    // If scrolling down, hide the navbar; if scrolling up, show it
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency array to track last scroll position



  return (
    <Navbar bg="light" data-bs-theme="light" className={`navbar ${visible ? 'visible' : 'hidden'}`}>
    <Container>
      <section id='brand'>
        <Navbar.Brand href="/home">Organize IT</Navbar.Brand>
      </section>
      <section id="links">
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </section>
    </Container>
  </Navbar>
  );
};

export default NavigationBar;
