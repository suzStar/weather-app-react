import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";

import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherData from "./WeatherData";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.city,
      date: new Date(response.data.time * 1000),
      conditions: response.data.condition.description,
      icon: response.data.condition.icon,
      temperature: response.data.temperature.current,
      windSpeed: response.data.wind.speed,
      humdity: response.data.temperature.humidity,
      precipitation: response.data,
    });
  }

  function search() {
    const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSumbit}>
          <div className="form input-group">
            <span className="input-group-text bg-white">
              <FaSistrix color="#616475" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Location"
              autoFocus="on"
              onChange={handleCityChange}
              aria-label="Search"
              aria-describedby="search-addon"
            />

            <i className="btn bg-primary ">
              <MdOutlineMyLocation color="white" />
            </i>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
