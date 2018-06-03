import React from "react";
import "./Menu.css";
import Button from "@material-ui/core/Button";

const Menu = () => {
  return (
    <div className="menustyle">
      <ul>
        <Button variant="raised" color="primary">
          About
        </Button>
        <Button variant="raised" color="primary">
          Contact
        </Button>
        <Button variant="raised" color="primary">
          Portfolio
        </Button>
        <Button variant="raised" color="primary">
          Projects
        </Button>
      </ul>
    </div>
  );
};

export default Menu;
