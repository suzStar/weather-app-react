import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

function WindData(props) {
  //   const [degree, setDegree] = useState("N");

  //   function degToCompass(num) {
  //     let val = Math.floor({props.windDirection} / 22.5 + 0.5);
  //     let arr = [
  //       "N",
  //       "NNE",
  //       "NE",
  //       "ENE",
  //       "E",
  //       "ESE",
  //       "SE",
  //       "SSE",
  //       "S",
  //       "SSW",
  //       "SW",
  //       "WSW",
  //       "W",
  //       "WNW",
  //       "NW",
  //       "NNW",
  //     ];
  //     return degree[val % 16];
  //   }

  return (
    <div className="WindData">
      <p>Wind Status</p>
      <div className="windSpeed">
        {Math.round(props.windSpeed)}
        <span className="speedUnit">mph</span>
      </div>
      <div>
        <span className="windDirectionIcon">
          <FaLocationArrow
            color="E7E7EB"
            size="15px"
            style={{ transform: `rotate(${props.windDirection})` }}
          />
        </span>
        <span className="windDirection">degToCompass</span>
      </div>
    </div>
  );
}
export default WindData;
