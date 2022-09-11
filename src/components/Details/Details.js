import React, { useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import WeatherContext from "../Context/context";
import withLoading from "../Hocs/withLoading";

import "./Details.scss";

const Details = (props) => {
  const {city, setCity} = useContext(WeatherContext);
  const {citiesArray, setCitiesArray} = useContext(WeatherContext);
  const [detailData0, setDetailData0] = useState([]);
  const [detailData1, setDetailData1] = useState([]);
  const [detailData2, setDetailData2] = useState([]);
  const [detailData3, setDetailData3] = useState([]);
  const [detailData4, setDetailData4] = useState([]);

  const getDetail = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a25e79c35985e6d58a3481e00f5aa50f&units=metric`
    );
    props.setLoading(false);
   
    const result = res.data.list.filter((x) => x.dt_txt.includes("06:00:00"));
    const result0 = result[0];
    const result1 = result[1];
    const result2 = result[2];
    const result3 = result[3];
    const result4 = result[4];
    setDetailData0(result0);
    setDetailData1(result1);
    setDetailData2(result2);
    setDetailData3(result3);
    setDetailData4(result4);
  };
  

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="weather">
      {detailData0?.main && (
      <main className="main">
          <div id="weather_wrapper2">
            <div className="weatherCard2">
              <div className="currentTemp2">
                <span className="temp2">{detailData0.main.temp.toFixed(0)}&deg;</span>
                <span className="location2">{citiesArray.name}</span>
                <span></span>
              </div>
              <div className="currentWeather2">
                <span className="conditions2">{detailData0.weather[0].main}</span>
                <div className="info2">
                  <span className="rain2">{detailData0.main.humidity}</span>
                  <span className="wind2">{detailData0.wind.speed} MPH</span>
                </div>
              </div>
            </div>
          </div>
          <div id="weather_wrapper2">
            <div className="weatherCard2">
              <div className="currentTemp2">
                <span className="temp2">{detailData1.main.temp.toFixed(0)}&deg;</span>
                <span className="location2">{citiesArray.name}</span>
              </div>
              <div className="currentWeather2">
                <span className="conditions2">
                  {detailData1.weather[0].main}
                </span>
                <div className="info2">
                  <span className="rain2">{detailData1.main.humidity}</span>
                  <span className="wind2">{detailData1.wind.speed} MPH</span>
                </div>
              </div>
            </div>
          </div>
          <div id="weather_wrapper2">
            <div className="weatherCard2">
              <div className="currentTemp2">
                <span className="temp2">{detailData2.main.temp.toFixed(0)}&deg;</span>
                <span className="location2">{citiesArray.name}</span>
              </div>
              <div className="currentWeather2">
                <span className="conditions2">{detailData2.weather[0].main}</span>
                <div className="info2">
                  <span className="rain2">{detailData2.main.humidity}</span>
                  <span className="wind2">{detailData2.wind.speed} MPH</span>
                </div>
              </div>
            </div>
          </div>
          <div id="weather_wrapper2">
            <div className="weatherCard2">
              <div className="currentTemp2">
                <span className="temp2">{detailData3.main.temp.toFixed(0)}&deg;</span>
                <span className="location2">{citiesArray.name}</span>
              </div>
              <div className="currentWeather2">
                <span className="conditions2">{detailData3.weather[0].main}</span>
                <div className="info2">
                  <span className="rain2">{detailData3.main.humidity}</span>
                  <span className="wind2">{detailData3.wind.speed} MPH</span>
                </div>
              </div>
            </div>
          </div>
          <div id="weather_wrapper2">
            <div className="weatherCard2">
              <div className="currentTemp2">
                <span className="temp2">{detailData4.main.temp.toFixed(0)}&deg;</span>
                <span className="location2">{citiesArray.name}</span>
              </div>
              <div className="currentWeather2">
                <span className="conditions2">{detailData4.weather[0].main}</span>
                <div className="info2">
                  <span className="rain2">{detailData4.main.humidity}</span>
                  <span className="wind2">{detailData4.wind.speed} MPH</span>
                </div>
              </div>
            </div>
          </div>
      </main>
      )}
    </div>
  );
};

export default withLoading(Details);
