import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WeatherContext from "../Context/context";
import '../Weather/Weather.scss';


const Weather = () => {
  const {citiesArray, setCitiesArray} = useContext(WeatherContext);
  const {city, setCity} = useContext(WeatherContext);
  let navigate = useNavigate();

  let detail = (city) => {
    navigate(`./${city}` , { replace: true });
  }
  
  const getWeather = async () => {

  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a25e79c35985e6d58a3481e00f5aa50f&units=metric`)
  setCitiesArray(res.data);  
  };
 
   const save = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", "[]");
    }
    let oldData = JSON.parse(localStorage.getItem("data"));
    oldData.push(city);
    localStorage.setItem("data", JSON.stringify(oldData));

    if (oldData.length === 4) {
      oldData.shift();
      localStorage.setItem("data", JSON.stringify(oldData));
    }
  };
  
  return (
    <div className="weather">
        <div className="label">
        <input className="input" onChange={e => setCity(e.target.value)} value={city} type="text" placeholder='Enter city'/>
        <button className="button" onClick={getWeather}><img onClick={save} src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"/></button>
        </div>
        {citiesArray?.weather && (
          <>
          <div id="weather_wrapper">
          <div className="weatherCard">
            <div className="currentTemp">
              <span className="location">{citiesArray.name}</span>
              <button className="btn" onClick={() => detail(city)}>Details</button>
            </div>
            <div className="currentWeather">
              <span className="conditions">{citiesArray.weather[0].main}</span>
            </div>
          </div>
        </div>        
        </>
        )}
    </div>
  );
};

export default Weather;