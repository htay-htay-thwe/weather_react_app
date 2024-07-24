import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./weatherInfo";
import axios from "axios";  
import WeatherForecast from "./weatherForecast.js"
export default function WeatherApp(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.city);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date:new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: 12,
            city: response.data.name,  
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            coord: response.data.coord,
        });
      
    }
    function search(city) {
        const apiKey = "77c7275e211e9d66e4f9fc94a7928369";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse); 
            
            return "Loading...";
      }
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
        
    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }
    if (weatherData.ready) {
        return (
            <div className="WeatherApp">
                <form onSubmit={handleSubmit}>
                    <div className="gap-2 mb-3 d-flex">
                    <div className="col">  <input onChange={handleCityChange} type="text" className="form-control" placeholder="Enter a city" /></div>
                    <div><button className="btn btn-primary">Search</button></div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast degree={weatherData.coord} />
            </div>
        );
    } else {
        const apiKey = "77c7275e211e9d66e4f9fc94a7928369";
        let city = 'New York';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse); 
            
            return "Loading...";
    }
   

}