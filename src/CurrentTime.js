import React from "react";
import Weekday from "./Weekday";

export default function CurrentTime(props) {
  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let time = utc + props.data * 1000;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let now = {
    month: months[new Date(time).getMonth()],
    day: new Date(time).getDate(),
    hours:
      new Date(time).getHours() < 10
        ? `0${new Date(time).getHours()}`
        : new Date(time).getHours(),
    minutes:
      new Date(time).getMinutes() < 10
        ? `0${new Date(time).getMinutes()}`
        : new Date(time).getMinutes(),
  };

  console.log();
  return (
    <div>
      <p className="cityText col-12">
        <Weekday time={time} />, {now.month} {now.day}
      </p>
      <p className="cityText col-12">
        {now.hours}:{now.minutes}
      </p>
    </div>
  );
}
