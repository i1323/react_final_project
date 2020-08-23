import React from "react";
import FormattedDate from "./formattedDate";

export default function weatherInfo(props) {
  return (
    <div className="row">
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
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                      className="mx-auto d-block"
                      id="todays-weather-icon"
                    />
                    <h5 className="text-center" id="todays-description">
                      {props.data.description}{" "}
                    </h5>
                  </div>
                  <div className="col-4">
                    <div className="weather-temperature">
                      <h4 className="text-center">
                        <span id="todays-temperature">
                          {Math.round(props.data.temperature)}
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
                  </div>
                  <div className="col-4">
                    <ul id="todays-weather-conditions">
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
