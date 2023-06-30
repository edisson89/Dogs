import { ADD_DATA, ADD_HOME, REMOVE_DATA, REMOVE_HOME } from "./actionsTypes";

const initialState = {
  home: [],
  data: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_HOME:
      return {
        ...state,
        home: [...state.home, payload],
      };

    case REMOVE_HOME:
      const filterHome = state.home.filter((dog) => dog.name !== payload);
      return {
        ...state,
        home: filterHome,
      };

    case ADD_DATA:
      return {
        ...state,
        data: payload,
      };

    case REMOVE_DATA:
      const filterData = state.data.filter((dog) => dog.name !== payload);
      return {
        ...state,
        data: filterData,
      };

    default:
      return {
        ...state,
      };
  }
}
