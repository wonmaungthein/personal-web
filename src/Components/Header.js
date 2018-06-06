import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid App-header">
          <div className="row">
            <div className="" />
            <div className=" col-sm-12 col-md-12 col-lg-12">
              <Menu />{" "}
            </div>
            <div className="" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
