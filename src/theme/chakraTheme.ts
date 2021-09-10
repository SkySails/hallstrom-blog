import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        // backgroundColor: "var(--bg)",
        // color: "var(--bg-contrast)",
        transition: "unset",
      },
    },
  },
  initialColorMode: "light",
  useSystemColorMode: true,
});

export default theme;
