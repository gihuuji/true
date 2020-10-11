import React, { useState } from 'react';

function ListsCart({ listItems, onClick }) {
  console.log('ListsCart', listItems);
  return (
    <div>
      <ul>
        {listItems.length > 0 &&
          listItems.map((i, index) => (
            <li
              style={{ textDecoration: i.status === 'completed' ? 'line-through' : 'none' }}
              onClick={() => onClick(index)}
            >
              {i.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListsCart;
