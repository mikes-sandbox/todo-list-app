import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { useNavigate, useLocation } from 'react-router';
import './login-page.component.scss';

import { googleSignInStart } from '../../redux/user/user.actions';

const LoginPage = ({ currentUser, googleSignInStart }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (currentUser)
            location.state ? navigate(location.state.from) : navigate('/');
    }, [currentUser, location.state, navigate]);

    return (
        <div className="login-page">

            <div className="login-card">
                <h2 className="heading">Sign In</h2>

                <button className="google-button"
                    onClick={googleSignInStart}>
                    Continue with Google
                </button>
            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);