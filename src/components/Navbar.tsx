import React, { useState, useEffect } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
              <Nav className="me-auto">
                <Navbar.Brand href="" className="intro">A</Navbar.Brand>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link href="#aboutMe">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default NavigationBar;