import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Arrow from "../icons/Arrow";

export default function HomeButton() {
  return (
    <Link href="/navigraph" passHref>
      <Flex
        as="a"
        tabIndex={0}
        color="var(--bg-contrast)"
        align="center"
        position="relative"
        mb="20px"
        border="2px solid var(--accent)"
        p="15px"
        borderRadius="5px"
        transition="200ms"
        opacity="0.4"
        _hover={{ color: "var(--accent)", opacity: 1 }}
        _focus={{ boxShadow: "0 0 0 4px var(--primary-color)", opacity: 1 }}
      >
        <Arrow width="30px" mr="10px" transform="rotate(180deg)" /> Tillbaka
        till startsidan
      </Flex>
    </Link>
  );
}
