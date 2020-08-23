import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <h4 className="text-center">
          <span id="todays-temperature">
            {Math.round(props.celsius)}
            <strong />
          </span>
          <span className="units">
            °C |
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F
            </a>
          </span>
        </h4>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <h4 className="text-center">
          <span id="todays-temperature">
            {Math.round(fahrenheit())}
            <strong />
          </span>
          <span className="units">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h4>
      </div>
    );
  }
}
