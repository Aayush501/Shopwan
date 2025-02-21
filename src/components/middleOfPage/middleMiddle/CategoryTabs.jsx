import React from "react";
import {  Nav, Container } from "react-bootstrap";
import {Link} from "react-router-dom";


const CategoryTabs = ({ categories, chosenProducts, setChosenProducts }) => {
  return (
    <Container fluid className="bg-light">
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link onClick={() => setChosenProducts("All")}>{categories[0]}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setChosenProducts("Clothes")}>{categories[1]}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setChosenProducts("Jewelleries")}>{categories[2]}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setChosenProducts("Footwares")}>{categories[3]}</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default CategoryTabs
