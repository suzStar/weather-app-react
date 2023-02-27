import React, { useState, useEffect } from "react";
import WeeklyForcast from "./WeeklyForcast";
import WindData from "./WindData";
import HumidityData from "./HumidityData";
import PressureData from "./PressureData";
import "./WeeklyForcast.css";
import axios from "axios";

function WeatherData(props) {
  const [loaded, setLoad] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.data.cityName]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="WeatherData">
        <div className="row d-flex justify-content-between mt-3">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeeklyForcast
                    forecastData={dailyForecast}
                    units={props.currentUnit}
                  />
                </div>
              );
            }
          })}
        </div>
        <h1>Todays Highlights</h1>
        <div className="row">
          <div className="col-6 mb-3">
            <WindData
              windSpeed={props.data.windSpeed}
              windDirection={props.data.windDirection}
            />
          </div>
          <div className="col-6 mb-3">
            <HumidityData dataHumdity={props.data.humdity} />
          </div>

          <div className="col-6 mb-3">
            <PressureData
              title={"Feels Like"}
              dataPressure={props.data.feelsLike}
              unit={"°c"}
            />
          </div>

          <div className="col-6 mb-3">
            <PressureData
              title={"Air Pressure"}
              dataPressure={props.data.pressure}
              unit={"mb"}
            />
          </div>
        </div>
        <footer className="mt-5">
          This project was coded by Suzanne Sharman and is{" "}
          <a
            href="https://github.com/suzStar/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-source on GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
    let city = props.data.cityName;
    let unit = props.selectedUnit;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
export default WeatherData;
