import React from "react";
import "./Menu.css";
import Button from "@material-ui/core/Button";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Home from "./Home";

const Menu = () => {
  return (
    <div className="menustyle">
      <Router>
        <div className="container">
          <ul>
            <Link to="/Home">
              <Button variant="raised" color="primary">
                Home
              </Button>
            </Link>
            <Link to="/Contact">
              <Button variant="raised" color="primary">
                Contact
              </Button>
            </Link>
            <Link to="/About">
              <Button variant="raised" color="primary">
                About
              </Button>
            </Link>
            <Link to="/Portfolio">
              <Button variant="raised" color="primary">
                Portfolio
              </Button>
            </Link>
          </ul>
          <Route path="/" exact={true} component={Home} />
          {/* <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} /> */}
          {/* nested routing below */}
        </div>
      </Router>
    </div>
  );
};

export default Menu;

/* switch examples below */

// <Switch>
//   <Route exact path="/" component={Home} />
//   <Route path="/About" component={About} />
//   <Route
//     path="/About/goodmorning"
//     render={() => {
//       return <h1>Goodmorning</h1>;
//     }}
//   />
// </Switch>;
