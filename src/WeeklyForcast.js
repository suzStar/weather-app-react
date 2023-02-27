import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeeklyForcast(props) {
  let daysOfWeek = props.forecastData.time;
  let iconDescription = props.forecastData.condition.icon;
  let minimumTemp = props.forecastData.temperature.minimum;
  let maximumTemp = props.forecastData.temperature.maximum;
  function ShortHandDate() {
    let date = new Date(daysOfWeek * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let day = days[date.getDay()];
    let todayDate = date.getDate();
    let month = months[date.getMonth()];

    return (
      <div>
        {day}, {todayDate} {month}
      </div>
    );
  }

  return (
    <div className="WeeklyForcast">
      <div>{ShortHandDate()}</div>
      <div>
        <WeatherIcon code={iconDescription} size={"65px"} height={"90px"} />
      </div>
      <div>
        <span className="weeklyForcastHighTemp">
          {Math.round(maximumTemp)}°{props.units}
        </span>
        <span className="weeklyForcastLowTemp">
          {" "}
          {Math.round(minimumTemp)}°{props.units}
        </span>
      </div>
    </div>
  );
}
export default WeeklyForcast;
