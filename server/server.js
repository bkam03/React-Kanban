const express = require( 'express' );
const bp = require( 'body-parser' );

const db = require( './models' );
const routes = require( './routes/routes.js' );
const PORT = process.env.PORT || 8080;

const app = express();

app.use( bp.json( { extended: true } ) );

app.use( '/api', routes );

const server = app.listen( PORT, () => {
  db.sequelize.sync();
  console.log( `server running on ${ PORT }`);
} );