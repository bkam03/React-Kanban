import {
  ADD_CARD,
  ADVANCE_CARD,
  REGRESS_CARD,
  GET_CARDS,
  MOVE_CARD,
  EDIT_CARD
} from '../actions';

const initialState = {
};

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
      indexOfCard = index;
    }
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
    case MOVE_CARD:
      let columnName = action.card.status;
      let movementDirection = action.movement;
      let cards = {
        Queue: state.Queue,
        InProgress: state.InProgress,
        Complete: state.Complete
      };
      let columnOfConcern = cards[columnName];
      let currentCardId = action.card.id;
      let indexOfCardBeingEdited = findCardInArray( columnOfConcern, currentCardId );
      let looseCard = columnOfConcern.splice( indexOfCardBeingEdited, 1 ).pop();
      let statusSpectrum = [ 'Queue', 'InProgress', 'Complete'];
      let looseCardStatusIndex = statusSpectrum.indexOf( looseCard.status );

      switch( movementDirection ){
        case ADVANCE_CARD:
          looseCard.status = statusSpectrum[ looseCardStatusIndex + 1 ];
          break;
        case REGRESS_CARD:
          looseCard.status = statusSpectrum[ looseCardStatusIndex - 1 ];
          break;
        default:
          console.log( 'defaulting for advancecard');
      }

      if( looseCard.status !== undefined ) {
        cards[ looseCard.status ].push( looseCard );
      }

      return {
        Queue: cards.Queue,
        InProgress: cards.InProgress,
        Complete: cards.Complete
      };
    case EDIT_CARD:
      let modifiedCard = action.card;
      let columnToUpdate = state[ modifiedCard.status ];
      let indexOfCardToChangeInArray = findCardInArray( columnToUpdate, modifiedCard.id );
      console.log( 'place in state', indexOfCardToChangeInArray);
      let modifiedState = {
        Queue: state.Queue,
        InProgress: state.InProgress,
        Complete: state.Complete
      };
      modifiedState[ modifiedCard.status ][ indexOfCardToChangeInArray] = modifiedCard;
      console.log( 'end of reducer', modifiedState );
      return modifiedState;

    default:
      console.log( 'reducer default' );
      return state;
  }
}

export default cards;