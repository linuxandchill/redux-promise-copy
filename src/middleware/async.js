export default function( {dispatch} ){
  return next => action => {
    //if no payload
    //and no .then property
    //we don't care, send it on
    if(!action.payload || !action.payload.then){
      return next(action); 
    }

    console.log("There is a promise", action); 
  }
}
