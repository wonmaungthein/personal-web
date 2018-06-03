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
        <Button variant="raised" color="primary">
          Facebook{" "}
        </Button>
        <Button variant="raised" color="primary">
          LinkedIn{" "}
        </Button>{" "}
        <Button variant="raised" color="primary">
          Twitter{" "}
        </Button>
        <Button variant="raised" color="primary">
          Instagram{" "}
        </Button>
        <Button variant="raised" color="primary">
          Youtube{" "}
        </Button>
      </div>
    );
  }
}

export default Footer;
