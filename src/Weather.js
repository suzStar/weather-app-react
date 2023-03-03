import React, { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";

import axios from "axios";
import "./Weather.css";
import TodaysWeather from "./TodaysWeather";
import WeeklyForecast from "./WeeklyForecast";
import TodaysHighlight from "./TodaysHighlight";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("metric");
  const [currentUnit, setCurrentUnit] = useState("C");

  useEffect(() => {
    setWeatherData(false);
  }, [unit]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.city,
      date: new Date(response.data.time * 1000),
      conditions: response.data.condition.description,
      icon: response.data.condition.icon,
      temperature: response.data.temperature.current,
      windSpeed: response.data.wind.speed,
      windDegree: response.data.wind.degree,
      humdity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
    });
  }

  function search() {
    const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    search(city, unit);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    setCurrentUnit("F");
  }

  function showToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
    setCurrentUnit("C");
  }

  function cm(...args) {
    return args.filter((v) => v).join(" ");
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row g-0">
          <div className="col-4 leftPanel">
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

            <TodaysWeather
              data={weatherData}
              selectedUnit={unit}
              currentUnit={currentUnit}
            />
          </div>
          <div className="col-l8 WeeklyInsight">
            <div className="btn-group unitGroup">
              <a
                href="/"
                className={cm("currentUnit", currentUnit === "C" && "active")}
                onClick={showToCelsius}
              >
                {" "}
                °C
              </a>
              <a
                href="/"
                className={cm("currentUnit", currentUnit === "F" && "active")}
                onClick={showToFahrenheit}
              >
                °F
              </a>
            </div>
            <WeeklyForecast
              data={weatherData}
              selectedUnit={unit}
              currentUnit={currentUnit}
            />
            <TodaysHighlight
              data={weatherData}
              selectedUnit={unit}
              currentUnit={currentUnit}
            />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
