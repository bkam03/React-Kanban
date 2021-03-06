import React from 'react';
import './Column.css';
import Card from '../../containers/Card/Card.js';

const Column = ( cards ) => {
  return (
    <div className="column">
    <h2>{cards.columnName}</h2>
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