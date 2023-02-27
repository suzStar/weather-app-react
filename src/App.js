import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Weather defaultCity="London" />
    </div>
  );
}

export default App;
