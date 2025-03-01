import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const CartPage = ({ cartItems, cart, setCart }) => {

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <Row>
          {cartItems.map((item, index) => (
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
          <h4 className="text-muted">You Have Not Added Anything In Your Cart</h4>
          <Button variant="primary" className="mt-3" onClick={() => setCart(cart ? false : true)} >Add Products</Button>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
