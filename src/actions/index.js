export const ADD_CARD = 'ADD_CARD';
export const ADVANCE_CARD = 'ADVANCE_CARD';


export const addCard = (card) => {
  console.log( 'addCard action', card )
  return {
    type: ADD_CARD,
    card: card
  };
};

export const advanceCard = ( card ) => {
  console.log( 'advance card', card );
  return {
    type: ADVANCE_CARD,
    card: card
  }
}