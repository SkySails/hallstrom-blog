export const COLORS: CustomTheme = {
  bg: {
    light: "#FBFBFB",
    dark: "#0f151c",
  },
  "bg-muted": {
    light: "#DFEBF6",
    dark: "#182635",
  },
  "bg-header": {
    light: "#FBFBFBd1",
    dark: "#0f151cd1",
  },
  "bg-contrast": {
    light: "#000",
    dark: "#fff",
  },
  accent: {
    light: "#20A8FF",
    dark: "#20A8FF",
  },
};

export interface CustomTheme {
  [key: string]: {
    light: string;
    dark: string;
  };
}
