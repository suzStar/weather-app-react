import React from "react";
import ShortHandDate from "./ShortHandDate";
import WeatherIcon from "./WeatherIcon";

function WeeklyForcast(props) {
  return (
    <div className="WeeklyForcast">
      <h1>hello</h1>
      {/* <div>
        <ShortHandDate date={props.data.date} />
      </div> */}
      {/* <div>
        <WeatherIcon code={props.data.icon} size={"62px"} />
      </div> */}
      <div>
        <span className="weeklyForcastHighTemp">90 </span>
        <span className="weeklyForcastLowTemp"> 10</span>
      </div>
    </div>
  );
}
export default WeeklyForcast;
