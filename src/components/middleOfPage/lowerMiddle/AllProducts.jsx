import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './AllProducts.css'; // Import CSS for styling

const allProductsApi = import.meta.env.VITE_ALL_PRODUCTS;

const AllProducts = () => {
  const [posts, setPosts] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(allProductsApi) // API request
      .then((response) => {
        setPosts(response.data); // Store data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []); // Runs once when component mounts

  return (
    <Container fluid className="all-products-container">
      {loading ? (
        <div className="loading-container">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row className="g-0 justify-content-center">
          {posts.map((post, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex">
              <ProductCard postData={post} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default AllProducts;
