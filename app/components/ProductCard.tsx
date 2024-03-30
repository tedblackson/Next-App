
import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';


const productcard = () => {
  return (
    <div className="p-5 my-5 text-white bg-sky-400 text-xl hover:bg-sky-600">
        <AddToCart></AddToCart>
      
    </div>
  )
}

export default productcard
