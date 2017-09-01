export const ADD_CARD = 'ADD_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const ADD_USER = 'ADD_USER';


export const addCard = (card) => {
  console.log( 'addCard action', card )
  return {
    type: ADD_CARD,
    card: card
  };
};



export const addUser = (user) => {
  console.log( 'addUser action', user );
  return {
    type: ADD_USER,
    user: user
  };
};