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
      let newCard = JSON.parse( this.response ).card;
      resolve( newCard );
    } );
    xhrRequest.open( 'POST', '/createcard', true );
    xhrRequest.setRequestHeader("Content-Type", "application/json");
    xhrRequest.send( JSON.stringify(card) );
  } );
};

export const moveCardInServer = ( card ) => {
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener( 'load', function(){
      resolve();
    } );
    xhrRequest.open( 'PUT', '/movecard' );
    xhrRequest.setRequestHeader( "Content-Type", "application/json" );
    xhrRequest.send( JSON.stringify( card ) );
  } );
}

export const editCardInServer = ( card )=> {
  return new Promise( ( resolve, reject ) => {
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener('load', function(){
      resolve();
    } );
    xhrRequest.open( 'PUT', '/editCard' );
    xhrRequest.setRequestHeader( "Content-Type", "application/json" );
    xhrRequest.send( JSON.stringify( card ) );
  } );
}