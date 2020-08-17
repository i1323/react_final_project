import React from "react";

export default function Weather() {
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
                      <h2 id="currentCity"> Salzburg </h2>
                    </div>
                    <div className="col-6">
                      <h3 className="text-right" id="todayIsThisDay">
                        Tuesday 15:53
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt="☀🌦"
                        className="mx-auto d-block"
                        id="todays-weather-icon"
                      />
                      <h5 className="text-center" id="todays-description">
                        SUNNY{" "}
                      </h5>
                    </div>
                    <div className="col-4">
                      <div className="weather-temperature">
                        <h4 className="text-center">
                          <span id="todays-temperature">
                            25
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
                          <strong>Temp min/max:</strong> 10 °C | 20 °C
                        </li>
                        <li>
                          <strong>Humidity:</strong> 20 %
                        </li>
                        <li>
                          <strong>Wind:</strong> 5 km/h
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
}
