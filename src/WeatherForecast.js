import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast row">
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="01d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="01d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="01d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
      <div className="col">
        <div className="day">tuesday</div>
        <WeatherIcons code="01d" color="#7996d1" />
        <div className="temperature">20°C </div>
      </div>
    </div>
  );
}
