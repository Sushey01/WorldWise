import React, { createContext, useReducer, useContext, useCallback } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],        // all cities
  currentCity: null, // the selected city to show
  isLoading: false,  // loading state
  error: null,
};

function citiesReducer(state, action) {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, cities: [...state.cities, action.payload] };
      
    case "DELETE_CITY":
      return { ...state, cities: state.cities.filter(city => city.id !== action.payload) };
      
    case "GET_CITY_START":
      return { ...state, isLoading: true, error: null };
      
    case "GET_CITY_SUCCESS":
      return { ...state, currentCity: action.payload, isLoading: false, error: null };
      
    case "GET_CITY_ERROR":
      return { ...state, isLoading: false, error: action.payload };
      
    default:
      return state;
  }
}

export const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(citiesReducer, initialState);

  // getCity finds the city by id in the cities array and sets currentCity
  const getCity = useCallback((id) => {
    dispatch({ type: "GET_CITY_START" });

    // Simulate async call — you can replace this with real API call if needed
    setTimeout(() => {
      const city = state.cities.find(c => String(c.id) === String(id));
      if (city) {
        dispatch({ type: "GET_CITY_SUCCESS", payload: city });
      } else {
        dispatch({ type: "GET_CITY_ERROR", payload: "City not found" });
      }
    }, 300);
  }, [state.cities]);

  return (
    <CitiesContext.Provider value={{
      cities: state.cities,
      currentCity: state.currentCity,
      isLoading: state.isLoading,
      error: state.error,
      getCity,
      dispatch, // for adding and deleting cities externally
    }}>
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => useContext(CitiesContext);
