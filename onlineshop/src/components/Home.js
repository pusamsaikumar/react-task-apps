import React, {useContext} from 'react';
import { CartContext } from './context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './style.css';


function Home() {
  const{state,dispatch} = useContext(CartContext)
  console.log(state)

   
  return (
    <div className='home'>
      <Filters />
       <div className='product-container'>
        
      {
        state.products.map((item)=>{
          return <SingleProduct item={item} key={item.id} />
        })
      }
       </div>
    </div>
  )
}

export default Home