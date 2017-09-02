import { ADD_CARD, ADD_USER } from '../actions';

const initialState = {
  cards : [{
    title: "test",
    priority: "none",
    status: "Queue",
    createdBy: "me",
    assignedTo: "you"
  }]
}; //make array blank later

const cards = ( state = initialState, action ) => {
  switch( action.type ) {
    case ADD_CARD:
      console.log( 'reducer ADD_CARD', action.card );
      console.log( 'state', state );
      return {
        cards: [...state, action.card ]
      }
      break;
    default:
      console.log( 'reducer default' );
      return state;
      break;
  }
}

export default cards;