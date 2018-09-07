import React, { Component, Fragment } from "react";

export class Main extends Component {
  render() {
    return (
      <Fragment>
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
            I am going to post my interests and the projects that I am currently
            working on. So, come along and find out what I have been doing and
            what we can do together for the better future.
          </p>
          <p className="font-color">
            <em>
              PS. It's just a begining and will update bit by bit. <br />
              So be patient. :) !!!
            </em>
          </p>
        </div>
      </Fragment>
    );
  }
}
