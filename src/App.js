import React from "react";
import Form from "./Form.js";
import Sun from "./Sun.js";
import Humidity from "./Humidity.js";
import Windsock from "./Windsock.js";
import Thermo from "./Thermo.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>Edinburgh</h1>
            <h2>
              Sunday 3.05pm <br /> Cloudy <br /> <br />
            </h2>
          </div>
          <div className="col-sm-6">
            <Form />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <br />
            <br />
            <Humidity />
            <Windsock />
          </div>
          <div className="col-sm-4 text-center">
            <Sun />
            <br/>
            <p>Open-sourced on <a href="https://github.com/tabbyblades/weather-app-react" target="blank">
            Github</a></p>
          </div>
          <div className="col-sm-4 text-center">
            <br />
            <br /> <Thermo />
          </div>
        </div>
      </div>
    </div>
  );
}
      
    
