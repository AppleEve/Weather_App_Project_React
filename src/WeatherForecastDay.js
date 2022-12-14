import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    let temperatureFahrenheit = Math.round((temperature * 9) / 5 + 32);

    if (props.unit === "celsius") {
      return `${temperature}°`;
    } else {
      return `${temperatureFahrenheit}°`;
    }
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    let temperatureFahrenheit = Math.round((temperature * 9) / 5 + 32);
    if (props.unit === "celsius") {
      return `${temperature}°`;
    } else {
      return `${temperatureFahrenheit}°`;
    }
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcons
        code={props.data.weather[0].icon}
        size={36}
        icon={props.icon}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
