import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tShirt) => {
    const exists = cart.find((ts) => ts._id === tShirt._id);
    if (exists) {
      toast('You have already added this t-Shirt');
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };
  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((c) => c._id !== id);
    setCart(remainingCart);
  };
  return (
    <div className="home_container">
      <div className="tShirts_container">
        {tShirts.map((tShirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            key={tShirt._id}
            tShirt={tShirt}
          ></TShirt>
        ))}
      </div>

      <div className="cart_container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
