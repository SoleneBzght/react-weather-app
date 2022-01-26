import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function temp() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day + 1];
  }

  return (
    <div className="col">
      <div className="forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="forecast-temp">{temp()}</div>
    </div>
  );
}
