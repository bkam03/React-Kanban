import React from 'react';
import Card from './Card.js';

const CardList = ( {cards} ) => {
  console.log( 'CardList component', cards );
  return (
    <ul>

      {cards.map( (card) => {
        return (
         <Card
          card={card}
         />
        );
      } )}

    </ul>
  );
}

export default CardList;