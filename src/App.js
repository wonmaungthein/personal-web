import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import bgImg from "./bg6.jpg";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Portfolio } from "./Components/Portfolio";
// import Home from "./Components/Home";
import { Grid, Row, Col } from "react-bootstrap";
const sectionStyle = {
  backgroundImage: `url(${bgImg})`
};

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>

        <div className="row row2">
          <div className="col">
            <section style={sectionStyle} className="sectionStyle">
              <div className="App-body container-fluid">
                <div className="row row1">
                  <div className="col col-lg-12" />
                </div>

                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3  firstCol" />
                  <div className="col-lg-1 col-md-1 col-sm-2 secondCol" />
                  <div className="col-lg-8  col-md-8 col-sm-7 col-xs-12 lastCol">
                    <p className="App-intro">
                      <h1>
                        <strong>Hello !!</strong>
                      </h1>
                      <h3>
                        <b>Welcome to my personal website !</b>
                      </h3>
                    </p>
                    <p>
                      I am going to post my interests and the projects that I am
                      currently working on. So, come along and find out what I
                      have been doing and what we can do together for the better
                      future.
                    </p>
                    <p className="font-color">
                      <em>
                        PS. It's just a begining and will update bit by bit.{" "}
                        <br />
                        So be patient. :) !!!
                      </em>
                    </p>
                  </div>
                </div>
                <div className="row row3">
                  <div className="col col-lg-12"> </div>
                </div>
              </div>{" "}
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <footer className="App-footer">
              <div />
              <div />
              <div className="social-media">
                <Footer />
              </div>
            </footer>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
