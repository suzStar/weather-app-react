import React from "react";

function ShortHandDate(props) {
  const days = ["Tomorrow", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
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
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  return (
    <div>
      {day}, {date} {month}
    </div>
  );
}
export default ShortHandDate;
