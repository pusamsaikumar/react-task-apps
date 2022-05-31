import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5-1520x800.png" alt="" className="home_img" />
        <div className="home-row">
          <Product 
          id='1'
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops price:109.95,description Your perfect pack for everyday use and walks in the forest."
          price={119.36}
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          rating={5}
          />
          <Product
          id='2'
          title="Mens Casual Premium Slim Fit T-Shirts price :22.3,description Slim-fitting style, contrast raglan long sleeve, three-button henley placket,"
          price={120.5}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          rating={4}
          />
        </div>
        <div className="home-row">
          <Product 
          id="3"
          title="Mens Cotton Jacket,price:55.99,description:great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors"
          price={100.01}
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"   
          rating={4}     
          />
          <Product 
          id="4"
          title="Mens Casual Slim Fit,price:15.99,description:The color could be slightly different between on the screen and in practice."
          price={150.22}
          image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          rating={3}
          
          />
          <Product 
          id="5"
          title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet price:695,description:From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl."
          price={130.22}
          image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          rating={2}/>
        </div>
        <div className="home-row">
          <Product
          id="6"
          title="Solid Gold Petite Micropave price:168, description:Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days."
          price={140.11}
          image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
          rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
