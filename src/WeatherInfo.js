import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { MdLocationOn } from "react-icons/md";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="dailyIcon">
        <WeatherIcon code={props.data.icon} size={"202px"} />
      </div>
      <div className="currentTemp">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>

      <span className="conditions">{props.data.conditions}</span>
      <FormattedDate date={props.data.date} />
      <h1 className="justify-content-end">
        <MdLocationOn color="#88869D" />
        {props.data.cityName}
      </h1>
    </div>
  );
}
export default WeatherInfo;
