import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    function handleResponse(response){
        console.log(response.data);
    }

    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5c947bc6651bd71d8bfa87bd7568e05f&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-sm-2">
                    <div className="WeatherForecast-day">Mon</div>
                    <WeatherIcon code="01d" height={100}/>
                    <div className="WeatherForecast-temps">
                    <span className="WeatherForecast-temp-min">10°C</span>
                    <span className="WeatherForecast-temp-max">18°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}