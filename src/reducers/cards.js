import {
  ADD_CARD,
  ADVANCE_CARD,
  GET_CARDS
} from '../actions';

const initialState = {
}; //make array blank later

function getCertainCardStatusFromArray( columnStatus, cards ) {

    let array = cards.filter( ( { status } ) => {
      return status === columnStatus;
    } );
    return array;
  }

function sortTasksByColumn(cards){
  let newCardState = {
    Queue: getCertainCardStatusFromArray( "Queue", cards ),
    InProgress: getCertainCardStatusFromArray( "InProgress", cards ),
    Complete: getCertainCardStatusFromArray( "Complete", cards )
  };
  console.log('postSortTasks', newCardState );
  return newCardState;
//  console.log( 'sortedTasksByColumn', sortedObj );
//  return sortedObj;
}


const cards = ( state = initialState, action ) => {
  switch( action.type ) {
    case GET_CARDS:
      return sortTasksByColumn( action.cards );

      /*return [
        ...action.cards
      ];*/
    case ADD_CARD:
      return {
        cards: [...state.cards, action.card ]
      }
    case ADVANCE_CARD:
      let columnName = action.card.status;

      console.log( 'putting into cardArray', state );
      let cardArray = state[columnName];
      console.log( 'cardArray', cardArray );
      let currentCardId = action.card.id;
      console.log( 'currentcard id', currentCardId );
      let indexOfCardBeingEdited = -1;
      cardArray.forEach( ( card, index ) => {
        if( card.id === currentCardId ){
          indexOfCardBeingEdited = index;
        }
      } );
      console.log( 'index', indexOfCardBeingEdited );



      //find the card by index, alter, return new array.
      //need to locate by id, has no ids because database would supply.
      return {
      };
    default:
      console.log( 'reducer default' );
      return state;
      break;
  }
}


export default cards;