import axios from "axios";
import React, { useState } from "react";
import "./SearchEngine.css";

import WeatherInfo from "./WeatherInfo";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function updateWeatherData(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function updateWeatherInfo() {
    let keyAPI = "711bf416fd4b68649d4f2e89cc233151";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyAPI}`;
    axios.get(url).then(updateWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateWeatherInfo();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine row">
        <form onSubmit={handleSubmit}>
          <input
            onChange={updateCity}
            className="search-window col-9"
            type="search"
            placeholder="select a city..."
          />
          <input className="submit-button col-2" type="submit" value="search" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    updateWeatherInfo();
  }
}
