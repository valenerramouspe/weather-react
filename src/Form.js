import React from "react";

export default function Form() {
  return (
    <form className="searchBar">
      <input className="insertCity" type="text" placeholder="Insert city" />
      <input className="searchButton" type="submit" value="Search" />
      <input className="currentButton" value="Current" />
    </form>
  );
}
