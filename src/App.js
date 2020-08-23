import React from "react";
import "./App.css";

import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Maggie's Weather App</h1>
        <Weather defaultCity="Salzburg" />
        <footer>
          This project was coded by Maggie and is{" "}
          <a
            href="https://github.com/i1323/react_final_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
