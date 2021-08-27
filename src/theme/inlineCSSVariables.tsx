import { COLORS, CustomTheme } from "./main.style";

export function setColorsByTheme() {
  const colors: unknown = "🌈";

  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem(
      "color-mode"
    ) as "light" | "dark" | null;
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (typeof persistedColorPreference === "string") {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return "light";
  }

  const colorMode = getInitialColorMode();

  // Define CSS variables using theme (less efficient)
  //#region
  // const css = Object.entries(colors as CustomTheme).reduce<{
  //   dark: Record<string, string>;
  //   light: Record<string, string>;
  // }>(
  //   (css, [name, colorByTheme]) => {
  //     const cssVarName = `--${name}`;

  //     css.dark[cssVarName] = colorByTheme.dark;
  //     css.light[cssVarName] = colorByTheme.light;

  //     return css;
  //   },
  //   { dark: {}, light: {} }
  // );

  // const style = document.createElement("style");
  // style.innerHTML = `
  // body.chakra-ui-light {
  //   ${Object.entries(css.light)
  //     .map(([name, value]) => `${name}: ${value};`)
  //     .join("")}
  //   }
  // body.chakra-ui-dark {
  //   ${Object.entries(css.dark)
  //     .map(([name, value]) => `${name}: ${value};`)
  //     .join("")}
  //   }
  // body { transition: color 350ms ease 0s, background 350ms ease 0s; }
  // `;

  // document.head.appendChild(style);
  //#endregion

  document.documentElement.className = colorMode;
  window.initialColorMode = colorMode;

  document.querySelector("#colorscript")?.remove();
}

export function MagicScriptTag() {
  const boundFn = String(setColorsByTheme).replace(
    '"🌈"',
    JSON.stringify(COLORS)
  );

  let calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return (
    <script
      id="colorscript"
      dangerouslySetInnerHTML={{ __html: calledFunction }}
    />
  );
}

// if user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (light mode)
export function FallbackStyles() {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ""
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
}
