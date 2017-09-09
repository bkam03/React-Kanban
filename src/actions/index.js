import { getCardsFromDB, addCardToDB } from '../lib/fakedb.js';
import {
  getCardsFromServer,
  addCardToServer,
  editCardInServer
} from '../lib/cards-api.js';

export const ADD_CARD = 'ADD_CARD';
export const ADVANCE_CARD = 'ADVANCE_CARD';
export const GET_CARDS = 'GET_CARDS';
export const REGRESS_CARD = 'REGRESS_CARD';
export const MOVE_CARD ='MOVE_CARD';

export const getCards = () => {
  return ( dispatch ) => {
    return getCardsFromServer()
      .then( ( cards ) => {
        dispatch ( {
          type: GET_CARDS,
          cards: cards
        } );
      } );
  }
};

export const addCard = (card) => {
  return( dispatch ) => {

    addCardToServer( card )
      .then( () => {
        dispatch( {
          type: ADD_CARD,
          card: card
        } );
      } );
  }
};

export const advanceCard = ( card ) => {
  return( dispatch ) => {
    editCardInServer( card )
      .then( () => {
        dispatch( {
          type: MOVE_CARD,
          card: card,
          movement: ADVANCE_CARD
        } );
      })
  }
}

export const regressCard = ( card ) => {
  return {
    type: MOVE_CARD,
    card: card,
    movement: REGRESS_CARD
  }
}