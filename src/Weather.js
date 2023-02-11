import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.city,
      date: new Date(response.data.time * 1000),
      conditions: response.data.condition.description,
      iconURL: response.data.condition.icon_url,
      iconAlt: response.data.condition.icon,
      temperature: response.data.temperature.current,
      windSpeed: response.data.wind.speed,
      humdity: response.data.temperature.humidity,
      precipitation: response.data,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.cityName}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.condition}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6 currentCondition">
            <img src={weatherData.iconURL} alt={weatherData.iconAlt} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 3%</li>
              <li>Humidity: {Math.round(weatherData.humdity)}%</li>
              <li>Wind: {Math.round(weatherData.windSpeed)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";

    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}

export default Weather;
