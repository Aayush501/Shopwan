import React, { useState } from 'react'
import CategoryTabs from './middleMiddle/CategoryTabs'
import ProductList from './lowerMiddle/ProductList'
import ProductsCarousel from './upperMiddle/ProductsCarousel'

const HomeContent = () => {
  const [chosenProducts, setChosenProducts] = useState("All");

  return (
    <>
      <div>
        <ProductsCarousel></ProductsCarousel>
      </div>
      <div>
        <CategoryTabs categories={["All Products", "Clothes", "Jewelleries", "Footwear"]} chosenProducts={chosenProducts} setChosenProducts={setChosenProducts}></CategoryTabs>
      </div>
      <div>
        <ProductList chosenProducts={chosenProducts}></ProductList>
      </div>
    </>
  )
}

export default HomeContent