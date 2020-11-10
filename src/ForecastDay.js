import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <div className="forecastDay col">
      <p>{props.weekday}</p>
      <WeatherIcon icon={props.img} />
      <p className="forecastTemp">{props.temp}</p>
    </div>
  );
}
