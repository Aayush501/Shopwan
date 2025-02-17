import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import HalfNav from './HalfNav';
import Container from 'react-bootstrap/Container';
import SearchInput from './SearchInput';

const NavbarComponent = () => {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shopwan</Navbar.Brand>
        <SearchInput></SearchInput>
        <div>
        <Navbar.Toggle aria-controls="navbarScroll2" />
        <Navbar.Collapse id='navbarScroll2'><HalfNav></HalfNav></Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
