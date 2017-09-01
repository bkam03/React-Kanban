import React from 'react';

const Card = ( {card} ) => {
  console.log( 'card component', card );
  return (
    <li>
      {card}
    </li>
  );
};

export default Card;