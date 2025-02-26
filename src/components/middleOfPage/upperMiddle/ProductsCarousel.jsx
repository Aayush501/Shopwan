import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Ratio from 'react-bootstrap/Ratio';
import ShopwanImage from "./Shopwan1.png";

const ProductsCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100" interval={3000}>
      {[1, 2, 3].map((slide) => (
        <Carousel.Item key={slide}>
          <div className="d-flex justify-content-center">
            <Ratio aspectRatio="16x9" className="w-75">
              <Image src={ShopwanImage} fluid />
            </Ratio>
          </div>
          <Carousel.Caption>
            <h3>Slide {slide} label</h3>
            <p>
              {slide === 1 && "Nulla vitae elit libero, a pharetra augue mollis interdum."}
              {slide === 2 && "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              {slide === 3 && "Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;
