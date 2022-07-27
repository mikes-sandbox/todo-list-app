import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate, useLocation } from 'react-router';

import './login-page.component.scss';
import { BASE_API_URL } from '../../common/config';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as GoogleIcon } from '../../assets/Google-Logo.svg';

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

                <div className="content">
                    <p>Welcome! This is a full-stack solution to the Todo list challenge on Frontend Mentor, with some added functionality. </p>
                    <p>You can fork the code on GitHub below, or sign in below to play around.</p>

                    <a className="google-button"
                        href={`${BASE_API_URL}/auth/google`} >
                        <GoogleIcon className="google-button--icon" />
                        Log in with Google
                    </a>

                    <h3 className="features">Features</h3>
                    <ul className="features-list">
                        <li className="features-list--item">Add new todos to your list</li>
                        <li className="features-list--item">Mark todos as complete</li>
                        <li className="features-list--item">Delete todos from your list</li>
                        <li className="features-list--item">Filter by all/active/complete todos</li>
                        <li className="features-list--item">Clear all completed todos</li>
                        <li className="features-list--item">Dark & light modes</li>
                        <li className="features-list--item">Offline support</li>
                    </ul>
                </div>

                <div className="footer">
                    <a href="https://github.com/mikes-sandbox/todo-list-app">Fork on GitHub</a>
                    <a href="mailto:im.michael.pepper@gmail.com">Get in Contact</a>
                </div>
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