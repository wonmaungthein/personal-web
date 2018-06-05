import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <div />
          {/* <div /> */}
          <div className="menu-col">
            <Menu />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
