import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){

    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=>{
setReady(false);},
[props.coordinates]
    );


    function handleResponse(response){
        setForecast(response.data.daily);
        setReady(true);
        console.log(response.data.daily);
    }
    
    if(ready){
    return(
        <div className = "WeatherForecast">
            <div className = "row">
{forecast.map(function(dailyForecast, index){
    if (index < 6){
        return(
            <div className = "col-sm-2" key={index}>
                <WeatherForecastDay data = {dailyForecast}/> 
        </div>);}

    })}
        </div>
        </div>
    );}

else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=21cf7404ebbe31d980b4979529bf1e5a&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;
}}