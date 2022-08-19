import "./App.css";
import SearchEngine from "./SearchEngine.js";
import sun from "./img/sun.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <SearchEngine />
      <img src={sun} alt="sun" />

      <h1>23°</h1>
      <hr />
      <p>sunny</p>
      <div className="row">
        <div className="col-6">humidity: 10%</div>
        <div className="col-6">wind: 2 km/h</div>
      </div>
      <br />
      <br />
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
