import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay (props){

    function day (){
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }
    return(
        <div className="WeatherForecast">
            <div className="row">
                    <div className="WeatherForecast-day">{day()}</div>
                    <WeatherIcon code={props.data.weather[0].icon} height={100}/>
                    <div className="WeatherForecast-temps">
                    <span className="WeatherForecast-temp-min">{Math.round(props.data.temp.min)}°C</span>
                    <span className="WeatherForecast-temp-max">{Math.round(props.data.temp.max)}°C</span>
                </div>
            </div>
        </div>
    );
}