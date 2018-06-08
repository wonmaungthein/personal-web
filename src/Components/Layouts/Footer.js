import React, { Fragment } from "react";

import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

// import Button from "@material-ui/core/Button";
// import Alarm from "@material-ui/icons/Alarm";
// import { Icon } from "@material-ui/core";
// import "./footer.css";
// import { Button } from "react-bootstrap";

export default Footer => (
  <Paper>
    <Tabs indicatorColor="primary" value={0} textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);

// class Footer extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <Paper>
//           <Tabs indicatorColor="primary" value={0} textColor="primary" centered>
//             <Tab label="Item One" />
//             <Tab label="Item Two" />
//             <Tab label="Item Three" />
//           </Tabs>
//         </Paper>
//       </Fragment>
//     );
//   }
// }

// export default Footer;

{
  /* <FontIcon className="material-icons" style={iconStyles}>
          home
        </FontIcon>
        <FontIcon className="material-icons" style={iconStyles}>
          Help
        </FontIcon>
        <FontIcon className="material-icons">help</FontIcon> */
}

// <div>
//   <div className="container-fluid">
//     <div className="iconBg">
//       <div className="row">
//         <div className="col-lg-12" />
//         <div className="col-lg-12">
//           <span variant="raised" color="primary">
//             <a href="https://www.linkedin.com/in/won-maung-thein-9776081b/">
//               <i class="fab fa-linkedin fa-3x" />{" "}
//             </a>
//           </span>
//           <span variant="raised" color="primary">
//             <a href="https://www.facebook.com/win.maungthein?ref=bookmarks">
//               <i class="fab fa-facebook-square fa-3x" />
//             </a>
//           </span>
//           <span variant="raised" color="primary">
//             <a href="https://twitter.com/wonmaungthein">
//               <i class="fab fa-twitter-square fa-3x" />
//             </a>
//           </span>
//           <span variant="raised" color="primary">
//             <a href="https://www.instagram.com/wonmaung/">
//               <i class="fab fa-instagram fa-3x" />{" "}
//             </a>
//           </span>
//           <span variant="raised" color="primary">
//             <a href="https://www.youtube.com/channel/UCarU5daxaIxpRfrj76CTK3A?view_as=subscriber">
//               <i class="fab fa-youtube-square fa-3x" />
//             </a>
//           </span>
//         </div>
//         <div className="col-lg-12" />
//       </div>
//     </div>
//   </div>
// </div>
