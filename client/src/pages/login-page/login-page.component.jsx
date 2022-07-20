import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate, useLocation } from 'react-router';

import './login-page.component.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { BASE_API_URL } from '../../common/config';

const LoginPage = ({ currentUser }) => {
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

                <a className="google-button"
                    href={`${BASE_API_URL}/auth/google`}>
                    Continue with Google
                </a>

            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(
    mapStateToProps,
    null
)(LoginPage);