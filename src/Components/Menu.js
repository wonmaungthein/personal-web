import React from "react";
import "./Menu.css";

const menustyle = {
  // background: " #0392cf",
  // display: "grid"
};

const Menu = () => {
  return (
    <div className="menustyle" style={menustyle}>
      <ul>
        <button>About</button>
        <button>Contact</button>
        <button>Portfolio</button>
        <button>Projects</button>
      </ul>
    </div>
  );
};

export default Menu;
