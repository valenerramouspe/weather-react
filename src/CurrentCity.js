import React from "react";

export default function CurrentCity(props) {
  return (
    <div className="currentCity col-7">
      <p className="cityName col-12">{props.name}</p>
      <p className="cityText col-12">{props.date}</p>
      <p className="cityText col-12">{props.time}</p>
    </div>
  );
}
