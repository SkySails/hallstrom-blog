import {
  getAllMarkdownIds,
  getMarkdownData,
  MarkdownData,
} from "../../lib/markdownUtil";
import { GetStaticProps, GetStaticPaths } from "next";
import Markdown from "../../components/Markdown";
import SEO from "../../components/SEO";
import Layout from "src/components/Layout";

const MarkdownPage = ({
  content,
  outline,
  title,
  url,
  meta: { description, publishedTime, modifiedTime, section, tags, cover },
}: MarkdownData): JSX.Element => (
  <>
    <SEO
      title={title}
      description={description}
      url={url}
      cover={cover}
      article={{
        publishedTime,
        modifiedTime,
        section,
        tags,
      }}
    />
    <Markdown source={content} />
  </>
);

MarkdownPage.Layout = Layout;

export default MarkdownPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllMarkdownIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const subPath = (params?.slug as string[]).join("/"); // Convert array slugs to strings ( ["charts", "Introduction" ] -> "charts/introduction" )
  const markdownData = getMarkdownData(subPath);

  return {
    props: {
      ...markdownData,
    },
  };
};
