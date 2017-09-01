import { ADD_CARD, ADD_USER } from '../actions';

const initialState = { cards: [ '1', '2' ] }; //make array blank later

const cards = ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_CARD:
      console.log( 'reducer ADD_CARD', action.card );
      return {
        cards: [...state.cards, action.card ]
      }
      break;
    default:
      console.log( 'reducer default' );
      return state;
      break;
  }
}

export default cards;