import React from "react";

export default function Weekday(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return <span>{weekDays[new Date(props.time).getDay()]}</span>;
}
