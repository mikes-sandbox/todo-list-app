import React from "react";
import { connect } from 'react-redux';

import TodoPage from "../todo-page/todo-page.component";
import UserButton from "../../components/atoms/user-button/user-button.component";
import ThemeButton from "../../components/atoms/theme-button/theme-button.component";

import { googleSignInStart } from "../../redux/user/user.actions";

import "./root-page.styles.scss";
import lightThemeIcon from "../../assets/icon-sun.svg";
import lightThemeSmallImg from "../../assets/bg-mobile-light.jpg";
import lightThemeLargeImg from "../../assets/bg-desktop-light.jpg";

const RootPage = ({ googleSignInStart }) => {
    return (
        <div className="root-page">
            <div className="bg-img-container">
                <picture>
                    <source media="(max-width: 399px)" srcSet={lightThemeSmallImg} />
                    <img src={lightThemeLargeImg} alt="" className="bg-img active" />
                </picture>
            </div>

            <main className="main-container">
                <div className="header">
                    <h1 className="header__title"
                        onClick={() => googleSignInStart()}>
                        Todo
                    </h1>

                    <UserButton
                        iconPath={lightThemeIcon}
                    />
                    <ThemeButton iconPath={lightThemeIcon} />
                </div>

                <TodoPage />
            </main>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(
    null,
    mapDispatchToProps
)(RootPage);
