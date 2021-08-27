import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MarkdownData } from "src/lib/markdownUtil";

interface PostIntroProps extends Partial<MarkdownData> {
  headingRef: React.RefObject<HTMLHeadingElement>;
  banner?: boolean;
  centered?: boolean;
}

export default function PostIntro({
  title,
  meta,
  headingRef,
  banner,
  centered,
}: PostIntroProps) {
  return (
    <Box
      className="post-intro"
      gridColumn="2"
      py="16"
      css={
        banner && {
          marginBottom: "3em",
          marginLeft: "-1.5em",
          width: "calc(100% + 2 * 1.5em)",
          gridColumn: "1/4",
          background: "url(/vec_dark.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background 350ms ease 0s",
        }
      }
    >
      <Flex
        align={centered ? "center" : "flex-start"}
        flexDirection="column"
        margin="0 auto"
        css={
          banner && {
            width: "min(45em, 100%)",
            paddingHorizontal: "1.5em",
          }
        }
      >
        <Text mb="4" opacity={0.5}>
          Published {dayjs(meta?.publishedTime).format("MMM DD, YYYY")}
        </Text>
        <Heading
          size="3xl"
          mb={2}
          ref={headingRef}
          fontFamily="metropolis"
          textAlign={centered ? "center" : undefined}
        >
          {title}
        </Heading>
        <Flex my="4">
          {meta?.tags && (
            <HStack>
              {meta.tags.map((tag) => (
                <Text
                  border="1px solid #96969670"
                  bg="var(--bg-muted)"
                  transition="background 350ms ease 0s"
                  borderRadius={7}
                  p="3px 7px"
                  key={tag}
                >
                  {tag}
                </Text>
              ))}
            </HStack>
          )}
        </Flex>
        <Flex
          mt="4"
          align="center"
          css={
            banner && {
              backgroundColor: "var(--bg)",
              color: "var(--bg-contrast)",
              padding: "0.7em",
              borderRadius: "10px",
              transition: "all 350ms ease 0s",
            }
          }
        >
          <Box borderRadius="50%" overflow="hidden" w="35px" h="35px">
            <Image
              src="https://lh3.googleusercontent.com/a-/AOh14GhD2YAeAZxhtWIiPCeSEvmdIlUrHC0uI0xSkY87ug=s96-c"
              alt="Profile picture"
              width="35"
              height="35"
            />
          </Box>
          <Flex direction="column" ml="2">
            <Text
              as="address"
              textTransform="uppercase"
              fontWeight="bold"
              fontStyle="normal"
              fontSize="xs"
              _hover={{
                textDecoration: "underline",
              }}
            >
              <Link href="/">{meta?.authorName || "Unknown Author"}</Link>
            </Text>
            <Text as="time" fontSize="xs" opacity="0.6">
              {/* {dayjs(meta?.publishedTime).format("DD MMM YYYY")} - {2} min read */}
              {meta?.authorRole || ""}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
