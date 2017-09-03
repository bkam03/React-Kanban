import React from 'react';

const Card = ( {card} ) => {
  return (
    <li>
      Title: {card.title}
      <br />
      Priority: {card.priority}
      <br />
      Status: {card.status}
      <br />
      createdBy: {card.createdBy}
      <br />
      assignedTo: {card.assignedTo}
      <br />
    </li>
  );
};

export default Card;