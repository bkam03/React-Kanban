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
      let cards = {
        Queue: state.Queue,
        InProgress: state.InProgress,
        Complete: state.Complete
      };
      let columnOfConcern = cards[columnName];
      let currentCardId = action.card.id;
      let indexOfCardBeingEdited = -1;

      columnOfConcern.forEach( ( card, index ) => {
        if( card.id === currentCardId ){
          indexOfCardBeingEdited = index;
        }
      } );

      let looseCard = columnOfConcern.splice( indexOfCardBeingEdited, 1 ).pop();

      switch( columnName ){
        case "Queue":
          looseCard.status = "InProgress";
          console.log( 'upgrading to InProgress');
          cards.InProgress.push( looseCard );
          break;
        case "InProgress":
          looseCard.status = "Complete";
          console.log( 'upgrading to Complete');
          cards.Complete.push( looseCard );
          break;
        default:
          console.log( 'defaulting for advancecard');
          return state;
      }

      console.log( 'cards', cards );
      /*
      cardArray[ indexOfCardBeingEdited ].status = currentCardState;
      console.log( '@@@@@@@@@@@@@@@@modded cardArray', cardArray );
      return {
        columnName: cardArray
      };*/
      return {
        Queue: cards.Queue,
        InProgress: cards.InProgress,
        Complete: cards.Complete
      };
    default:
      console.log( 'reducer default' );
      return state;
      break;
  }
}


export default cards;