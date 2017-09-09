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
      resolve();
    } );
    xhrRequest.open( 'POST', '/createcard', true );
    xhrRequest.setRequestHeader("Content-Type", "application/json");
    xhrRequest.send( JSON.stringify(card) );
  } );
};