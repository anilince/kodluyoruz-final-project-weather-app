import React, { useState, createContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  let defaultValue = [];

  const [citiesArray, setCitiesArray] = useState(defaultValue);
  const [city, setCity] = useState("");

  const value = {
    citiesArray, 
    setCitiesArray,
    city,
    setCity
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;