import React from "react";
import windsock from "./images/windsock.svg";
import "./App.css";

export default function Windsock() {
  return (
    <p className="Windsock">
      <img src={windsock} alt="Windsock" height={80} /> Wind: 1 m/s
    </p>
  );
}