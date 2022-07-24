import React from 'react';
import { connect } from 'react-redux';

import { changeTheme } from '../../../redux/ui/ui.actions';

import './theme-button.styles.scss';

const ThemeButton = ({ changeTheme, iconPath }) => (
  <button onClick={changeTheme}>
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