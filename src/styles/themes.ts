export const themes = {
    light: {
        background: "#E8E6E6",
        accent: "#47A8BD",
        text: "#262525",
        card: "#2B6A78",
    },
    dark: {
        background: "#464D70",
        accent: "#4942E4",
        text: "#E8E6E6",
        card: "#2F334B",
    },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
