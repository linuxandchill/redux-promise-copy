import {
  GET_USERS 
} from './types'; 

export function getUsers(){
  return{
    type: FETCH_USERS,
    payload: [
      {name: "Ish"},
      {name: "Laci"},
      {name: "Chandler"},
    ]
  }  
}
