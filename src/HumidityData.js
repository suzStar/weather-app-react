import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function HumidityData(props) {
  return (
    <div className="HumidityData">
      <p>Humidity</p>
      <div className="windSpeed">
        {Math.round(props.dataHumdity)}
        <span className="speedUnit">%</span>
      </div>
      <div className="humidityBar">
        <div>0</div>
        <div>50</div>
        <div>100</div>
        <div>
          <ProgressBar
            completed={props.dataHumdity}
            width="229px"
            bgColor="#FFEC65"
            baseBgColor="#E7E7EB"
            isLabelVisible="false"
            height="8px"
            margin="3px 0"
          />
        </div>
        <div className="footerKey">%</div>
      </div>
    </div>
  );
}
export default HumidityData;
