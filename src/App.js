import "./App.css";
import SearchEngine from "./SearchEngine.js";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="current-weather">
        <SearchEngine />
        <div className="city-country">nicosia, cy</div>
        <div className="date-time">saturday, 20/08/2022, 10:41</div>

        <h1>23°</h1>
        <hr />
        <p className="weather-description">sunny</p>

        <div className="humidity">humidity: 10%</div>
        <div className="wind">wind: 2 km/h</div>

        <br />
        <br />
      </div>
      <footer>
        The app was coded by{" "}
        <a
          href="https://tubular-starlight-a3612b.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          AppleEve{" "}
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/AppleEve/Weather_App_Project_React"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced.
        </a>
      </footer>
    </div>
  );
}
