import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "aeb2d1365a9d92cf49c896584716146c";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast-wrap">
      <div className="row">
        <div className="col">
          <div className="forecast-date">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="forecast-temp">19°C</div>
        </div>
      </div>
    </div>
  );
}
