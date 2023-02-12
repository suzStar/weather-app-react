import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-8 currentCondition">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-4">
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
