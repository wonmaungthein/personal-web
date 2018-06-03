import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import bgImg from "./bg5.jpg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${bgImg})`
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section style={sectionStyle}>
          <div className="App-body">
            <p className="App-intro">
              <h1>Hello everyone</h1>
              <h2>Welcome to my new personal website !</h2>
            </p>
            <p>
              I am going to post my interests and the projects that I am
              currently working on. So, come along and find out what I have been
              doing and what we can do together for the better future.
            </p>
          </div>
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
