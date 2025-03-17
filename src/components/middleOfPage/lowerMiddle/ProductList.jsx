import React from 'react'
import AllProducts from './AllProducts'
import ClothesList from './ClothesList'
import JewelleriesList from './JewelleriesList'
import FootwaresList from './FootwaresList'

const ProductList = ({ chosenProducts, clickedProduct, setClickedProduct, productPageProduct, setProductPageProduct }) => {
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
      <AllProducts clickedProduct={clickedProduct} setClickedProduct={setClickedProduct} productPageProduct={productPageProduct} setProductPageProduct={setProductPageProduct}></AllProducts>
    </>
  )
}

export default ProductList
