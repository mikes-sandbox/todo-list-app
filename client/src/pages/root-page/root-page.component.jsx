import React from "react";

import TodoPage from "../todo-page/todo-page.component";
import ThemeButton from "../../components/atoms/theme-button/theme-button";

import "./root-page.styles.scss";
import lightThemeIcon from "../../assets/icon-sun.svg";
import lightThemeSmallImg from "../../assets/bg-mobile-light.jpg";
import lightThemeLargeImg from "../../assets/bg-desktop-light.jpg";

const RootPage = () => {
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
                    <h1 className="header__title">Todo</h1>
                    <ThemeButton iconPath={lightThemeIcon} />
                </div>

                <TodoPage />
            </main>
        </div>
    );
};
export default RootPage;
