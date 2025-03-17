import React, { useState } from "react";
import Navbar from "../topOfThePage/Navbar";
import HomeContent from "./HomeContent";
import Footer from "../Footer";
import UserCart from "./UserCart";
import UserWishList from "./UserWishList";
import ProductPage from "./ProductPage";
import { useUser } from "@clerk/clerk-react";

const Home = () => {
  const homeStyle = { marginBottom: "10px" };
  const { user } = useUser();

  // State variables
  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [clickedProduct, setClickedProduct] = useState(false);
  const [productPageProduct, setProductPageProduct] = useState(null);

  return (
    <>
      <div style={homeStyle}>
        <Navbar cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />
      </div>

      <div style={homeStyle} className="w-100 d-flex flex-column justify-content-center align-items-center">
        {!cart && !wishlist && !clickedProduct ? (
          <HomeContent
            clickedProduct={clickedProduct}
            setClickedProduct={setClickedProduct}
            productPageProduct={productPageProduct}
            setProductPageProduct={setProductPageProduct}
          />
        ) : cart && !wishlist && !clickedProduct ? (
          <UserCart cartItems={user.cart} cart={cart} setCart={setCart} />
        ) : wishlist && !cart && !clickedProduct ? (
          <UserWishList wishlistItems={user.wishlist} wishlist={wishlist} setWishlist={setWishlist} />
        ) : (
          <ProductPage product={productPageProduct} user={user} />
        )}
      </div>

      <div style={homeStyle}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
