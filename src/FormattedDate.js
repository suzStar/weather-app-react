import React from "react";

function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  let leadingHours = hours < 10 ? `0${hours}` : hours;
  let leadingMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className="dayTime">
      <span className="me-3">{day}</span> •{" "}
      <span className="ms-3">
        {leadingHours}:{leadingMinutes}
      </span>
    </div>
  );
}
export default FormattedDate;
