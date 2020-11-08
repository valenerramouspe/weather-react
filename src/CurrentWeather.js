import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="weatherToday col-5 row">
      <img className="todayIcon col-6" src={props.img} />
      <div className="col-6">
        <h1>
          <span>{props.temp}</span>
          <sup className="sup">
            <a href="#" className="active">
              C°
            </a>
            |<a href="#">F°</a>
          </sup>
        </h1>
        <h2>{props.weather}</h2>
      </div>
      <div className="rainWind col-12">
        <p className="col-12">Humidity: {props.humidity}</p>
        <p className="col-12">Wind: {props.wind}</p>
      </div>
    </div>
  );
}
