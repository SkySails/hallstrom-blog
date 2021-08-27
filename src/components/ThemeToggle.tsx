import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { useColorScheme } from "src/hooks/useColorScheme";

export default function ThemeToggle() {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  if (!colorScheme) {
    return null;
  }

  return (
    <Box
      onClick={toggleColorScheme}
      id="theme-toggle"
      className={` ${colorScheme}`.trim()}
    >
      <svg
        className="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-6 -6 12 12"
      >
        <defs>
          <mask id="earth">
            <rect fill="white" x="-5" y="-5" width="10" height="10"></rect>
            <circle
              className="moon-circle"
              fill="black"
              cx="3.141592654"
              r="5"
            />
          </mask>
        </defs>
        <circle
          r="5"
          fill="currentColor"
          mask="url(#earth)"
          transform="rotate(-50.5)"
        />
      </svg>
      <div className="ray one"></div>
      <div className="ray two"></div>
      <div className="ray three"></div>
      <div className="ray four"></div>
      <div className="ray five"></div>
      <div className="ray six"></div>
      <div className="ray seven"></div>
      <div className="ray eight"></div>
    </Box>
  );
}
