import { ADD_DATA, ADD_HOME, FILTER, ORDER, REMOVE_DATA, REMOVE_HOME, RESET } from "./actionsTypes.js";
//import axios from "axios"

export function addHome(id) {
  return {
    type: ADD_HOME,
    payload: id,
  };
}
export function removeHome(id) {
  return {
    type: REMOVE_HOME,
    payload: id,
  };
}

export function addData(data) {
  return {
    type: ADD_DATA,
    payload: data,
  };
}
export function removeData(id) {
  return {
    type: REMOVE_DATA,
    payload: id,
  };
}
export function order(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
export function filter(name) {
  return {
    type: FILTER,
    payload: name,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
/*
 
  
  export function addFav(char) {
    return function (dispatch) {
      axios
        .post("http://localhost:3001/rickandmorty/favs", char)
        .then((response) => {
          return dispatch({
            type: ADD_FAV,
            payload: response.data,
          });
        });
    };
  }
  export function removeFav(id) {
    return function (dispatch) {
      axios
      .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
      .then((response) =>{
        return dispatch({
          type: REMOVE_FAV,
          payload:response.data
        })
      })
      
    }
    
  }
  
  export function edit_fav(id) {
    return {
      type: EDIT_FAV,
      payload: id,
    };
  }
*/
