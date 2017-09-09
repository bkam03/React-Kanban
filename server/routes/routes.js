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
    res.end();
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

router.put( '/updatecard', ( req, res ) => {
  console.log( 'update card', req.body.id );
  Cards.update( {
    //update stuff here
    status: "InProgress"
  },{
    where: {
      id: req.body.id
    }
  } );
  res.end();
} );

router.delete( '/deletecard', ( req, res ) => {
  console.log( 'delete card' );
  res.end();
} );


module.exports = router;