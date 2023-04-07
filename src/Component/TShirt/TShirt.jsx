import React from 'react';
import './T-Shirt.css';

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { picture, name, price } = tShirt;
  return (
    <div className="t_Shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price : ${price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Buy now</button>
    </div>
  );
};

export default TShirt;
