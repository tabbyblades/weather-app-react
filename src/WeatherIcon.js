import React from "react";
import sun from "./images/01d.svg";

export default function WeatherIcon(props){
    return(
        <img src={sun} height={250} alt={props.alt}/>
    );
}