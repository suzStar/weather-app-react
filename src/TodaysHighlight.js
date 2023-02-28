import React from "react";
import WindData from "./WindData";
import HumidityData from "./HumidityData";
import InsightData from "./InsightData";
import "./TodaysHighlight.css";

function TodaysHighlight(props) {
  return (
    <div className="TodaysHighlight">
      <h1>Todays Highlights</h1>
      <div className="row">
        <div className="col-6 mb-3">
          <WindData
            windSpeed={props.data.windSpeed}
            windDirection={props.data.windDegree}
          />
        </div>
        <div className="col-6 mb-3">
          <HumidityData dataHumdity={props.data.humdity} />
        </div>

        <div className="col-6 mb-3">
          <InsightData
            title={"Feels Like"}
            dataPressure={props.data.feelsLike}
            unit={props.currentUnit}
          />
        </div>

        <div className="col-6 mb-3">
          <InsightData
            title={"Air Pressure"}
            dataPressure={props.data.pressure}
            unit={"mb"}
          />
        </div>
      </div>
      <footer className="mt-5">
        This project was coded by Suzanne Sharman and is{" "}
        <a
          className="footer-link"
          href="https://github.com/suzStar/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-source on GitHub
        </a>
      </footer>
    </div>
  );
}
export default TodaysHighlight;
