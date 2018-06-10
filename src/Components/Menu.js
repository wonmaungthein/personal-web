import React, { Fragment } from "react";
// import "./Menu.css";
// import Button from "@material-ui/core/Button";
// import React, { Component } from "react";
import ResponsiveMenu from "react-responsive-navbar";
import { bootstrapUtils } from "react-bootstrap/lib/utils";
import Button from "react-bootstrap/lib/Button";
import { Navbar, Nav, NavItem, MenuItem } from "react-bootstrap";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const navBg = {
  // background: "rgb(244, 202, 65)",

  height: 70,
  padding: 10
};

const buttonColor = {
  background: "#1A4BCF",
  borderRadius: "10%",
  marginLeft: 15
};

const Menu = () => {
  return (
    <Fragment>
      <Navbar inverse collapseOnSelect style={navBg}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Won Maung Thein</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              eventKey={1}
              href="https://reverent-raman-6dc065.netlify.com/#first-section"
            >
              Home{" "}
            </NavItem>
            <NavItem eventKey={2} href="#">
              About
            </NavItem>
            <NavItem eventKey={3} href="#">
              Contact
            </NavItem>
            <NavItem
              eventKey={4}
              href="https://reverent-raman-6dc065.netlify.com/"
            >
              Portfolio
            </NavItem>
            <NavItem
              eventKey={5}
              href="https://reverent-raman-6dc065.netlify.com/#fifth-section"
            >
              Projects
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
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

// <Link to="/Home" className="link">
//   {/* <Button variant="raised" color="primary"> */}
//   Home
//               {/* </Button> */}
// </Link>
//   <Link to="/Contact" className="link">
//     {/* <Button variant="raised" color="primary"> */}
//     Contact
//               {/* </Button> */}
//   </Link>
//   <Link to="/About" className="link">
//     {/* <Button variant="raised" color="primary"> */}
//     About
//               {/* </Button> */}
//   </Link>
//   <Link to="/Portfolio" className="link">
//     {/* <Button variant="raised" color="primary"> */}
//     {/* Portfolio */}
//     {/* </Button> */}
//     <a href="https://reverent-raman-6dc065.netlify.com/">
//       {" "}
//       Portfolio
//               </a>
//   </Link>

// Working Navbar Menu
// <Router>
//   <div className="container-fluid menustyle">
//     <ul>
//       <Button
//         style={{ fontSize: "13px" }}
//         variant="raised"
//         color="primary"
//       >
//         Home
//             </Button>
//       <a href="https://reverent-raman-6dc065.netlify.com/#first-section">
//         <Button
//           style={{ fontSize: "13px" }}
//           variant="raised"
//           color="primary"
//         >
//           About
//               </Button>
//       </a>
//       <a href="https://reverent-raman-6dc065.netlify.com/">
//         <Button
//           style={{ fontSize: "13px" }}
//           variant="raised"
//           color="primary"
//         >
//           Portfolio
//               </Button>
//       </a>
//       <Button
//         style={{ fontSize: "13px" }}
//         variant="raised"
//         color="primary"
//       >
//         Contact
//             </Button>
//       <a href="https://reverent-raman-6dc065.netlify.com/#fifth-section">
//         <Button
//           style={{ fontSize: "13px" }}
//           variant="raised"
//           color="primary"
//         >
//           Projects
//               </Button>
//       </a>
//     </ul>
//     {/* <Route path="/" exact={true} component={Home} /> */}
//     {/* <Route path="/About" component={About} />
//           {/* <Route path="/Contact" component={Contact} /> */}
//     {/* <Route path="/Portfolio" component={Portfolio} /> */}
//     {/* nested routing below */}
//   </div>
// </Router>
