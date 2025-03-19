import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { AiFillCarryOut } from "react-icons/ai";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import axios from "axios";
import "./ProductCard.css";
import { useUser } from "@clerk/clerk-react";

const addToCartAPI = import.meta.env.VITE_USERCART_API;
const addToWishlistAPI = import.meta.env.VITE_USERWISHLIST_API;
const removeFromCartAPI = import.meta.env.VITE_REMOVE_FROM_CART;
const removeFromWishlistAPI = import.meta.env.VITE_REMOVE_FROM_WISHLIST;

const ProductCard = ({ifCartPage, ifWishlistPage, postData, clickedProduct, setClickedProduct, productPageProduct, setProductPageProduct }) => {
  const { isSignedIn, user } = useUser();

  const addToCart = async () => {
    if (isSignedIn && user) {
      try {
        console.log(postData);
        const response = await axios.post(addToCartAPI, {
          productId: postData.uid,
          email: user.primaryEmailAddress.emailAddress,
        });
        alert(response.data.message);
      } catch (error) {
        console.error("Error adding product to cart", error);
        alert(error.response?.data?.message || "Failed to add product to cart");
      }
    }
  };

  const removeFromCart = async () => {
    if (isSignedIn && user) {
      try {
        const response = await axios.delete(`${removeFromCartAPI}/${postData.uid}`, {
          data: { email: user.primaryEmailAddress.emailAddress }, // Send email in request body
        });
  
        alert(response.data.message);
        console.log("Updated Cart:", response.data.cart);
  
        // Optionally, update UI state after removal
      } catch (error) {
        console.error("Error removing product from cart", error);
        alert(error.response?.data?.message || "Failed to remove product from cart");
      }
    }
  };  

  const addToWishlist = async () => {
    if (isSignedIn && user) {
      try {
        const response = await axios.post(addToWishlistAPI, {
          productId: postData.uid,
          email: user.primaryEmailAddress.emailAddress,
        });
        alert(response.data.message);
      } catch (error) {
        console.error("Error adding product to wishlist", error);
        alert(error.response?.data?.message || "Failed to add product to wishlist");
      }
    }
  };

  const removeFromWishlist = async () => {
    if (isSignedIn && user) {
      try {
        const response = await axios.delete(`${removeFromWishlistAPI}/${postData.uid}`, {
          data: { email: user.primaryEmailAddress.emailAddress }, // Send email in request body
        });
  
        alert(response.data.message);
        console.log("Updated Wishlist:", response.data.wishlist);
  
        // Optionally, update UI state after removal
      } catch (error) {
        console.error("Error removing product from wishlist", error);
        alert(error.response?.data?.message || "Failed to remove product from wishlist");
      }
    }
  };  

  return (
    <Card style={{ width: "18rem", border: "1px solid #4635B1", background: "#FFFBCA" }} >
      <Card.Img
        variant="top"
        src={postData.images[0]} // Direct Cloudinary URL stored in DB
        alt="Product Image"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        onClick={() => {
          setClickedProduct(true);
          setProductPageProduct(postData);
        }}
      />
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
        {
          !ifCartPage && !ifWishlistPage ? <Button variant="primary" className="d-flex gap-2 btn-sm my-1" onClick={addToCart}>
                          ADD TO CART <FaCartArrowDown fill="yellow" />
                        </Button> : ifCartPage ? 
                        <Button variant="primary" className="d-flex gap-2 btn-sm my-1" onClick={removeFromCart}>
                          Remove From Cart <FaCartArrowDown fill="yellow" />
                        </Button> : ""
        }
        {
          !ifCartPage && !ifWishlistPage ? <Button variant="danger" className="d-flex gap-2 btn-sm my-1" onClick={addToWishlist}>
                          ADD TO WISHLIST <FaHeart fill="white" />
                        </Button> : ifWishlistPage ? 
                        <Button variant="primary" className="d-flex gap-2 btn-sm my-1" onClick={removeFromWishlist}>
                          Remove From WishList <FaCartArrowDown fill="yellow" />
                        </Button> : ""
        }

      </Card.Body>
    </Card>
  );
};

export default ProductCard;
