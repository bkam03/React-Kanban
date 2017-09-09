import {
  ADD_CARD,
  ADVANCE_CARD,
  REGRESS_CARD,
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
  return newCardState;
}

function findCardInArray( array, cardId ){
  let indexOfCard = null;
  array.forEach( ( card, index ) => {
    if( card.id === cardId ){
      indexOfCard = index;          }
  } );
  return indexOfCard;
}

const cards = ( state = initialState, action ) => {
  switch( action.type ) {
    case GET_CARDS:
      let cardArray = JSON.parse( action.cards ).cards;
      return sortTasksByColumn( cardArray );

    case ADD_CARD:
      let newCard = action.card;
      let queueColumnToModify = state.Queue;
      queueColumnToModify.push( newCard );

      return {
        Queue: queueColumnToModify,
        InProgress: state.InProgress,
        Complete: state.Complete
      }

    case ADVANCE_CARD:

      let columnName = action.card.status;
      console.log( 'columnName', columnName );
      let cards = {
        Queue: state.Queue,
        InProgress: state.InProgress,
        Complete: state.Complete
      };
      let columnOfConcern = cards[columnName];
      let currentCardId = action.card.id;
      let indexOfCardBeingEdited = findCardInArray( columnOfConcern, currentCardId );

      //find card to edit in state.
/*      columnOfConcern.forEach( ( card, index ) => {
        if( card.id === currentCardId ){
          indexOfCardBeingEdited = index;
        }
      } );*/

      //pull card from old column.
      let looseCard = columnOfConcern.splice( indexOfCardBeingEdited, 1 ).pop();

      //push card into correct column
      switch( columnName ){
        case "Queue":
          looseCard.status = "InProgress";
          cards.InProgress.push( looseCard );
          break;
        case "InProgress":
          looseCard.status = "Complete";
          cards.Complete.push( looseCard );
          break;
        default:
          console.log( 'defaulting for advancecard');
      }


      return {
        Queue: cards.Queue,
        InProgress: cards.InProgress,
        Complete: cards.Complete
      };

    case REGRESS_CARD:


    default:
      console.log( 'reducer default' );
      return state;
  }
}


export default cards;