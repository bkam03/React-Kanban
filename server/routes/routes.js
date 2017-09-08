const express = require( 'express' );

const db = require( '../models' );
Card = db.Card;

const router = express.Router();

router.post( '/createcard', ( req, res ) => {
  console.log( 'create card', req.body );
/*  Card.create( {
    title:
    status:
    priority:
    createdBy:
    assignedTo:
  } );*/
  res.end();
} );

router.get( '/readcards', ( req, res ) => {
  console.log( 'read cards' );
  res.end();
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