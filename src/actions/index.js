import { getCardsFromDB, addCardToDB } from '../lib/fakedb.js';
import { getCardsFromServer, addCardToServer } from '../lib/cards-api.js';

export const ADD_CARD = 'ADD_CARD';
export const ADVANCE_CARD = 'ADVANCE_CARD';
export const GET_CARDS = 'GET_CARDS';
export const REGRESS_CARD = 'REGRESS_CARD';
export const MOVE_CARD ='MOVE_CARD';

export const getCards = () => {
  return ( dispatch ) => {
    return getCardsFromServer()
    //return getCardsFromDB()
      .then( ( cards ) => {
        dispatch ( {
          type: GET_CARDS,
          cards: cards
        } );
      } );
  }
};

export const addCard = (card) => {
  console.log( 'addCard action', card );
  return( dispatch ) => {

    addCardToServer( card )
      .then( () => {
        console.log( 'added card to server', card );
        dispatch( {
          type: ADD_CARD,
          card: card
        } );
      } );
  }
};

export const advanceCard = ( card ) => {
  console.log( 'advance card', card );
  return {
    type: MOVE_CARD,
    card: card,
    movement: ADVANCE_CARD
  }
}

export const regressCard = ( card ) => {
  console.log( 'regress card', card );
  return {
    type: MOVE_CARD,
    card: card,
    movement: REGRESS_CARD
  }
}