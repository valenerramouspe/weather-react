import React from "react";
import ForecastDay from "./ForecastDay";
import Weekday from "./Weekday";

export default function Forecast(props) {
  let data = props.data;
  return (
    <div className="forecastRow row">
      {data.slice(1).map((weather, i) => (
        <ForecastDay
          key={i}
          weekday={<Weekday time={weather.dt * 1000} />}
          temp={`${Math.round(weather.temp.min)} - ${Math.round(
            weather.temp.max
          )}`}
          img={weather.weather[0].icon}
        />
      ))}
    </div>
  );
}
