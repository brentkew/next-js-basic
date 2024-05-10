import React from 'react'
import AddToCardButton from '../components/AddToCardButton'

const ProductCard = () => {
  return (
    <>
        <div className='p-2 my-5 bg-sky-400 text-white hover:bg-sky-500 text-xl cursor-pointer border-3'>product-card page</div>
        <AddToCardButton />
    </>
  )
}

export default ProductCard