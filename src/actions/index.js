export const ADD_CARD = 'ADD_CARD';
export const MOVE_CARD = 'MOVE_CARD';


export const addCard = (card) => {
  console.log( 'addCard action', card )
  return {
    type: ADD_CARD,
    card: card
  };
};
