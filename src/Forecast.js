import React from "react";
import Day from "./Day";

export default function Forecast() {
  return (
    <div className="forecastRow row">
      <Day
        weekday="Friday"
        temp="16-20"
        img="http://openweathermap.org/img/w/01d.png"
      />
      <Day
        weekday="Saturday"
        temp="11-18"
        img="http://openweathermap.org/img/w/03d.png"
      />
      <Day
        weekday="Sunday"
        temp="9-14"
        img="http://openweathermap.org/img/w/11d.png"
      />
      <Day
        weekday="Monday"
        temp="12-14"
        img="http://openweathermap.org/img/w/02d.png"
      />
      <Day
        weekday="Tuesday"
        temp="15-23"
        img="http://openweathermap.org/img/w/13d.png"
      />
    </div>
  );
}
