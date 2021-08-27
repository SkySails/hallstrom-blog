import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useReadingProgress } from "@makotot/ghostui";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  showTitle,
  title,
}: {
  showTitle: boolean;
  title: string;
}) {
  const { value } = useReadingProgress();

  return (
    <Grid
      as="header"
      gridArea="Header"
      className="theme-transition"
      templateColumns="1fr min(45em, calc(100% - 8em)) 1fr"
      templateRows="1fr"
      templateAreas={`"Logo Title Menu"`}
      bgColor="var(--bg-header)"
      h="5rem"
      padding="0 1.5em"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      backdropFilter="blur(20px)"
      transition="background-color 350ms ease 0s"
      _after={{
        content: "''",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: value + "%",
        height: "4px",
        background: "var(--accent)",
        transition: "width 0.1s ease",
      }}
    >
      <Flex gridArea="Logo" align="center" pr="1em">
        <Link href="/">
          <a>
            <Text fontWeight="bold" fontSize="4xl">
              HB
            </Text>
          </a>
        </Link>
      </Flex>
      <Flex gridArea="Title" align="center" justify="space-between">
        <Heading
          size="lg"
          opacity={showTitle ? 1 : 0}
          transition="opacity 250ms ease"
          fontFamily="metropolis"
        >
          {title}
        </Heading>
      </Flex>
      <Flex align="center">
        <ThemeToggle />
      </Flex>

      {/* <ThemeToggle /> */}
      {/* <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        id="gradient"
        className="transition-svg"
        preserveAspectRatio="none"
        viewBox="0 0 600 70"
        position="absolute"
        h="7vh"
        w="100%"
        left={0}
        right={0}
        bottom="2px"
        transform="translateY(100%)"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopOpacity="1" stopColor="var(--bg)" />
            <stop offset="0.9" stopOpacity="0.1" stopColor="var(--bg)" />
            <stop offset="0.95" stopOpacity="0.05" stopColor="var(--bg)" />
            <stop offset="1" stopOpacity="0" stopColor="var(--bg)" />
          </linearGradient>
        </defs>
        <rect
          id="Rectangle_213"
          data-name="Rectangle 213"
          width="600"
          height="70"
          fill="url(#linear-gradient)"
        />
      </Box> */}
    </Grid>
  );
}
