import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../Reducer';
import {useStateValues} from '../Provider';

function Subtotal() {
  const [{basket},dispatch] = useStateValues()
  return (
    <div className='subtotal'>
       <CurrencyFormat 
         renderText={
             (value)=>(
                 <>
                 <p>
                     Subtotal ({basket.length} :items) <strong>${value}</strong>
                 </p>
                 <small className='subtotal-gift'>
                     <input type='checkbox' /> this order contain a gift
                 </small>
                 </>
             )
         }
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={'text'}
         thousandSeparator={true}
        //  prefix={'$'}

       
       />
       <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal