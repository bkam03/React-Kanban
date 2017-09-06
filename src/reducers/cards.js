import {
  ADD_CARD,
  ADVANCE_CARD,
  GET_CARDS
} from '../actions';

const initialState = {
  /*cards : [
    {
      title: "test",
      priority: "none",
      status: "Queue",
      createdBy: "me",
      assignedTo: "you"
    },
    {
      title: "2",
      priority: "low",
      status: "In Progress",
      createdBy: "me",
      assignedTo: "you"
    },
    {
      title: "test3",
      priority: "none",
      status: "Complete",
      createdBy: "me",
      assignedTo: "you"
    }
  ]*/
}; //make array blank later

const cards = ( state = initialState, action ) => {
  switch( action.type ) {
    case GET_CARDS:
      console.log('reducer get_cards, action.cards', action.cards );
      return [
        ...action.cards
      ];
    case ADD_CARD:
      return {
        cards: [...state.cards, action.card ]
      }
    case ADVANCE_CARD:
      console.log('reducer ADVANCE_CARD', action.card );
      let oldCardArray = [ ...state.cards ];
      //find the card by index, alter, return new array.
      //need to locate by id, has no ids because database would supply.
      console.log( 'action.card', action.card );
      return {
      };
    default:
      console.log( 'reducer default' );
      return state;
      break;
  }
}

export default cards;