import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Weather from "./components/Weather/Weather";
import Details from "./components/Details/Details";
import ErrorBoundary from "./components/Hocs/ErrorBoundary";
import "./App.css";


function App() {
  
  if(localStorage.getItem('user')){
    return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <ErrorBoundary> <Weather /> </ErrorBoundary> } />
              <Route path="/:cityName" element={ <Details/> } />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={ <Login /> } />
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
