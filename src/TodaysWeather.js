import React from "react";
import "./TodaysInsights.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { MdLocationOn } from "react-icons/md";

function WeatherInfo(props) {
  const tempCurrnet = Math.round(props.data.temperature);
  return (
    <div className="WeatherInfo">
      <div className="dailyIcon">
        <WeatherIcon code={props.data.icon} size={"202px"} height={"202px"} />
      </div>
      <div className="currentTemp">
        <span className="temperature">{tempCurrnet}</span>
        <span className="unit">°{props.currentUnit}</span>
      </div>

      <span className="conditions">{props.data.conditions}</span>
      <FormattedDate date={props.data.date} />
      <p className="mt-2 cityName">
        <MdLocationOn color="#88869D" size="20px" />
        {props.data.cityName}
      </p>
    </div>
  );
}
export default WeatherInfo;
