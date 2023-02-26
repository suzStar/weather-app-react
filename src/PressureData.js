import React, { useState } from "react";

function PressureData(props) {
  return (
    <div className="PressureData">
      <p>{props.title}</p>
      <div className="windSpeed">
        {Math.round(props.dataPressure)}
        <span className="speedUnit">{props.unit}</span>
      </div>
    </div>
  );
}
export default PressureData;
