import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.scss";
import theme from "../theme/chakraTheme";

interface CustomAppProps extends AppProps {
  Component: {
    Layout?: ({ children }: { children: React.ReactNode }) => JSX.Element;
  } & AppProps["Component"];
}

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckslxmkbo0prm01y210xw1hdj/master",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: CustomAppProps) {
  const LayoutComponent = Component.Layout || React.Fragment;
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme} resetCSS>
        <LayoutComponent
          {...(Component.Layout ? pageProps : { children: pageProps.children })}
        >
          <Component {...pageProps} />
        </LayoutComponent>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
