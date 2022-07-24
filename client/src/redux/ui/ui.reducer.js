import UIActionTypes from "./ui.types";

import darkThemeLargeImg from '../../assets/bg-desktop-dark.jpg';
import darkThemeSmallImg from '../../assets/bg-mobile-dark.jpg'
import darkThemeIcon from '../../assets/icon-moon.svg';

import lightThemeLargeImg from '../../assets/bg-desktop-light.jpg';
import lightThemeSmallImg from '../../assets/bg-mobile-light.jpg'
import lightThemeIcon from '../../assets/icon-sun.svg';


export const UI_THEMES = [
    {
        className: 'light-theme',
        desktopPath: lightThemeLargeImg,
        mobilePath: lightThemeSmallImg,
        iconPath: lightThemeIcon
    },
    {
        className: 'dark-theme',
        desktopPath: darkThemeLargeImg,
        mobilePath: darkThemeSmallImg,
        iconPath: darkThemeIcon
    },
]

const INITIAL_STATE = {
    themes: UI_THEMES,
    activeThemeIndex: 1
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UIActionTypes.CHANGE_THEME:
            return {
                ...state,
                activeThemeIndex: (state.activeThemeIndex + 1) % state.themes.length
            };

        default:
            return state;
    }
};

export default uiReducer;