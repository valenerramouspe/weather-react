import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="superContainer">
      <Weather defaultCity="Buenos Aires" />
    </div>
  );
}
