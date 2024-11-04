import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar  className="header py-3 bg-dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home" className='fs-3 text-white px-4'><i className="fas fa-car text-danger"></i>
        RevGarage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto fs-4 px-4">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#services">Services</Nav.Link>
            <Nav.Link className='text-white' href="#services">Brands</Nav.Link>
            <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header