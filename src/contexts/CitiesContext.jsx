import React, { createContext, useReducer, useContext } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
};

function citiesReducer(state, action) {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, cities: [...state.cities, action.payload] };
    case "GET_CITY":
      console.log("GET_CITY called", state.cities);
      return state;
    default:
      return state;
  }
}

export const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(citiesReducer, initialState);

  return (
    <CitiesContext.Provider value={{ cities: state.cities, dispatch }}>
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => useContext(CitiesContext);
