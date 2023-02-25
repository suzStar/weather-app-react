import React from "react";
import WeeklyForcast from "./WeeklyForcast";
import "./WeeklyForcast.css";

function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-4">
          <WeeklyForcast />
        </div>
      </div>

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
