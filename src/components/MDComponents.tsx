/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import {
  Box,
  chakra,
  Heading as ChakraHeading,
  Code,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";
// import { CopyBlock, dracula } from "react-code-blocks";
import { formatTitleURLFriendly } from "../lib/formatUtil";
import Table from "./Table";

import Link from "next/link";

interface GenericProps {
  children: React.ReactNode;
}

interface ImageProps extends GenericProps {
  src?: string;
  alt?: string;
}

interface HeadingProps extends GenericProps {
  level: number;
}

interface CodeProps extends GenericProps {
  inline?: boolean;
  className?: string;
}

interface LinkProps extends GenericProps {
  href?: string;
}

interface ListProps extends GenericProps {
  depth: number;
  ordered: boolean;
  className?: string;
}

interface ListItemProps extends GenericProps {
  checked: boolean | null;
  index: number;
  ordered: boolean;
}

interface FullBleedProps {
  src: string;
  maxWidth?: string;
  alt?: string;
  preserveRatio?: boolean;
  position: string;
}

interface AlertProps {
  level: "error" | "warning" | "info";
  title: string;
  content: string;
}

const Heading = ({ level, children }: HeadingProps): JSX.Element => {
  const headingText = (children as string[])[0];
  const headingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const urlFriendlyTitle = formatTitleURLFriendly(headingText);
  return (
    <ChakraHeading
      role="group"
      id={urlFriendlyTitle}
      as={headingTag}
      textStyle={headingTag}
      fontSize={4.5 / level + "em"}
      my={level * 0.2 + "em"}
      css={{ scrollMarginTop: "4em" }}
    >
      {children}
      {level > 1 && (
        <chakra.a
          aria-label="anchor"
          fontWeight="normal"
          fontSize="30px"
          outline="none"
          color="var(--accent)"
          _focus={{ opacity: 1, boxShadow: "outline" }}
          opacity={0}
          _groupHover={{ opacity: 1, transition: "opacity 100ms ease 0s" }}
          ml="7px"
          href={`#${urlFriendlyTitle}`}
          transition="opacity 400ms ease 0s"
        >
          #
        </chakra.a>
      )}
    </ChakraHeading>
  );
};

const FancyLink = (props: LinkProps) => (
  <chakra.a
    color="var(--accent)"
    boxShadow="0 0 0 0 var(--accent)"
    transition="box-shadow 100ms ease 0s"
    _hover={{
      boxShadow: "0 2px 0 0 var(--accent)",
      transition: "box-shadow 100ms ease 0s",
    }}
  >
    {props.children}
  </chakra.a>
);

const MarkdownComponents = {
  h1: (props: HeadingProps): JSX.Element => <Heading {...props} />,
  h2: (props: HeadingProps): JSX.Element => <Heading {...props} />,
  h3: (props: HeadingProps): JSX.Element => <Heading {...props} />,
  h4: (props: HeadingProps): JSX.Element => <Heading {...props} />,
  hr: (): JSX.Element => <chakra.hr />,
  strong: (props: GenericProps): JSX.Element => (
    <Box as="strong" fontWeight="semibold">
      {props.children}
    </Box>
  ),
  code: (props: CodeProps): JSX.Element => {
    // const lang = /language-(\w+)/.exec(props.className || "")?.[1];
    return <Code wordBreak="break-word">{props.children}</Code>;
    // return props.inline ? (
    //   <Code wordBreak="break-word">{props.children}</Code>
    // ) : (
    //   <CopyBlock
    //     language={lang}
    //     text={props.children}
    //     theme={dracula}
    //     wrapLines={true}
    //     showLineNumbers
    //     codeBlock
    //   />
    // );
  },
  br: (): JSX.Element => <Box height="24px" />,
  a: (props: LinkProps): JSX.Element =>
    props.href?.charAt(0) === "#" ? (
      <FancyLink {...props} />
    ) : (
      <Link href={props.href as string} passHref>
        <chakra.a
          color="var(--accent)"
          boxShadow="0 0 0 0 var(--accent)"
          transition="box-shadow 400ms ease 0s"
          _hover={{
            boxShadow: "0 2px 0 0 var(--accent)",
            transition: "box-shadow 100ms ease 0s",
          }}
        >
          {props.children}
        </chakra.a>
      </Link>
    ),
  p: (props: GenericProps): JSX.Element => (
    <chakra.p my="0.6em">{props.children}</chakra.p>
  ),
  ul: (props: ListProps): JSX.Element => (
    <chakra.ul pl="30px" mb="16px">
      {props.children}
    </chakra.ul>
  ),
  ol: (props: ListProps): JSX.Element => (
    <chakra.ol pl="30px" mb="16px">
      {props.children}
    </chakra.ol>
  ),

  li: (props: ListItemProps): JSX.Element => (
    <chakra.li my="9px">{props.children}</chakra.li>
  ),
  table: Table,
  img: (props: ImageProps) => (
    <chakra.img my={5} w="100%" src={props.src} alt={props.alt} />
  ),
  "full-bleed": (props: FullBleedProps) => {
    return (
      <GridItem
        className="full-bleed"
        w="calc(100% + 2 * 1.7em)"
        ml="-1.7em"
        my={8}
        gridColumn="1/4"
      >
        <chakra.img
          maxH="50vh"
          borderRadius={5}
          display="block" // TODO: Remove
          w="100%"
          maxW={props.maxWidth || "100%"}
          objectFit={props.preserveRatio ? "contain" : "cover"}
          objectPosition={props.position || "center"}
          m="auto"
          src={props.src}
          alt={props.alt}
        />
      </GridItem>
    );
  },
  alert: (props: AlertProps) => (
    <Alert status={props.level} transition="background 350ms ease 0s" my="4">
      <AlertIcon />
      <Box>
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {props.content && <AlertDescription>{props.content}</AlertDescription>}
      </Box>
    </Alert>
  ),
};

export default MarkdownComponents;
