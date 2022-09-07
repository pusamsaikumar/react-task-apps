import React, {createContext, useReducer} from 'react';
import {faker} from '@faker-js/faker';
import { CartReducer } from './Reducer';

export const CartContext=createContext();
function Context({children}) {
    const ProductArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
        inStock:faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        rating:faker.helpers.arrayElement([1,2,3,4,5]),

    }));
   // reducer  syntax :  const [state,dispatch] = useReducer(reducer,iniitalState);
   const [state,dispatch] = useReducer(CartReducer,{
    products:ProductArray,
    carts:[]
   })

  return (
    <CartContext.Provider value={{state,dispatch}}>
         {children}
    </CartContext.Provider>
  )
}

export default Context