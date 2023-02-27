import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function WindData(props) {
  function degToCompass() {
    const angle = props.windDirection;
    const degreePerDirection = 360 / 8;
    const offsetAngle = angle + degreePerDirection / 2;

    return offsetAngle >= 0 * degreePerDirection &&
      offsetAngle < 1 * degreePerDirection
      ? "N"
      : offsetAngle >= 1 * degreePerDirection &&
        offsetAngle < 2 * degreePerDirection
      ? "NE"
      : offsetAngle >= 2 * degreePerDirection &&
        offsetAngle < 3 * degreePerDirection
      ? "E"
      : offsetAngle >= 3 * degreePerDirection &&
        offsetAngle < 4 * degreePerDirection
      ? "SE"
      : offsetAngle >= 4 * degreePerDirection &&
        offsetAngle < 5 * degreePerDirection
      ? "S"
      : offsetAngle >= 5 * degreePerDirection &&
        offsetAngle < 6 * degreePerDirection
      ? "SW"
      : offsetAngle >= 6 * degreePerDirection &&
        offsetAngle < 7 * degreePerDirection
      ? "W"
      : "NW";
  }
  return (
    <div className="WindData">
      <p>Wind Status</p>
      <div className="windSpeed">
        {Math.round(props.windSpeed)}
        <span className="speedUnit">mph</span>
      </div>
      <div>
        <span className="windDirectionIcon">
          <FaLocationArrow color="E7E7EB" size="15px" />
        </span>
        <span className="windDirection">{degToCompass()}</span>
      </div>
    </div>
  );
}

export default WindData;
