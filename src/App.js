import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Suzanne Sharman and is{" "}
          <a
            href="https://github.com/suzStar/weather-app-react"
            target="_blank"
          >
            {" "}
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
