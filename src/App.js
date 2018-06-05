import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import bgImg from "./9bg.jpg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Portfolio } from "./Components/Portfolio";
// import Home from "./Components/Home";

const sectionStyle = {
  backgroundImage: `url(${bgImg})`
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section style={sectionStyle} className="sectionStyle">
          <div className="App-body">
            <p className="App-intro">
              <h1>Hello everyone</h1>
              <h3>Welcome to my new personal website !</h3>
            </p>
            <p>
              I am going to post my interests and the projects that I am
              currently working on. So, come along and find out what I have been
              doing and what we can do together for the better future.
            </p>
            <p className="font-color">
              <em>
                PS. It's just a begining and I am still working on this. <br />
                So be patient. :) !!!
              </em>
            </p>
          </div>{" "}
        </section>
        <footer className="App-footer">
          <div />
          <div />
          <div className="social-media">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
