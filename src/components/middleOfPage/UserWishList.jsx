import React, { useState, useEffect } from "react";
import ProductCard from "./lowerMiddle/ProductCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const WishlistPage = ({ user, wishlist, setWishlist, clickedProduct, setClickedProduct, productPageProduct, setProductPageProduct }) => {
  
  console.log("User : ", user);
  console.log("Wishlist : ", wishlist);
  console.log("clickedProduct : ", clickedProduct);
  console.log("productPageProduct : ", productPageProduct);

  const [wishlistItems, setWishlistItems] = useState([]);
  const apiUrl = import.meta.env.VITE_USER_WISHLIST_ITEMS;

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const userEmail = user.primaryEmailAddress.emailAddress;
        console.log("userEmail : ", userEmail);
        const response = await axios.get(`${apiUrl}?email=${userEmail}`);
        console.log(response.data.wishlist);
        setWishlistItems(response.data.wishlist);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchWishlist();
  }, []);

  console.log("wishlistItems : ", wishlistItems);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className="justify-content-center">
        <Row className="g-0 justify-content-center">
          {wishlistItems.map((post, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex">
              <ProductCard ifCartPage={false} ifWishlistPage={true} postData={post} clickedProduct={clickedProduct} setClickedProduct={setClickedProduct} productPageProduct={productPageProduct} setProductPageProduct={setProductPageProduct} />
            </Col>
          ))}
        </Row>
        <Button variant="success" className="mt-3" onClick={() => setWishlist(wishlist ? false : true)}>
          Find Some More Favorites!
        </Button>
      </div>
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
