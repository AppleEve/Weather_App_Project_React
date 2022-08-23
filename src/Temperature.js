import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="main-temperature">{props.celsius}</span>
        <span className="measure">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
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
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
