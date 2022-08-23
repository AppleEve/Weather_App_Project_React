import React from "react";
import Time from "./Time";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="city-country text-lowercase">
        {props.data.city}, {props.data.country}
      </div>
      <div className="date-time">
        <Time date={props.data.date} />
      </div>

      <h1>
        <span className="main-temperature">{props.data.temperature}</span>
        <span className="measure">°C</span>
      </h1>

      <hr className="hr-decoration" />
      <p className="weather-description">{props.data.description}</p>

      <div className="humidity">humidity: {props.data.humidity}%</div>
      <div className="wind">wind: {props.data.wind} km/h</div>

      <br />
      <br />
    </div>
  );
}