import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
          <img src= " https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jupiter21/Teaser2/join-prime-all-lang/joinnow_pc.jpg" />
         <div>
         <h2>Your Shopping Products</h2>
         <CheckoutProduct />
         </div>
      </div>
  <div className='checkout_right'>
        
      </div>

      


    </div>
  )
}

export default Checkout
