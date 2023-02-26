import React, { useState } from "react";
import WeeklyForcast from "./WeeklyForcast";
import WindData from "./WindData";
import HumidityData from "./HumidityData";
import PressureData from "./PressureData";
import "./WeeklyForcast.css";
import axios from "axios";

function WeatherData(props) {
  const [loaded, setLoad] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="WeatherData">
        <div className="row d-flex justify-content-between mt-3">
          <div className="col">
            <WeeklyForcast
              daysOfWeek={forecast[1].time}
              weeklyIcon={forecast[1].condition.icon}
              minTemp={forecast[1].temperature.minimum}
              maxTemp={forecast[1].temperature.maximum}
            />
          </div>
          <div className="col">
            <WeeklyForcast
              daysOfWeek={forecast[2].time}
              weeklyIcon={forecast[2].condition.icon}
              minTemp={forecast[2].temperature.minimum}
              maxTemp={forecast[2].temperature.maximum}
            />
          </div>
          <div className="col">
            <WeeklyForcast
              daysOfWeek={forecast[3].time}
              weeklyIcon={forecast[3].condition.icon}
              minTemp={forecast[3].temperature.minimum}
              maxTemp={forecast[3].temperature.maximum}
            />
          </div>
          <div className="col">
            <WeeklyForcast
              daysOfWeek={forecast[4].time}
              weeklyIcon={forecast[4].condition.icon}
              minTemp={forecast[4].temperature.minimum}
              maxTemp={forecast[4].temperature.maximum}
            />
          </div>
          <div className="col">
            <WeeklyForcast
              daysOfWeek={forecast[5].time}
              weeklyIcon={forecast[5].condition.icon}
              minTemp={forecast[5].temperature.minimum}
              maxTemp={forecast[5].temperature.maximum}
            />
          </div>
        </div>
        <h1>Todays Highlights</h1>
        <div className="row">
          <div className="col-6 mb-3">
            <WindData
              windSpeed={props.data.windSpeed}
              windDirection={props.data.windDirection}
            />
          </div>
          <div className="col-6 mb-3">
            <HumidityData dataHumdity={props.data.humdity} />
          </div>

          <div className="col-6 mb-3">
            <PressureData
              title={"Feels Like"}
              dataPressure={props.data.feelsLike}
              unit={"°c"}
            />
          </div>

          <div className="col-6 mb-3">
            <PressureData
              title={"Air Pressure"}
              dataPressure={props.data.pressure}
              unit={"mb"}
            />
          </div>
        </div>
        <footer className="mt-5">
          This project was coded by Suzanne Sharman and is{" "}
          <a
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
  } else {
    const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
    let city = props.data.cityName;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);

    console.log(apiURL);
    return null;
  }
}
export default WeatherData;
