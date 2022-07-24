
// Retrieve last known theme from localStorage and add to body classList.
// Note: persisted store values are stringified
export const initialiseTheme = () => {
    try {
        const uiState = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).ui);
        const themes = uiState.themes;
        const activeThemeIndex = uiState.activeThemeIndex;
        document.body.classList.add(themes[activeThemeIndex].className);
    } catch (err) {
        console.log("Could not load persisted theme.");
    }
};