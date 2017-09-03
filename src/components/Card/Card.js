import React from 'react';

const Card = ( {card} ) => {
  return (
    <div>
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
    </div>
  );
};

export default Card;