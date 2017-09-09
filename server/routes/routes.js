const express = require( 'express' );

const db = require( '../models' );
Card = db.card;

const router = express.Router();

router.post( '/createcard', ( req, res ) => {
  let newCard = req.body;
  Card.create( {
    title: newCard.title,
    status: newCard.status,
    priority: newCard.priority,
    createdBy: newCard.createdBy,
    assignedTo: newCard.assignedTo
  } )
  .then( ( card ) => {
    console.log( 'post then', card );
    res.end();
  } )
  .catch( ( err ) => {
    console.log( 'createcard error', err );
  } );
} );

router.get( '/readcards', ( req, res ) => {
  console.log( 'read cards' );
    Card.findAll()
    .then( ( cards ) => {
      console.log('got cards', cards );
      res.json( {cards: cards} );
    })
    .catch((err) => {
      console.log(err);
    });
} );

router.put( '/updatecard', ( req, res ) => {
  console.log( 'update card' );
  res.end();
} );

router.delete( '/deletecard', ( req, res ) => {
  console.log( 'delete card' );
  res.end();
} );


module.exports = router;