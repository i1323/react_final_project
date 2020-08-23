import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      <div className="card rounded">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {temperature()}
      </div>
    </div>
  );
}
