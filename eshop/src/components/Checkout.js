import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValues} from '../Provider';
function Checkout() {
  const [{basket},dispatch]=useStateValues()
  return (
    <div className='checkout'>
      <div className='checkout_left'>
            <img src= " https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/Teaser2/join-prime-all-lang/joinnow_pc.jpg" alt='' className='checkout_Ad' />
            <div>
                <h2  className='checkout_title'>Your Shopping Products</h2>
               {
                  basket.map(item=>(
                    <CheckoutProduct 
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      rating={item.rating}
                    />
                  ))
               }
            </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
