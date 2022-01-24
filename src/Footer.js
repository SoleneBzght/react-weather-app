import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="githubLink"
          href="https://github.com/SoleneBzght/react-weather-app"
        >
          Open-source code
        </a>{" "}
        by Sol ☀️
      </small>
    </div>
  );
}
