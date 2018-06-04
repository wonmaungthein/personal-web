import React from "react";
import Button from "@material-ui/core/Button";
import Alarm from "@material-ui/icons/Alarm";
import { Icon } from "@material-ui/core";
// import { Button } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* <FontIcon className="material-icons" style={iconStyles}>
          home
        </FontIcon>
        <FontIcon className="material-icons" style={iconStyles}>
          Help
        </FontIcon>
        <FontIcon className="material-icons">help</FontIcon> */}
        <span variant="raised" color="primary">
          <i class="fab fa-facebook-square fa-3x" />
        </span>
        <span variant="raised" color="primary">
          <i class="fab fa-linkedin fa-3x" />{" "}
        </span>
        <span variant="raised" color="primary">
          <i class="fab fa-twitter-square fa-3x" />
        </span>
        <span variant="raised" color="primary">
          <i class="fab fa-instagram fa-3x" />{" "}
        </span>
        <span variant="raised" color="primary">
          <i class="fab fa-youtube-square fa-3x" />{" "}
        </span>
      </div>
    );
  }
}

export default Footer;
