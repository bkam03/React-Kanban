const express = require( 'express' );

const db = require( '../models' );
Cards = db.card;

const router = express.Router();

router.post( '/createcard', ( req, res ) => {
  let newCard = req.body;
  Cards.create( {
    title: newCard.title,
    status: newCard.status,
    priority: newCard.priority,
    createdBy: newCard.createdBy,
    assignedTo: newCard.assignedTo
  } )
  .then( ( card ) => {
    res.json( { card: card } );
  } )
  .catch( ( err ) => {
    console.log( 'createcard error', err );
  } );
} );

router.get( '/readcards', ( req, res ) => {
    Cards.findAll()
    .then( ( cards ) => {
      res.json( {cards: cards} );
    })
    .catch((err) => {
      console.log(err);
    });
} );

router.put( '/editcard', ( req, res ) => {
  let card = req.body;
  Cards.update( {
    title: card.title,
    status: card.status,
    priority: card.priority,
    createdBy: card.createdBy,
    assignedTo: card.assignedTo
  },{
    where: {
      id: req.body.id
    }
  } ).then( (card ) => {
    res.end();
  } ).catch( ( err ) => {
    console.log( 'edit card server error', err );
  } );

} );

router.put( '/movecard', ( req, res ) => {
  let cardToUpdate = req.body.card;
  let cardDirection = req.body.direction;

  let statusSpectrum = [ 'Queue', 'InProgress', 'Complete'];
  let cardToUpdateIndex = statusSpectrum.indexOf( cardToUpdate.status );

  switch( cardDirection ){
    case "ADVANCE_CARD":
      cardToUpdate.status = statusSpectrum[ cardToUpdateIndex + 1 ];
      break;
    case "REGRESS_CARD":
      cardToUpdate.status = statusSpectrum[ cardToUpdateIndex - 1 ];
      break;
    default:
      console.log( 'defaulting movement of card in server.');
  }

  if( cardToUpdate.status === undefined ){
    Cards.destroy( {
      where : {
        id: cardToUpdate.id
      }
    } );
  } else {
    Cards.update( {
      status: cardToUpdate.status
    },{
      where: {
        id: cardToUpdate.id
      }
    } );
  }

  res.end();
} );

router.delete( '/deletecard', ( req, res ) => {
  console.log( 'delete card' );
  res.end();
} );


module.exports = router;
