import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "var(--bg-muted)",
        color: "var(--bg-contrast)",
        transition: "color 350ms ease 0s, background 350ms ease 0s",
      },
    },
  },
  initialColorMode: "light",
  useSystemColorMode: true,
});

export default theme;
