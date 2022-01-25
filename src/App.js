import React from "react";
import Search from "./Search";

import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Search defaultCity="Barcelona" />
      </div>
      <Footer />
    </div>
  );
}
