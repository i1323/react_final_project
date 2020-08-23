import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday 15:53",
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="wholeApplication">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search your favourite City..."
                className="form-control"
                id="city-input"
                autoComplete="off"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="🔍" className="btn btn-light w-50" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-12">
            <div className="today">
              <div className="firstDay">
                <div className="card rounded">
                  <div className="card-body" id="first-day">
                    <div className="row">
                      <div className="col-6">
                        <h2 id="currentCity"> {weatherData.city} </h2>
                      </div>
                      <div className="col-6">
                        <h3 className="text-right" id="todayIsThisDay">
                          {weatherData.date}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={weatherData.iconUrl}
                          alt={weatherData.description}
                          className="mx-auto d-block"
                          id="todays-weather-icon"
                        />
                        <h5 className="text-center" id="todays-description">
                          {weatherData.description}{" "}
                        </h5>
                      </div>
                      <div className="col-4">
                        <div className="weather-temperature">
                          <h4 className="text-center">
                            <span id="todays-temperature">
                              {Math.round(weatherData.temperature)}
                              <strong />
                            </span>
                            <span className="units">
                              <a
                                href="..."
                                id="celsius-link"
                                className="active"
                              >
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
                            {Math.round(weatherData.tempMin)}
                            °C | {Math.round(weatherData.tempMax)}°C
                          </li>
                          <li>
                            <strong>Humidity:</strong> {weatherData.humidity} %
                          </li>
                          <li>
                            <strong>Wind:</strong> {weatherData.wind} km/h
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
      </div>
    );
  } else {
    const apiKey = "6f117e861b0b0140bf049ebef75f4075";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
