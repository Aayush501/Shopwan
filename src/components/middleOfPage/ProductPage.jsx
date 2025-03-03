import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ProductPage = ({ product, user }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm p-3">
            <Row>
              {/* Product Image */}
              <Col md={5} className="text-center">
                <Card.Img variant="top" src={product.image} className="rounded" />
              </Col>

              {/* Product Details */}
              <Col md={7}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <h4>
                    {product.currency} {product.price}
                  </h4>
                  <Button variant="warning" className="mt-2">
                    Add to Cart
                  </Button>
                  <p className="mt-2">User: {user?.name || "Guest"}</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
