import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WishlistPage = ({ wishlistItems, wishlist, setWishlist }) => {

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <Row>
          {wishlistItems.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: ${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center mt-5">
          <h4 className="text-muted">Your Wishlist is Empty</h4>
          <Button variant="success" className="mt-3" onClick={() => setWishlist(wishlist ? false : true)}>
            Let's Find Some Favorites!
          </Button>
        </div>
      )}
    </Container>
  );
};

export default WishlistPage;



// implement this page