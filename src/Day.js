import React from "react";

export default function Day(props) {
  return (
    <div className="forecastDay col">
      <p>{props.weekday}</p>
      <img src={props.img} />
      <p className="forecastTemp">{props.temp}</p>
    </div>
  );
}
