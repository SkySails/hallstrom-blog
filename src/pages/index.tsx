import { useGetPostsQuery } from "@API/blog/hooks";
import { PostMetadataFragment } from "@API/blog/types";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.scss";

function Post({ info }: { info: PostMetadataFragment }) {
  return (
    <Flex
      direction="column"
      w="100%"
      minH="64"
      p="4"
      borderRadius={7}
      transition="background 0.2s"
      overflow="hidden"
      cursor="pointer"
      _hover={{
        background: "#9E9E9E20",
      }}
    >
      <Box
        w="100%"
        flex={1}
        // borderRadius={4}
        // bg={info.theme?.css || "var(--accent)"}
        pos="relative"
        minH="48"
        overflow="hidden"
      >
        {info.image?.url && (
          <Image
            src={info.image.url}
            width={info.image.width || undefined}
            height={info.image.height || undefined}
            alt="Article hero"
            layout="fill"
            objectFit="cover"
          />
        )}
      </Box>
      <Box w="100%" flex={1} mt="4" pos="relative" pb="55px">
        <HStack spacing={2}>
          {info.category.map((cat) => (
            <Text
              key={cat}
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="xs"
              color="var(--bg-contrast)"
              opacity={0.3}
              p="0.2em 0.5em"
              border="1px solid currentcolor"
            >
              {cat}
            </Text>
          ))}
        </HStack>

        <Heading as="h3" size="lg" my={4}>
          {info.title}
        </Heading>
        <Text
          textOverflow="ellipsis"
          noOfLines={3}
          lineHeight="1.5em"
          opacity={0.8}
        >
          {info.description}
        </Text>
        <Flex align="center" pos="absolute" bottom="0">
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
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="xs"
              _hover={{
                textDecoration: "underline",
              }}
            >
              {info.publishedBy?.name || "Unknown Author"}
            </Text>
            <Text
              as="time"
              textTransform="uppercase"
              fontSize="xs"
              opacity="0.6"
            >
              {dayjs(info.publishedAt).format("DD MMM YYYY")} -{" "}
              {info.readingTime} min read
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

const Home: NextPage = () => {
  // const { data } = useGetPostsQuery();

  return (
    <div className={styles.container}>
      <Head>
        <title>A blog?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VStack>
          <Heading _hover={{ color: "var(--accent)" }}>
            <Link href={`/post/charts-exploration`}>
              <a>Charts exploration</a>
            </Link>
          </Heading>
          <Heading _hover={{ color: "var(--accent)" }}>
            <Link href={`/post/design`}>
              <a>Design för webb</a>
            </Link>
          </Heading>
          <Heading _hover={{ color: "var(--accent)" }}>
            <Link href={`/post/newsletter`}>
              <a>Navigraph Newsletter</a>
            </Link>
          </Heading>
          <Heading _hover={{ color: "var(--accent)" }}>
            <Link href={`/post/gripen`}>
              <a>SAAB Gripen</a>
            </Link>
          </Heading>
        </VStack>
        {/* <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={6}
          w="80vw"
          mt="10"
        >
          {data?.posts
            ? data.posts.map((post) => <Post key={post.slug} info={post} />)
            : [1, 2, 3].map((n) => <Skeleton key={n} h="96" />)}
        </Grid> */}
      </main>
    </div>
  );
};

export default Home;
