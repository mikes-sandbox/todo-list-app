import React from 'react';
import { connect } from 'react-redux';

import './theme-button.styles.scss';
import { changeTheme } from '../../../redux/ui/ui.actions';

const ThemeButton = ({ changeTheme, iconPath }) => (
  <button onClick={changeTheme} data-tip="Toggle theme">
    <img src={iconPath} alt="" className='bg-img' />
  </button>
);

const mapDispatchToProps = dispatch => ({
  changeTheme: () => dispatch(changeTheme())
});

export default connect(
  null,
  mapDispatchToProps
)(ThemeButton);