import React from "react";

export default function WeatherTemperature(props){
    return(
        <span className="WeatherTemperature">
{props.celsius}
</span>
    );
}