import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeContent.css"; // ✅ Import CSS for styling
import CategoryTabs from "./middleMiddle/CategoryTabs";
import ProductList from "./lowerMiddle/ProductList";
import Sidebar from "./lowerMiddle/Sidebar";
import { Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa"; // Sidebar Toggle Icon
import ProductsCarousel from "./upperMiddle/ProductsCarousel";

const HomeContent = () => { 
  const [chosenProducts, setChosenProducts] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setIsSidebarOpen(false); // Close sidebar on large screens
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Products Carousel */}
      <div className="carousel-container my-2">
        <ProductsCarousel />
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky-category my-2">
        <CategoryTabs
          categories={["All Products", "Clothes", "Jewelleries", "Footwear"]}
          chosenProducts={chosenProducts}
          setChosenProducts={setChosenProducts}
        />
      </div>

      {/* Sidebar + Product List Container */}
      <div className="content-container">
        {/* Sidebar Toggle Button (Visible on Small Screens) */}
        <Button
          className="sidebar-toggle d-lg-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </Button>

        {/* Sidebar (Hidden on Small Screens, Visible on Large Screens) */}
        <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar />
        </div>

        {/* Product List (Takes Full Width on Small Screens) */}
        <div className="product-list-container">
          <ProductList chosenProducts={chosenProducts} />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
