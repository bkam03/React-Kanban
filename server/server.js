const express = require( 'express' );

const routes = require( './routes/routes.js' );
const db = require( './models' );
const PORT = process.env.PORT || 8080;

const app = express();

app.use( '/', routes );

const server = app.listen( PORT, () => {
  console.log( `server running on ${ PORT }`);
} );