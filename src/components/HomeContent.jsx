import React from 'react'
import MostSold from './MostSold'
import NewProducts from './NewProducts'
import CategoryTabs from './CategoryTabs'

const HomeContent = () => {
  const categories = ["All Products", "Clothes", "Jewelleries", "Footwear"];
  return (
    <>
      <div>
        <CategoryTabs categories={categories}></CategoryTabs>
      </div>
      <div>
        <MostSold></MostSold>
        <NewProducts></NewProducts>
      </div>
    </>
  )
}

export default HomeContent