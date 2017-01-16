import React from 'react';

const ItemDetail = ({item}) => {
  return (
    <div>
      <h2 className="item-name">{item.name}</h2>
      <ul className="item-detail">
        <li>Happiness: {item.happiness}</li>
        <li>Price: {item.price}</li>
      </ul>
    </div>
  );
};

export default ItemDetail;
