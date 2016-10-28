import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <ul>
        <li>Happiness: {item.happiness}</li>
        <li>Price: {item.price}</li>
      </ul>
    </div>
  );
};

export default ItemDetail;
