import React from "react";
import ProductCard from "./lowerMiddle/ProductCard";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const CartPage = ({ user, cart, setCart, clickedProduct, setClickedProduct, productPageProduct, setProductPageProduct }) => {

  console.log("User : " + user);
  console.log("Cart : "+cart);
  console.log("clickedProduct : "+clickedProduct);
  console.log("productPageProduct : "+productPageProduct);

  const [cartItems, setCartItems] = useState([]);
  const apiUrl = import.meta.env.VITE_USER_CART_ITEMS;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userEmail = user.primaryEmailAddress.emailAddress; // Replace with actual user email
        console.log("userEmail : "+userEmail);
        const response = await axios.get(apiUrl, {
          params: { email: userEmail },
        });
        console.log(response.data.cart);
        setCartItems(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCart();
  }, []);

  console.log("cartItems : "+cartItems);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <Row className="g-0 justify-content-center">
        {cartItems.map((post, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex">
            <ProductCard postData={post} clickedProduct={clickedProduct} setClickedProduct={setClickedProduct} productPageProduct={productPageProduct} setProductPageProduct={setProductPageProduct} />
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
