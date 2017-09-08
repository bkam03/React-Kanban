//target endpoint: /api/cards => returns jsoen

export const getCardsFromServer = () => {
  console.log( 'in xhr file' );
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener( 'load', function(){
      console.log( this );
      resolve( this );
    } );
    xhrRequest.open( "GET", '/readcards' );
    xhrRequest.send();
  } );
};

export const addCardToServer = ( card ) => {
  console.log( 'in add card to server', card );
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener( 'load', function(){
      console.log( 'addcard server responded' );
      resolve();
    } );
    xhrRequest.open( 'POST', '/createcard', true );
    xhrRequest.setRequestHeader("Content-Type", "application/json");
    xhrRequest.send( JSON.stringify(card) );
  } );
};