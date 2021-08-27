import React, { ReactNode } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Scrollspy from "react-scrollspy";
export type OutlineItem = {
  title: string;
  id: string;
  depth: number;
};

interface OutlineProps {
  outlineList: OutlineItem[];
  showHeadline?: boolean;
}

interface OutlineButtonProps extends OutlineItem {
  className?: string;
}

// const OutlineButton = (props: OutlineButtonProps) => (
//   <Flex
//     align="center"
//     as="a"
//     href={`#${props.id}`}
//     w="16px"
//     h="16px"
//     bg={props.className || "#ffffff30"}
//     borderRadius="8px"
//     pos="relative"
//     _hover={{
//       "&:after": {
//         display: "flex",
//       },
//     }}
//     _after={{
//       display: "none",
//       content: `'${props.title}'`,
//       position: "absolute",
//       left: "200%",
//       color: "white",
//       background: "#ffffff10",
//       padding: "4px 7px",
//       borderRadius: "7px",
//       transition: "padding 0.2s",
//       width: "150px",
//     }}
//   />
// );
const OutlineButton = (props: OutlineButtonProps) => (
  <a href={`#${props.id}`}>
    <Text
      fontFamily="heading"
      fontWeight={props.depth === 2 ? "bold" : "400"}
      className={props.depth === 2 ? "" : "outline-sub"}
      fontSize="14px"
      cursor="pointer"
      color={props.className}
      marginLeft={`${Math.max(0, props.depth - 2) * 8}px`}
      lineHeight="1.2em"
      marginBottom="0.5em"
      marginRight="16px"
    >
      {props.title}
    </Text>
  </a>
);

const OutlineList = ({ children }: { children?: ReactNode }) => (
  <Stack spacing="10px" overflowX="visible">
    {children}
  </Stack>
);

export default function Outline({
  outlineList,
  showHeadline = false,
}: OutlineProps): JSX.Element {
  if (!outlineList || outlineList.length < 1) {
    return <></>;
  }
  return (
    <Box overflowX="visible">
      <Scrollspy
        key={outlineList[0].title}
        items={outlineList.map((h) => h.id)}
        currentClassName="var(--accent)"
        componentTag={OutlineList}
        offset={250}
      >
        {outlineList.map(
          (item) =>
            (item.depth !== 1 || showHeadline) && (
              <OutlineButton
                key={item.title}
                id={item.id}
                title={item.title}
                depth={item.depth}
              />
            )
        )}
      </Scrollspy>
    </Box>
  );
}
