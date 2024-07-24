import React, { useState } from "react";
import "./temp.css";
export default function WeatherTemperature(props) {
    console.log(props);
    const [unit, setUnit] = useState("celsius");
    function convertToFeh(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCel(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit() {
       return  Math.round((props.degree* 9 / 5) + 32);
        
    }
    function celsius() {
        return Math.round((props.degree));
         
    }
    console.log(unit);
    
    if (unit === "celsius") {
        console.log(fahrenheit());
        return (
            <div className="weatherTemperature">
                <span className="temperature fs-3 fw-bold mt-3">{celsius()}</span>
                <span className="fah "><a  onClick={convertToFeh}>°F</a></span>|<span className="cel"><a onClick={convertToCel}>°C</a></span>
            </div>
        );
       
    } else {
        console.log(celsius());
        
        return (
            <div className="weatherTemperature">
                <span className="temperature fs-3 fw-bold mt-3">{fahrenheit()}</span>
                <span className="fah"><a onClick={convertToFeh}>°F</a></span>|<span className="cel"><a  onClick={convertToCel}>°C</a></span>
            </div>
        );
    }
   

}