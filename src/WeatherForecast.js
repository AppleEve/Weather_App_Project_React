import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function updateWeatherForecast(response) {
    console.log(response.data);
  }
  let lon = props.data.lon;
  let lat = props.data.lat;
  let keyAPI = "711bf416fd4b68649d4f2e89cc233151";
  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyAPI}&units=metric`;
  axios.get(url).then(updateWeatherForecast);

  return (
    <div className="WeatherForecast row">
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="01d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="02d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="11d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="50d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
    </div>
  );
}
