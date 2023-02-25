import React from "react";
import WeeklyForcast from "./WeeklyForcast";
import WindData from "./WindData";
import HumidityData from "./HumidityData";
import "./WeeklyForcast.css";
import axios from "axios";

function WeatherData(props) {
  const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.cityName}&key=${apiKey}`;

  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-4">
          <WeeklyForcast />
        </div>
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
      </div>

      {/* "temperature": {
    "feels_like": 8.91,
    "pressure": 1009
  },
   */}

      <footer>
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
}
export default WeatherData;
