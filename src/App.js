import "./App.css";
import SearchEngine from "./SearchEngine.js";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="current-weather">
        <SearchEngine defaultCity="Nicosia" />
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
    </div>
  );
}
