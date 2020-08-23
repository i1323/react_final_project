import React from "react";
import FormattedDate from "./formattedDate";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./weatherTemperature";

export default function weatherInfo(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="today">
          <div className="firstDay">
            <div className="card rounded">
              <div className="card-body" id="first-day">
                <div className="row">
                  <div className="col-6">
                    <h2 id="currentCity"> {props.data.city} </h2>
                  </div>
                  <div className="col-6">
                    <h3 className="text-right" id="todayIsThisDay">
                      <FormattedDate date={props.data.date} />
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <WeatherIcon code={props.data.icon} />
                    <h5 className="text-center" id="todays-description">
                      {props.data.description}{" "}
                    </h5>
                  </div>
                  <div className="col-4" id="temperature">
                    <WeatherTemperature celsius={props.data.temperature} />
                  </div>
                  <div className="col-4" id="todays-weather-conditions">
                    <ul>
                      <li>
                        <strong>Temp min/max:</strong>{" "}
                        {Math.round(props.data.tempMin)}
                        °C | {Math.round(props.data.tempMax)}°C
                      </li>
                      <li>
                        <strong>Humidity:</strong> {props.data.humidity} %
                      </li>
                      <li>
                        <strong>Wind:</strong> {props.data.wind} km/h
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
