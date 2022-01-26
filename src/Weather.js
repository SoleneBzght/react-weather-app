import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Units from "./Units";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Details">
      <div className="row weather-wrap">
        <div className="col-md-6 main">
          <h1 id="city">{props.data.city}</h1>
          <div className="image">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={80}
            />
          </div>
        </div>
        <div className="col-md-6 temp">
          <h1>
            <Units celsius={props.data.temperature} />
          </h1>
          <h2 id="description">{props.data.description}</h2>
          <ul className="Precipitations">
            <li>
              Humidity | <span id="humidityResult">{props.data.humidity}</span>%
            </li>
            <li>
              Wind | <span id="windResult">{Math.round(props.data.wind)}</span>
              Km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="date">
        Last updated:{" "}
        <span id="updateDate">
          <FormattedDate date={props.data.date} />
        </span>
      </div>
    </div>
  );
}
