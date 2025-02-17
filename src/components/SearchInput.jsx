import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    const searchBoxStyles = {
        borderRadius: '20px'
    }
  return (
    <>
    <Form className="m-1 d-flex" size='sm'>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          style={searchBoxStyles}
        />
        <Button variant="outline-secondary" size='sm' id="button-addon2" style={searchBoxStyles}>
            <IoSearch size={30} />
        </Button>
    </Form>
    </>
  )
}

export default SearchInput
