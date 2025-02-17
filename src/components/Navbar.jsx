import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import HalfNav from './HalfNav'

const NavbarComponent = () => {
  const searchBoxStyles = {
    borderRadius: '20px'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex" style={{gap: '5%'}}>
      <Navbar.Brand href="#" className='mx-5'>Shopwan</Navbar.Brand>
        <Form className="d-flex" style={{width:"30%"}}>
            <Form.Control 
              style={searchBoxStyles}
              type="search"
              placeholder="Search"
              className="me-2 b-r-25"
              aria-label="Search"
            />
            <Button variant="outline-success " style={searchBoxStyles}>Search</Button>
        </Form>
        <HalfNav></HalfNav>
    </Navbar>
  )
}

export default NavbarComponent
