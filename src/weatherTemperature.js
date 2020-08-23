import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-temperature">
      <h4 className="text-center">
        <span id="todays-temperature">
          {Math.round(props.celsius)}
          <strong />
        </span>
        <span className="units">
          <a href="..." id="celsius-link" className="active">
            °C
          </a>
          |
          <a href="..." id="fahrenheit-link">
            °F
          </a>
        </span>
      </h4>
    </div>
  );
}
