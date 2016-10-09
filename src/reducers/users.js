import {
  GET_USERS 
} from '../actions/types'; 


export default function(state = [], action){
  switch(action.type){
    case GET_USERS: 
      debugger
      return [...state, ...action.payload] ; 

    default: 
      return state; 
  }
}
