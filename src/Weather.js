import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather (props){
    let city = (props.city);
    let [temp, setTemp]= useState("blah");
  

function showTemperature(response){
setTemp(response.data.main.temp);
} 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c947bc6651bd71d8bfa87bd7568e05f&units=metric`;
    axios.get(url).then(showTemperature);

    return(
        <p>The temperature in {city} is {Math.round(temp)}°C</p>
            );
}
