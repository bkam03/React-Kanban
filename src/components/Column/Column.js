import React from 'react';
import './Column.css';
import Card from '../Card/Card.js';

const Column = ( { cards } ) => {
  console.log( 'column', cards );
  return (
    <div className="column">
    {
      cards.cards.map( (card) => {
        return (
         <Card
          card={card}
         />
        );
      } )
    }
    </div>
  );

};

export default Column;