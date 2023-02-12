import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="conditions">{props.data.conditions}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6 currentCondition">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: {Math.round(props.data.humdity)}%</li>
            <li>Wind: {Math.round(props.data.windSpeed)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default WeatherInfo;
