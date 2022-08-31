import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="main-temperature">{props.celsius}</span>
        <span className="measure">
          °C{" "}
          <a href="/" onClick={displayFahrenheit}>
            | °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="main-temperature">
          {Math.round(convertToFahrenheit())}
        </span>
        <span className="measure">
          <a href="/" onClick={displayCelsius}>
            °C |
          </a>{" "}
          °F
        </span>
      </div>
    );
  }
}
