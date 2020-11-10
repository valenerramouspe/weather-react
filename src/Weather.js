import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import Forecast from "./Forecast";
import Spinner from "./Spinner";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [cityName, setCityName] = useState(props.defaultCity);
  let [cityData, setCityData] = useState({});
  let [forecastData, setForecastData] = useState();
  let apiKey = "b95b604b39b8b0391517ece500c5aefb";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=6&appid=${apiKey}&units=metric`;

  function getWeather(response) {
    setCityData({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      timeZone: response.data.timezone,
    });
    axios.get(forecastUrl).then(getForecast);
  }

  function getForecast(response) {
    setForecastData(response.data.list);
    setLoaded(true);
  }

  function searchCity(event) {
    setCityName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(getWeather);
  }

  if (loaded) {
    return (
      <div>
        <div className="container">
          <form className="searchBar" onSubmit={handleSubmit}>
            <input
              className="insertCity"
              type="text"
              placeholder="Insert city"
              onChange={searchCity}
            />
            <input className="searchButton" type="submit" value="Search" />
          </form>

          <City cityData={cityData} />
          <Forecast data={forecastData} />
        </div>
        <span className="linkToGit">
          <a
            href="https://github.com/valenerramouspe/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Valentina Erramouspe
        </span>
      </div>
    );
  } else {
    axios.get(url).then(getWeather);
    return <Spinner />;
  }
}
