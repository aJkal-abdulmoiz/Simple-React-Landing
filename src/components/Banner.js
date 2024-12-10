import '../App.css';

import logo from "../logo.svg"


import React from "react";

function Banner({ page }) {
  return (
    <div className="banner">

    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>

        </div>

      <h2>{`Welcome to the ${page} Page`}</h2>
    </div>
  );
}

export default Banner;
