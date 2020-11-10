import React from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentTime from "./CurrentTime";

export default function City(props) {
  return (
    <div className="header row">
      <CurrentWeather
        temp={props.cityData.temperature}
        weather={props.cityData.description}
        humidity={props.cityData.humidity}
        wind={props.cityData.wind}
        icon={props.cityData.icon}
      />
      <div className="currentCity col-7">
        <p className="cityName col-12">{props.cityData.name}</p>
        <CurrentTime data={props.cityData.timeZone} />
      </div>
    </div>
  );
}
