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
  console.log( 'in add card to server' );
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener( 'load', function(){
      console.log( 'addcardtoserver', card );
      resolve();
    } );
    xhrRequest.open( 'POST', '/createcard' );
    xhrRequest.send();
  } );
};