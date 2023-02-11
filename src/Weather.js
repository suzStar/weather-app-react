import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>City Name</h1>
      <ul>
        <li>Thursday 18:00</li>
        <li>Weather Conditions</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6 currentCondition">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt=""
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 91%</li>
            <li>Wind: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weather;
