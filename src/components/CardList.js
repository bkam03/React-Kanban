import React from 'react';


const CardList = ( {cards} ) => {
  console.log( 'CardList component', cards );
  return (
    <ul>

      {cards.map( (user) => {
        return (
          <li>
            {user}
          </li>
        );
      } )}

    </ul>
  );
}

export default CardList;