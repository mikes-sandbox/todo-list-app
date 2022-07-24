import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './App.scss';
import RootPageContainer from './pages/root-page/root-page.container';

import { checkUserSession } from './redux/user/user.actions';
import { selectActiveTheme } from './redux/ui/ui.selectors';

const App = ({ checkUserSession, theme }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    document.body.className = theme.className;
  }, [theme]);

  return (
    <div className="App">
      <RootPageContainer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  theme: selectActiveTheme,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
