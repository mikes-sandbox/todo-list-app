import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import UserButton from "../../components/atoms/user-button/user-button.component";
import ThemeButton from "../../components/atoms/theme-button/theme-button.component";
import ErrorBoundary from '../../components/atoms/error-boundary/error-boundary.component';
import Spinner from "../../components/atoms/spinner/spinner.component";
import RequireAuth from '../../components/atoms/require-auth/require-auth.component';

import "./root-page.styles.scss";
import lightThemeIcon from "../../assets/icon-sun.svg";
import lightThemeSmallImg from "../../assets/bg-mobile-light.jpg";
import lightThemeLargeImg from "../../assets/bg-desktop-light.jpg";

const TodoPage = lazy(() => import("../todo-page/todo-page.component"));
const LoginPage = lazy(() => import("../login-page/login-page.component"));

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
                    <h1 className="header__title">
                        Todo
                    </h1>

                    <UserButton
                        iconPath={lightThemeIcon}
                    />
                    <ThemeButton iconPath={lightThemeIcon} />
                </div>

                <ErrorBoundary>
                    <Router>
                        <Suspense fallback={<Spinner />}>
                            <Routes>

                                <Route exact path='/' element={
                                    <RequireAuth>
                                        <TodoPage />
                                    </RequireAuth>
                                } />

                                <Route path='/login' element={<LoginPage />} />

                            </Routes>
                        </Suspense>
                    </Router>
                </ErrorBoundary>
            </main>
        </div>
    );
};


export default RootPage;
