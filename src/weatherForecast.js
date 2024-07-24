import React, { useState,useEffect } from "react";
import axios from 'axios';
import ForecastDay from "./forecastDay";
export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    useEffect(function () {
        setLoaded(false);
    }, [props.degree]);
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
   
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="mt-5 row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 3) {
                            return (
                                <div className="text-center col" key={index}>
                                    <ForecastDay data={dailyForecast} />
                                </div>
                            );
                       }
                    })}
                  
            </div>
            </div>
        )

    } else {
        const apiKey = "d1a86552de255334f6117b348c4519bd";
        const longitude = props.degree.lon;
        const latitude = props.degree.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
  
}