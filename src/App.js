import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <Menu />
        </header>
        <p className="App-intro">
          <h1>Hell everyone</h1>
          <h2>Welcome to my new website !</h2>
        </p>
        <p>
          I am going to post my interests and projects I am currently working
          on.{" "}
        </p>
      </div>
    );
  }
}

export default App;
