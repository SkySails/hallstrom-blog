import React from "react";

interface IColorSchemeContext {
  colorScheme: "dark" | "light";
  setColorScheme: (val: "dark" | "light") => void;
  toggleColorScheme: () => void;
}

export const ColorSchemeContext = React.createContext<IColorSchemeContext>(
  undefined!
);

export const ColorSchemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [colorScheme, changeColorScheme] = React.useState<"dark" | "light">(
    "dark"
  );

  React.useEffect(() => {
    changeColorScheme(document.documentElement.className as "dark" | "light"); // initialColorMode is defined before page load

    // To be able to react to changes to the prefers-color-scheme
    // media query, a listener is added to this property
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    try {
      // Try the new way of adding a listener (Supported in Modern, updated browsers)
      mql.addEventListener("change", (e) =>
        setColorScheme(e.matches ? "dark" : "light")
      );
    } catch (e1) {
      try {
        // Try the old way of adding a listener (For safari and older browsers)
        mql.addListener((e) => setColorScheme(e.matches ? "dark" : "light"));
      } catch (e2) {
        console.error(e2);
      }
    }
  }, []);

  const setColorScheme = (newValue: "dark" | "light") => {
    // 1. Update React color-mode state
    changeColorScheme(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Set new value
    document.documentElement.className = newValue;
  };

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, setColorScheme, toggleColorScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;

export function useColorScheme(): IColorSchemeContext {
  return React.useContext(ColorSchemeContext);
}
