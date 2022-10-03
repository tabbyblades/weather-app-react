import React from "react";
import sun from "./images/01d.svg";
import cloudy from "./images/02d.svg";
import rainbow from "./images/09d.svg";
import rain from "./images/10d.svg";
import stormy from "./images/11d.svg";
import snowy from "./images/13d.svg";
import foggy from "./images/50d.svg";

export default function WeatherIcon(props){
    const codeMapping ={
        "01d": sun,
        "01n": sun,
        "02d": cloudy,
        "02n": cloudy,
        "03d": cloudy,
        "03n": cloudy,
        "04d": cloudy,
        "04n": cloudy,
        "09d": rainbow,
        "09n": rainbow,
        "10d": rain,
        "10n": rain,
        "11d": stormy,
        "11n": stormy,
        "13d": snowy,
        "13n": snowy,
        "50d": foggy,
        "50n": foggy,

    };
    return(
        <img src={codeMapping[props.code]} height={250} alt={props.alt}/>
    );
}