import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>Special One 💌</h2>
      <p>Ring :{ring}</p>
      <p>Angti :{angti}</p>
    </div>
  );
};

export default Special;
