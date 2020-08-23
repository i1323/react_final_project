import React from "react";
import "./App.css";

import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Maggie's Weather App</h1>
        <Weather defaultCity="Munich" />
        <footer className="text-center">
          This project was coded by Maggie and is{" "}
          <a
            className="gitHub"
            href="https://github.com/i1323/react_final_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            className="netlify"
            href="https://reverent-euler-36a581.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify!
          </a>
        </footer>
      </div>
    </div>
  );
}
