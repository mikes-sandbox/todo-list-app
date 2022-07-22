import React from "react";

import "./theme-button.styles.scss";

const ThemeButton = ({ iconPath }) => (
  <button className="theme-button">
    <img src={iconPath} alt="" />
  </button>
);

export default ThemeButton;
