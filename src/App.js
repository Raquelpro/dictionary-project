import React from "react";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid"
      alt="logo" />
      <br />
      <a href="#" className="btn btn-primary shadow">Hello</a>
      </header>
    </div>
  );
}
;
