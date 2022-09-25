import React from "react";
import humidity from "../images/water.svg";
import "./App.css";

export default function Humidity() {
  return (
    <p className="Humidity">
      <img src={humidity} alt="Humidity" height={80} /> Humidity: 94%
    </p>
  );
}