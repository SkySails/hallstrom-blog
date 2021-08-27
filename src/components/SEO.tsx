/* eslint-disable camelcase */
import { NextSeo } from "next-seo";
import React from "react";
import { MatterData } from "src/lib/markdownUtil";
import { SITE_TITLE } from "../constants";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  cover?: string;
  article: Partial<MatterData>;
}

export default function SEO({
  title,
  description,
  url,
  article,
  cover,
}: SEOProps): JSX.Element {
  return (
    <NextSeo
      {...{ title, description, canonical: article.canonical }}
      titleTemplate={`%s | ${SITE_TITLE}`}
      defaultTitle={SITE_TITLE}
      openGraph={{
        url,
        ...{ title, description },
        type: article?.type || "article",
        article: {
          ...article,
          authors: ["Team Navigraph"],
        },
        images: cover
          ? [
              { url: cover },
              // {
              //   url: "https://developers.navigraph.com/images/ngdp-og.jpg",
              //   width: 1200,
              //   height: 630,
              //   alt: "<Navigraph Developer Portal />",
              // },
            ]
          : undefined,
        site_name: SITE_TITLE,
      }}
      twitter={{
        handle: "@navigraph", // Should be twitter handle of author
        site: "@navigraph",
        cardType: "summary_large_image",
      }}
    />
  );
}
