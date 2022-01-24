import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="search-wrap">
      <form id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
              id="search-input"
            />
          </div>
          <div className="col-4">
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
