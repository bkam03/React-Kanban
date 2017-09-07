const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
  console.log( 'getting from server' );
  res.end();
} );

module.exports = router;