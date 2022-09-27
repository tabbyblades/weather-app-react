import React, {useState} from "react";
import Sun from "./Sun.js";
import Humidity from "./Humidity.js";
import Windsock from "./Windsock.js";
import Thermo from "./Thermo.js";
import './App.css';
import axios from "axios";


export default function App() {
  let [city, setCity] = useState("Edinburgh");
  let [temp, setTemp]= useState("");


function showInfo(response){
setTemp(response.data.main.temp);
} 

function handleSubmit(event) {
event.preventDefault();
alert(`It is ${Math.round(temp)}°C in ${city}`);
}

function updateCity(event) {
setCity(event.target.value);}


  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c947bc6651bd71d8bfa87bd7568e05f&units=metric`;
  axios.get(url).then(showInfo);

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
      <form className="form" onSubmit={handleSubmit}>
    <input type= "search" className="searchForm" placeholder="Location" onChange={updateCity}/>
     <input type ="submit" value="search" className="submitButton"/>
  </form>
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
        <p>Open-sourced on <a href="https://github.com/tabbyblades/weather-app-react" target="_blank" rel="noopener noreferrer">
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