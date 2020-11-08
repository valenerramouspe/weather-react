import React from "react";
import "./index.css";
import Form from "./Form";
import City from "./City";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="superContainer">
      <div className="container">
        <Form />
        <City />
        <Forecast />
      </div>
      <span class="linkToGit">
        <a
          href="https://github.com/valenerramouspe/weather-react"
          target="_blank"
        >
          Open source code
        </a>{" "}
        by Valentina Erramouspe
      </span>
    </div>
  );
}
