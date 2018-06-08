import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavButton from "./NavButton";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Won
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
          {/* <NavButton /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

// import React, { Component } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarNav,
//   NavbarToggler,
//   Collapse,
//   NavItem,
//   NavLink,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "mdbreact";
// import { BrowserRouter as Router } from "react-router-dom";

// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//       isWideEnough: false,
//       dropdownOpen: false
//     };
//     this.onClick = this.onClick.bind(this);
//     this.toggle = this.toggle.bind(this);
//   }

//   onClick() {
//     this.setState({
//       collapse: !this.state.collapse
//     });
//   }

//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen
//     });
//   }

//   render() {
//     return (
//       <Router>
//         <Navbar color="indigo" expand="md" dark>
//           <NavbarBrand href="#">Navbar</NavbarBrand>
//           {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
//           <Collapse isOpen={this.state.collapse} navbar>
//             <NavbarNav left>
//               <NavItem active>
//                 <NavLink className="nav-link" to="#">
//                   Home
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" to="#">
//                   Link
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="nav-link" to="#" disabled>
//                   Disabled
//                 </NavLink>
//               </NavItem>
//             </NavbarNav>
//           </Collapse>
//         </Navbar>
//       </Router>
//     );
//   }
// }

// export default Menu;

// import React, { Fragment } from "react";
// // import "./Menu.css";
// import Button from "@material-ui/core/Button";
// import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import Home from "./Home";
// // import { blue100 } from "material-ui/styles/colors";
// // import { white } from "material-ui/styles/colors";
// // import { yellow100 } from "material-ui/styles/colors";

// // const bgstyle = {
// //   background: "butter"
// // };

// const pillStyle = {
//   background: "#0d47a1",
//   color: "white"
// };
// const Menu = () => {
//   return (
//     <Navbar inverse collapseOnSelect navbar-default>
//       <Navbar.Header>
//         <Navbar.Brand>
//           <a href="#brand">Won Thein</a>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Nav bsStyle="pills warning" activeKey={1}>
//           <NavItem
//             eventKey={1}
//             href="https://reverent-raman-6dc065.netlify.com/#first-section"
//           >
//             Home
//           </NavItem>

//           <NavItem
//             eventKey={2}
//             href="https://reverent-raman-6dc065.netlify.com/"
//           >
//             About
//           </NavItem>
//           <NavItem
//             eventKey={3}
//             href="https://reverent-raman-6dc065.netlify.com/#fifth-section"
//           >
//             Projects
//           </NavItem>
//           <NavItem
//             eventKey={4}
//             href="https://reverent-raman-6dc065.netlify.com/"
//           >
//             Portfolio{" "}
//           </NavItem>
//           <NavItem eventKey={5} href="#">
//             Contact
//           </NavItem>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Menu;

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

// This below is working
// <Fragment>
//   <Router>
//     <div className="container-fluid menustyle">
//       <ul>
//         <Button
//           style={{ fontSize: "13px" }}
//           variant="raised"
//           color="primary"
//         >
//           Home
//             </Button>
//         <a href="https://reverent-raman-6dc065.netlify.com/#first-section">
//           <Button
//             style={{ fontSize: "13px" }}
//             variant="raised"
//             color="primary"
//           >
//             About
//               </Button>
//         </a>
//         <a href="https://reverent-raman-6dc065.netlify.com/">
//           <Button
//             style={{ fontSize: "13px" }}
//             variant="raised"
//             color="primary"
//           >
//             Portfolio
//               </Button>
//         </a>
//         <Button
//           style={{ fontSize: "13px" }}
//           variant="raised"
//           color="primary"
//         >
//           Contact
//             </Button>
//         <a href="https://reverent-raman-6dc065.netlify.com/#fifth-section">
//           <Button
//             style={{ fontSize: "13px" }}
//             variant="raised"
//             color="primary"
//           >
//             Projects
//               </Button>
//         </a>
//       </ul>
//       {/* <Route path="/" exact={true} component={Home} /> */}
//       {/* <Route path="/About" component={About} />
//           {/* <Route path="/Contact" component={Contact} /> */}
//       {/* <Route path="/Portfolio" component={Portfolio} /> */}
//       {/* nested routing below */}
//     </div>
//   </Router>
// </Fragment>
