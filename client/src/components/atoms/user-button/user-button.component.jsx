import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./user-button.styles.scss";
import offlineIcon from "../../../assets/icon-cloud-1.svg";
import { selectCurrentUser } from '../../../redux/user/user.selectors';

const UserButton = ({ currentUser }) => (
    <button className="user-button">
        <img src={currentUser ? currentUser.photoURL : offlineIcon} alt="" referrerPolicy="no-referrer" />
    </button>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(
    mapStateToProps,
    null
)(UserButton);
