import React from "react";

function InsightData(props) {
  return (
    <div className="InsightData">
      <p>{props.title}</p>
      <div className="dataTitle">
        {Math.round(props.dataPressure)}
        <span className="dataUnit">°{props.unit}</span>
      </div>
    </div>
  );
}
export default InsightData;
