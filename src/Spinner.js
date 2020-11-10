import React from "react";
import Loader from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="spinner">
      <Loader type="Grid" color="#384763" height={300} width={300} />;
    </div>
  );
}
