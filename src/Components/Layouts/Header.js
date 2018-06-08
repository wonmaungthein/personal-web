import React, { Component, Fragment } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid
} from "material-ui";

// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// import Button from "@material-ui/core/Button";
// import Navbar from "./Navbar";
// import "./Header.css";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 5,
  border: 2,
  color: "white",
  height: 38,
  padding: "5px 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
};

export default Header => (
  <Grid container>
    <AppBar position="static">
      <Toolbar>
        <Grid item xs={12} sm lg>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="title" color="inherit">
            Won{" "}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} lg={12}>
            <Button color="inherit" size="large" style={style}>
              Home
            </Button>
            <Button color="inherit" size="large" style={style}>
              About
            </Button>
            <Button color="inherit" size="large" style={style}>
              Projects
            </Button>
            <Button color="inherit" size="large" style={style}>
              Contact
            </Button>{" "}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Grid>
);

// import React from 'react';

// We can use inline-style

// class Header extends Component {
//   render() {
//     return (
//       <Fragment>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton color="inherit" aria-label="Menu">
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit">
//               Won{" "}
//             </Typography>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">About</Button>
//             <Button color="inherit">Projects</Button>
//             <Button color="inherit">Contact</Button>{" "}
//           </Toolbar>
//         </AppBar>
//       </Fragment>
//     );
//   }
// }

// export default Header;
