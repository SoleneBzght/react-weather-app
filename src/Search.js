import React from "react";

import "./Search.css";

export default function Search() {
  return (
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
  );
}
