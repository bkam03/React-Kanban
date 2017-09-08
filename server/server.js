const express = require( 'express' );
const bp = require( 'body-parser' );

const routes = require( './routes/routes.js' );
const PORT = process.env.PORT || 8080;

const app = express();

app.use( bp.urlencoded() );

app.use( '/api', routes );

const server = app.listen( PORT, () => {
  console.log( `server running on ${ PORT }`);
} );