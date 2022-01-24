import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Search />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
