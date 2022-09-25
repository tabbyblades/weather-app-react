import React from "react";
import thermo from "../images/temp.svg";
import "./App.css";

export default function Thermo() {
  return (
    <p className="Thermo">
      <img src={thermo} alt="Thermo" height={80} /> 14°c
    </p>
  );
}