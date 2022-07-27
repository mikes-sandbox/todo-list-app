import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./user-button.styles.scss";
import offlineIcon from "../../../assets/icon-cloud-1.svg";
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { signOutStart } from "../../../redux/user/user.actions";

const UserButton = ({ currentUser, signOutStart }) => (
    <button className="user-button"
        onClick={() => signOutStart()}
        data-tip={
            currentUser ?
                `Logged in as: ${currentUser.name}. Click to logout.` :
                "Not logged in..."
        }>
        <img src={currentUser ? currentUser.photoURL : offlineIcon} alt="" referrerPolicy="no-referrer" />
    </button>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserButton);
