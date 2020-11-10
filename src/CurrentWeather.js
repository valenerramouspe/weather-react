import React from "react";
import UnitConverter from "./UnitConverter";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="weatherToday col-5 row">
      <div className="todayIcon col-6">
        <WeatherIcon icon={props.icon} size={200} />
      </div>

      <div className="col-6">
        <h1>
          <UnitConverter temp={props.temp} />
        </h1>
        <h2>{props.weather}</h2>
      </div>
      <div className="rainWind col-12">
        <p className="col-12">Humidity: {props.humidity}%</p>
        <p className="col-12">Wind: {Math.round(props.wind * 3.6)} km/hr</p>
      </div>
    </div>
  );
}
