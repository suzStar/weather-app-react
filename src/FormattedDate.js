import React from "react";

function FormattedDate(props) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  let leadingHours = hours < 10 ? `0${hours}` : hours;
  let leadingMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div>
      {day}, {leadingHours}:{leadingMinutes}
    </div>
  );
}
export default FormattedDate;
