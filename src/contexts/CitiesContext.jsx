import React, { createContext, useReducer, useContext } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
};

function citiesReducer(state, action) {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, cities: [...state.cities, action.payload] };
    case "DELETE_CITY":
      return {...state, cities: state.cities.filter(city => city.id !==action.payload)}
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
