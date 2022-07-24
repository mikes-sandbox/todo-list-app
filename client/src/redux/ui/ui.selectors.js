import { createSelector } from 'reselect';

const selectUI = state => state.ui;

export const selectAllThemes = createSelector(
    [selectUI],
    ui => ui.themes
);

export const selectActiveThemeIndex = createSelector(
    [selectUI],
    ui => ui.activeThemeIndex
);

export const selectActiveTheme = createSelector(
    [selectAllThemes, selectActiveThemeIndex],
    (themes, activeIndex) => themes[activeIndex]
);