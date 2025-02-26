import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillCarryOut } from "react-icons/ai";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import "./ProductCard.css";

const addToCartAPI = import.meta.env.VITE_USERCART_API;
const addToWishlistAPI = import.meta.env.VITE_USERWISHLIST_API;

const ProductCard = ({ postData, setCart }) => {
  const addToCart = async () => {
    try {
      const response = await axios.post(addToCartAPI, { productId: postData.uid });
      setCart((prevCart) => [...prevCart, postData._id]);
      alert(response.data.message);
    } catch (error) {
      console.error("Error adding product to cart", error);
      alert(error.response?.data?.message || "Failed to add product to cart");
    }
  };

  const addToWishlist = async () => {
    try {
      const response = await axios.post(addToWishlistAPI, { productId: postData.uid });
      alert(response.data.message);
    } catch (error) {
      console.error("Error adding product to wishlist", error);
      alert(error.response?.data?.message || "Failed to add product to wishlist");
    }
  };

  return (
    <Card style={{ width: "18rem", border: "1px solid #4635B1", background: "#FFFBCA" }}>
      <Card.Img variant="top" src={postData.image} alt="Product Image" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>
          {postData.name}
        </Card.Title>
        <Card.Text style={{ fontSize: "0.9rem", textAlign: "center" }}>
          {postData.description}
        </Card.Text>
        <Card.Text className="d-flex align-items-center" style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#B771E5" }}>
          <HiDocumentCurrencyRupee size={20} fill="#B771E5" />
          {postData.price}
        </Card.Text>
        {postData.numberOfRatings > 0 && <Button variant="primary" className="d-flex gap-2 btn-sm">Rating</Button>}
      </Card.Body>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Button variant="primary" className="d-flex gap-2 btn-sm my-1">
          BUY <AiFillCarryOut fill="yellow" />
        </Button>
        <Button variant="primary" className="d-flex gap-2 btn-sm my-1" onClick={addToCart}>
          ADD TO CART <FaCartArrowDown fill="yellow" />
        </Button>
        <Button variant="danger" className="d-flex gap-2 btn-sm my-1" onClick={addToWishlist}>
          ADD TO WISHLIST <FaHeart fill="white" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
