import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
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