import React from "react";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
  return (
    <div className="WeatherImfo">
      <h1>{props.data.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.condition}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6 currentCondition">
          <img src={props.data.iconURL} alt={props.data.iconAlt} />
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
