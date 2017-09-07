const express = require( 'express' );

const PORT = process.env.PORT || 8080;

const app = express();

const server = app.listen( PORT, () => {
  console.log( `server running on ${ PORT }`);
} );