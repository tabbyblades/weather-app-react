import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
        let [city, setCity] = useState("Edinburgh");
        let [temp, setTemp]= useState("");
      
    
    function showInfo(response){
    setTemp(response.data.main.temp);
    } 

function handleSubmit(event) {
event.preventDefault();
alert(`It is ${Math.round(temp)}°C in ${city}`);
}

function updateCity(event) {
setCity(event.target.value);}


        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c947bc6651bd71d8bfa87bd7568e05f&units=metric`;
        axios.get(url).then(showInfo);
  
    return (
        <form className="form" onSubmit={handleSubmit}>
          <input type= "search" className="searchForm" placeholder="Location" onChange={updateCity}/>
           <input type ="submit" value="search" className="submitButton"/>
        </form>

  );
}