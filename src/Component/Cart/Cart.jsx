import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length == 0) {
    message = 'add some products';
  } else {
    message = 'Borolok you are 👍';
  }
  return (
    <div>
      <h4 className={cart.length == 1 ? 'blue' : 'red'}>
        Order Summary :{cart.length}
      </h4>
      {cart.length > 2 ? (
        <span>aro kino!!!!!</span>
      ) : (
        <span>Fokir you are!!!!!</span>
      )}
      <br />
      {message}
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double product mama!!!!!!!</p>}
      {cart.length === 3 || <p>Tinta to holo na!!!</p>}
    </div>
  );
};

export default Cart;
