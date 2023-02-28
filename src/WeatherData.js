import React, { useState, useEffect } from "react";
import WeeklyForcast from "./WeeklyForcast";
import "./WeeklyForcast.css";
import axios from "axios";

function WeatherData(props) {
  const [loaded, setLoad] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.data.cityName, props.selectedUnit]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="WeatherData">
        <div className="row d-flex justify-content-between mt-3">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeeklyForcast
                    forecastData={dailyForecast}
                    units={props.currentUnit}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
    let city = props.data.cityName;
    let unit = props.selectedUnit;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
export default WeatherData;
