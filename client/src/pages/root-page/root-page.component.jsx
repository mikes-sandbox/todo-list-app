import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllThemes, selectActiveThemeIndex } from '../../redux/ui/ui.selectors';

import UserButton from "../../components/atoms/user-button/user-button.component";
import ThemeButton from "../../components/atoms/theme-button/theme-button.component";
import ErrorBoundary from '../../components/atoms/error-boundary/error-boundary.component';
import Spinner from "../../components/atoms/spinner/spinner.component";
import RequireAuth from '../../components/atoms/require-auth/require-auth.component';
import "./root-page.styles.scss";

const TodoPage = lazy(() => import("../todo-page/todo-page.component"));
const LoginPage = lazy(() => import("../login-page/login-page.component"));


const RootPage = ({ themes, activeThemeIndex }) => {

    const activeTheme = themes[activeThemeIndex];

    return (
        <div className="root-page">
            <div className='bg-img-container'>
                {
                    themes.map((theme, index) => (
                        <picture key={index} >
                            <source media='(max-width: 399px)' srcSet={theme.mobilePath} />
                            <img src={theme.desktopPath} alt="" className={`bg-img ${activeThemeIndex === index ? 'active' : ''}`} />
                        </picture>
                    ))
                }
            </div>

            <main className="main-container">
                <div className="header">
                    <h1 className="header__title">
                        Todo
                    </h1>

                    <UserButton />
                    <ThemeButton iconPath={activeTheme.iconPath} />
                </div>

                <ErrorBoundary>
                    <Router>
                        <Suspense fallback={<Spinner />}>
                            <Routes>

                                <Route path='/' element={
                                    <RequireAuth>
                                        <TodoPage />
                                    </RequireAuth>
                                } />

                                <Route exact path='/login' element={<LoginPage />} />

                            </Routes>
                        </Suspense>
                    </Router>
                </ErrorBoundary>
            </main>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    themes: selectAllThemes,
    activeThemeIndex: selectActiveThemeIndex
});


export default connect(mapStateToProps)(RootPage);