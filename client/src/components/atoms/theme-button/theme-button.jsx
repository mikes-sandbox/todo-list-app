import React from "react";

import "./theme-button.scss";

const ThemeButton = ({ iconPath }) => (
  <button>
    <img src={iconPath} alt="" className="bg-img" />
  </button>
);

export default ThemeButton;
