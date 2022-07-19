import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import RootPageContainer from './pages/root-page/root-page.container';

import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession }) => {

  useEffect(() => {
    checkUserSession();
    document.body.className = "light-theme";
  }, [checkUserSession]);

  return (
    <div className="App">
      <RootPageContainer />
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
