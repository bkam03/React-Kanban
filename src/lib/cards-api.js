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