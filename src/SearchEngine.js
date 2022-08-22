import axios from "axios";
import React, { useState } from "react";
import "./SearchEngine.css";
import Time from "./Time";

export default function SearchEngine() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function updateWeatherData(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine row">
        <form>
          <input
            className="search-window col-9"
            type="search"
            placeholder="select a city..."
          />
          <input className="submit-button col-2" type="submit" value="search" />
        </form>
        <div className="city-country text-lowercase">
          {weatherData.city}, {weatherData.country}
        </div>
        <div className="date-time">
          <Time date={weatherData.date} />
        </div>

        <h1>
          <span className="main-temperature">{weatherData.temperature}</span>
          <span className="measure">°C</span>
        </h1>

        <hr className="hr-decoration" />
        <p className="weather-description">{weatherData.description}</p>

        <div className="humidity">humidity: {weatherData.humidity}%</div>
        <div className="wind">wind: {weatherData.wind} km/h</div>

        <br />
        <br />
      </div>
    );
  } else {
    let keyAPI = "711bf416fd4b68649d4f2e89cc233151";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Nicosia&units=metric&appid=${keyAPI}`;
    axios.get(url).then(updateWeatherData);
  }
}
