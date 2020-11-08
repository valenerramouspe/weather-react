import React from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentCity from "./CurrentCity";

export default function City() {
  return (
    <div className="header row">
      <CurrentWeather
        temp="29C°"
        weather="Rain"
        humidity="82%"
        wind="24 km/h"
        img="http://openweathermap.org/img/w/10d.png"
      />
      <CurrentCity name="Buenos Aires" date="Tuesday November 3" time="2:30" />
    </div>
  );
}
