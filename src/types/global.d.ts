declare global {
  interface Window {
    initialColorMode: "light" | "dark";
  }
  namespace JSX {
    interface IntrinsicElements {
      "full-bleed": {
        src: string;
        maxWidth: string;
        position: string;
        alt: string;
      };
      alert: {
        level: "error" | "warning" | "info";
        title: string;
        content: string;
      };
    }
  }
}

export {};
