import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [data, setData] = useState({ ready: false });
  function handleResponse(response) {
    setData({
      ready: true,
      city: response.data.name,
      iconUrl: "https://openweathermap.org/img/wn/04n@2x.png",
      description: response.data.weather[0].main,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (data.ready) {
    return (
      <div>
        <div className="search-wrap">
          <form id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter a city"
                  autoComplete="off"
                  id="search-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-light"
                  id="search-button"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="Details">
          <div className="row weather-wrap">
            <div className="col-md-6 main">
              <h1 id="city">{data.city}</h1>
              <div className="image">
                <img id="main-icon" src={data.iconUrl} alt={data.description} />
              </div>
            </div>
            <div className="col-md-6 temp">
              <h1>
                <span id="temperature">{Math.round(data.temperature)}</span>
                <span className="units">°C</span>
              </h1>
              <h2 id="description">{data.description}</h2>
              <ul className="Precipitations">
                <li>
                  Humidity | <span id="humidityResult">{data.humidity}</span>%
                </li>
                <li>
                  Wind | <span id="windResult">{data.wind}</span>Km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="date">
            Last updated:{" "}
            <span id="updateDate">
              <FormattedDate date={data.date} />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aeb2d1365a9d92cf49c896584716146c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
