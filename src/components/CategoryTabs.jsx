import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CategoryTabs = ({ categories }) => {
  return (
    <Navbar expand="lg" className="bg-light w-100 p-3 rounded shadow-sm" style={{ width: "100vw" }}>
      <Container fluid>
        <Nav className="d-flex flex-column flex-lg-row w-100 justify-content-lg-between align-items-lg-center" id="category-nav">
          {categories.map((category, index) => (
            <Nav.Link
              key={index}
              onClick={() => onSelectCategory(category)}
              className="text-dark fw-bold px-3 py-2"
              style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
            >
              {category}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CategoryTabs
