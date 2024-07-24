import React from "react";
import WeatherIcon from "./weatherIcon";
export default function ForecastDay(props) {
   
    function day() {
        let date = new Date(props.data.dt * 1000);
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let day = days[date.getDay()];
        return day;
    }
    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={32} />
            <div >  <span className="p-3 WeatherForecast-temperatures-max">
                { Math.round(props.data.temp.max)}°C
            </span>
                <span className="WeatherForecast-temperatures-max">
                    {Math.round(props.data.temp.min)}°C
                </span></div>
        </div>
    )
}