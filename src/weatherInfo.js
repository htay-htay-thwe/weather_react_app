import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./weatherTemperature";
import "./weatherIcon.css"
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li>Partly</li>
            </ul>
            <div className="d-flex gap-5">
                <div className="d-flex icon">
                    <WeatherIcon code={props.data.icon} size={52} />
                  <WeatherTemperature degree={props.data.temperature}/>
                </div>
            </div>
            <div className="text-end condition">
                    <div>Precipitation : 15%</div>
                    <div>Humidity : {props.data.humidity}</div>
                    <div>Wind : {props.data.wind}</div>
                </div>
        </div>

    )
}