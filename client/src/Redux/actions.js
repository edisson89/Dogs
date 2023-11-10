import axios from "axios";
import {
  ADD_DATA,
  ADD_DB,
  ADD_HOME,
  ADD_USER,
  FILTER,
  ORDER,
  REMOVE_DATA,
  REMOVE_HOME,
  REMOVE_USER,
  RESET,
  UPDATE_USER,
} from "./actionsTypes.js";

export function addUser(id) {
  return {
    type: ADD_USER,
    payload: id,
  };
}
export function removeUser(id) {
  return {
    type:   REMOVE_USER,
    payload: id,
  };
}
export function updateUser(id) {
  return {
    type:   UPDATE_USER,
    payload: id,
  };
}

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
export function addDb(form) {
  let id = 1000;
  id++;
  const formId = {
    ...form,
    id,
  };
  const queryString = Object.keys(formId)
    .map((key) => {
      if (typeof form[key] === "object") {
        return Object.keys(form[key])
          .map(
            (subKey) =>
              `${encodeURIComponent(`${key}[${subKey}]`)}=${encodeURIComponent(
                form[key][subKey]
              )}`
          )
          .join("&");
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(form[key])}`;
      }
    })
    .join("&");
    
  return async function (dispatch) {
   
    const { data } = await axios.post(
      `http://localhost:3001/dogdata/dogs?${queryString}`
    );
    console.log(data)
    return dispatch({
      type: ADD_DB,
      payload: data,
    });
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
