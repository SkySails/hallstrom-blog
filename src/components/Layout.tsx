import { Grid } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useRef } from "react";
import { SITE_TITLE } from "src/constants";
import useOnScreen from "src/hooks/useOnScreen";
import { MarkdownData } from "src/lib/markdownUtil";
import Header from "./Header";
// import Outline from "./Outline";
import PostIntro from "./PostIntro";

export const CustomHead = (props: { pageTitle: string }): JSX.Element => (
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="Navigraph Developer Portal" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <title>{`${props.pageTitle} | ${SITE_TITLE}`}</title>
    <meta name="og:title" content={`${props.pageTitle} | ${SITE_TITLE}`} />
  </Head>
);

const Layout = ({
  title,
  meta,
  children,
  outline,
}: MarkdownData & { children?: ReactNode }): JSX.Element => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const onScreen = useOnScreen(headingRef, "-50px");

  return (
    <>
      <Grid
        templateColumns="1fr"
        templateRows="5em 1fr"
        templateAreas={`"Header" "Content"`}
        minH="100vh"
        w="100%"
        overflowX="hidden"
        padding="0 1.5em"
      >
        <Header showTitle={!onScreen} title={title} />
        <Grid
          as="main"
          gridArea="Content"
          templateColumns="1fr min(45em, 100%) 1fr"
          fontFamily="Inter"
          pb="3rem"
          pos="relative"
          css={{
            "& > *:not(.full-bleed):not(.post-intro)": {
              gridColumn: 2,
            },
          }}
        >
          <PostIntro
            title={title}
            meta={meta}
            headingRef={headingRef}
            banner
            centered
          />
          {/* <Outline outlineList={outline} /> */}
          {children}
        </Grid>
      </Grid>
    </>
  );
};
export default Layout;
