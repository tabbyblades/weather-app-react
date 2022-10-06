import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){

    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setReady(true);
        console.log(response.data.daily);
    }
    
    if(ready){
    return(
    <WeatherForecastDay data = {forecast[0]}/>  
    );
}
else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5c947bc6651bd71d8bfa87bd7568e05f&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;
}}