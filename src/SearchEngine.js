import axios from "axios";
import React, { useState } from "react";
import "./SearchEngine.css";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import { SpinnerDotted } from "spinners-react";
// Background images
import Sunny from "./img/01hd.png";
import CleanNight from "./img/01n.png";
import PartlyCloudyDay from "./img/02d.png";
import PartlyCloudyNight from "./img/02n.png";
import CloudyDay from "./img/03d.png";
import CloudyNight from "./img/03n.png";
import RainyDay from "./img/09d.png";
import RainyNight from "./img/09n.png";
import StormDay from "./img/11d.png";
import StormNight from "./img/11n.png";
import SnowDay from "./img/13d.png";
import SnowNight from "./img/13n.png";
import FogDay from "./img/50d.png";
import FogNight from "./img/50n.png";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function updateWeatherData(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,

      ready: true,
    });
  }

  function updateWeatherInfo() {
    let keyAPI = "711bf416fd4b68649d4f2e89cc233151";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyAPI}`;
    axios.get(url).then(updateWeatherData);
  }
  function setCurrentLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiKey = "711bf416fd4b68649d4f2e89cc233151";
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then(updateWeatherData);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    updateWeatherInfo();
  }

  function handleClick(event) {
    event.preventDefault();
    setCurrentLocation();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherDisplay">
        <div
          className="current-weather"
          style={{
            backgroundImage:
              weatherData.icon === "01d"
                ? `url(${Sunny})`
                : weatherData.icon === "01n"
                ? `url(${CleanNight})`
                : weatherData.icon === "02d"
                ? `url(${PartlyCloudyDay})`
                : weatherData.icon === "02n"
                ? `url(${PartlyCloudyNight})`
                : weatherData.icon === "03d" || weatherData.icon === "04d"
                ? `url(${CloudyDay})`
                : weatherData.icon === "03n" || weatherData.icon === "04n"
                ? `url(${CloudyNight})`
                : weatherData.icon === "09d" || weatherData.icon === "10d"
                ? `url(${RainyDay})`
                : weatherData.icon === "09n" || weatherData.icon === "10n"
                ? `url(${RainyNight})`
                : weatherData.icon === "11d"
                ? `url(${StormDay})`
                : weatherData.icon === "11n"
                ? `url(${StormNight})`
                : weatherData.icon === "13d"
                ? `url(${SnowDay})`
                : weatherData.icon === "13n"
                ? `url(${SnowNight})`
                : weatherData.icon === "50d"
                ? `url(${FogDay})`
                : weatherData.icon === "50n"
                ? `url(${FogNight})`
                : `url(${CloudyDay})`,
            backgroundSize: "cover",
            width: "100%",
            padding: "30px",
            borderRadius: "17px",
            transition: "all 2s ease-in-out",
          }}
        >
          <div className="SearchEngine row">
            <form onSubmit={handleSubmit}>
              <input
                onChange={updateCity}
                className="search-window col-8"
                type="search"
                placeholder="select a city..."
              />
              <input
                className="submit-button col-2"
                type="submit"
                value="search"
              />
              <a
                href="/"
                className="location-button col-2"
                onClick={handleClick}
              >
                <i class="fa-solid fa-location-dot"></i>
              </a>
            </form>
          </div>
          <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        </div>
        <WeatherForecast data={weatherData} unit={unit} />
      </div>
    );
  } else {
    updateWeatherInfo();
    return (
      <div
        className="loading-page"
        style={{
          backgroundImage: `url(${PartlyCloudyDay})`,
          backgroundSize: "cover",
          width: "100%",
          paddingTop: "300px",
          paddingBottom: "300px",
          borderRadius: "17px",
          transition: "all 2s ease-in-out",
        }}
      >
        <SpinnerDotted color="white" />
      </div>
    );
  }
}
