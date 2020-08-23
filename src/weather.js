import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./weatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "6f117e861b0b0140bf049ebef75f4075";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="wholeApplication">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search your favourite City..."
                className="form-control"
                id="city-input"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="🔍" className="btn btn-light w-50" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
