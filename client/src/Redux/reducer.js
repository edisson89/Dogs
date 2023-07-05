import {
  ADD_DATA,
  ADD_HOME,
  FILTER,
  ORDER,
  REMOVE_DATA,
  REMOVE_HOME,
  RESET,
} from "./actionsTypes";

const initialState = {
  home: [],
  homeOrigin: [],
  data: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_HOME:
      
      return {
        ...state,
        home: [...state.home, payload],
        homeOrigin: [...state.home, payload],
      };

    case REMOVE_HOME:
      const filterHome = state.home.filter((dog) => dog.name !== payload);
      return {
        ...state,
        home: filterHome,
        homeOrigin: filterHome,
      };
    case FILTER:
      const newFilter = state.homeOrigin.slice().sort((a, b) => {
        if (payload === "name") {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return payload === "Ascendent" ? -1 : 1;
          } else if (nameA > nameB) {
            return payload === "Ascendent" ? 1 : -1;
          } else {
            return 0;
          }
        }

        if (payload === "weigth") {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return payload === "weigth" ? -1 : 1;
          } else if (nameA > nameB) {
            return payload === "weigth" ? 1 : -1;
          } else {
            return 0;
          }
        }
        if (payload === "origin") {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return payload === "origin" ? -1 : 1;
          } else if (nameA > nameB) {
            return payload === "origin" ? 1 : -1;
          } else {
            return 0;
          }
        } else return null;
      });

      return {
        ...state,
        home: newFilter,
      };

    case ORDER:
      const newOrder = state.homeOrigin.slice().sort((a, b) => {
        if (a.id < b.id) {
          return payload === "Descendent" ? -1 : 1;
        }
        if (a.id > b.id) {
          return payload === "Ascendent" ? -1 : 1;
        }
        return 0;
      });

      return {
        ...state,

        home: newOrder,
      };

    case RESET:
      return {
        ...state,
        home: state.homeOrigin,
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
