import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "aeb2d1365a9d92cf49c896584716146c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (data.ready) {
    return (
      <div>
        <div className="search-wrap">
          <form onSubmit={handleSubmit} id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter a city"
                  autoComplete="off"
                  id="search-input"
                  onChange={handleCityChange}
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
        <Weather data={data} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
