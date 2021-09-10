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
import { NAVIGRAPH_POSTS } from "src/constants";
import styles from "../../styles/Home.module.scss";

function Post({
  info,
}: {
  info: {
    title: string;
    slug: string;
    tags: string[] | null;
    date: string;
    excerpt: string;
    author: string;
    authorImage: string;
    readingTime: number;
  };
}) {
  return (
    <Link href={`/navigraph/post/${info.slug}`} passHref>
      <Flex
        as="a"
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
        <Box w="100%" flex={1} mt="4" pos="relative" pb="55px">
          <Heading as="h3" size="lg" my={4}>
            {info.title}
          </Heading>
          <Text
            textOverflow="ellipsis"
            noOfLines={3}
            lineHeight="1.5em"
            opacity={0.8}
          >
            {info.excerpt}
          </Text>
          <Flex align="center" pos="absolute" bottom="0">
            <Box borderRadius="50%" overflow="hidden" w="35px" h="35px">
              <Image
                src={
                  info.authorImage ||
                  "https://lh3.googleusercontent.com/a-/AOh14GhD2YAeAZxhtWIiPCeSEvmdIlUrHC0uI0xSkY87ug=s96-c"
                }
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
                {info.author || "Unknown Author"}
              </Text>
              <Text
                as="time"
                textTransform="uppercase"
                fontSize="xs"
                opacity="0.6"
              >
                {dayjs(info.date).format("DD MMM YYYY")} - {info.readingTime}{" "}
                min read
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
}

const Home: NextPage = () => {
  // const { data } = useGetPostsQuery();

  const posts = NAVIGRAPH_POSTS;

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Hallstrom Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={6}
          w="80vw"
          mt="10"
        >
          {posts.map((post) => (
            <Post key={post.slug} info={post} />
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Home;
