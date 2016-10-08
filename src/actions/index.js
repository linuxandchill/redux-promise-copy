import {
  GET_USERS 
} from './types'; 

export function getUsers(){
  return{
    type: GET_USERS,
    payload: [
      {name: "Ish"},
      {name: "Laci"},
      {name: "Chandler"},
    ]
  }  
}
