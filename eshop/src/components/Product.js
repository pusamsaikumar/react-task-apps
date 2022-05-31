import React from 'react';
import './Product.css';
import {useStateValues} from '../Provider';

function Product({id,title,price,image,rating}) {
  const [state,dispatch]=useStateValues();
  const AddToBasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      payload:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image
      }
    })
  }

  return (
    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {
                  Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                  ))
                }
            </div>
        </div>
        <img src={image} />
            <button onClick={AddToBasket} >ADD TO BASKET</button>

    </div>
  )
}

export default Product;