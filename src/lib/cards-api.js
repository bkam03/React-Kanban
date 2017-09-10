//target endpoint: /api/cards => returns jsoen

export const getCardsFromServer = () => {
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener( 'load', function(){
      resolve( this.response );
    } );
    xhrRequest.open( "GET", '/readcards' );
    xhrRequest.send();
  } );
};

export const addCardToServer = ( card ) => {
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();

    xhrRequest.addEventListener( 'load', function(){
      console.log( 'returned from server', this.response );
      let newCard = JSON.parse( this.response ).card;
      console.log( 'after processing', newCard );
      resolve( newCard );
    } );

    xhrRequest.open( 'POST', '/createcard', true );
    xhrRequest.setRequestHeader("Content-Type", "application/json");
    xhrRequest.send( JSON.stringify(card) );
  } );
};

export const editCardInServer = ( card ) => {
  console.log( 'edit card xml call start')
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener( 'load', function(){
      console.log( 'edit card reached server' );
      resolve();
    } );
    xhrRequest.open( 'PUT', '/updatecard' );
    xhrRequest.setRequestHeader( "Content-Type", "application/json" );
    xhrRequest.send( JSON.stringify( card ) );
  } );
}