import React from "react";
import { Nav, Container } from "react-bootstrap";
import "./CategoryTabs.css"; // Import CSS for styling

const CategoryTabs = ({ categories, chosenProducts, setChosenProducts }) => {
  return (
    <Container fluid className="bg-light category-tabs-container">
      <Nav variant="pills" className="justify-content-center flex-nowrap overflow-auto">
        {categories.map((category, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              onClick={() => setChosenProducts(category)}
              active={chosenProducts === category} // Highlight active tab
              className="category-tab">
              {category}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default CategoryTabs;
