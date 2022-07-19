import React from "react";

import "./user-button.styles.scss";
import offlineIcon from "../../../assets/icon-cloud-1.svg";

const UserButton = () => (
    <button>
        <img src={offlineIcon} alt="" className="bg-img" />
    </button>
);

export default UserButton;
