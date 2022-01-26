import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
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
