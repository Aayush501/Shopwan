import React from 'react'
import AllProducts from './AllProducts'
import ClothesList from './ClothesList'
import JewelleriesList from './JewelleriesList'
import FootwaresList from './FootwaresList'

const ProductList = ({ chosenProducts }) => {
  if (chosenProducts === "Clothes") {
    return (
      <>
        <ClothesList></ClothesList>
      </>
    )
  }
  if (chosenProducts === "Jewelleries") {
    return (
      <>
        <JewelleriesList></JewelleriesList>
      </>
    )
  }
  if (chosenProducts === "Footwares") {
    return (
      <>
        <FootwaresList></FootwaresList>
      </>
    )
  }
  return (
    <>
      <AllProducts></AllProducts>
    </>
  )
}

export default ProductList
