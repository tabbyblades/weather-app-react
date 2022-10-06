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
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-sm-2">
                    <div className="WeatherForecast-day">Mon</div>
                    <WeatherIcon code="01d" height={100}/>
                    <div className="WeatherForecast-temps">
                    <span className="WeatherForecast-temp-min">{Math.round(forecast[0].temp.min)}°C</span>
                    <span className="WeatherForecast-temp-max">{Math.round(forecast[0].temp.max)}°C</span>
                    <WeatherForecastDay />
                    </div>
                </div>
            </div>
        </div>
    );
}
else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5c947bc6651bd71d8bfa87bd7568e05f&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;
}}