import React from 'react';
import Image from 'react-bootstrap/Image';
import ShopwanImage from "./Shopwan1.png"
import Ratio from 'react-bootstrap/Ratio';

const CarouselImage = () => {
  return (
    <>
        <div style={{ width: 660, height: 'auto' }}>
            <Ratio aspectRatio="16x9">
                <Image src={ShopwanImage} fluid/>
            </Ratio>
        </div>
    </>
  )
}

export default CarouselImage
