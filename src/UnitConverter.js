import React, { useState } from "react";

export default function UnitConverter(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span>{Math.round(props.temp)}</span>
        <sup className="sup">
          <a href="/" className="active">
            C°
          </a>
          <a onClick={showFahrenheit} href="/">
            F°
          </a>
        </sup>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round((props.temp * 9) / 5 + 32)}</span>
        <sup className="sup">
          <a onClick={showCelsius} href="/">
            C°
          </a>
          <a href="/" className="active">
            F°
          </a>
        </sup>
      </div>
    );
  }
}
