import fs, { Dirent } from "fs";
import path, { resolve } from "path";
import matter from "gray-matter";
import { OutlineItem } from "../components/Outline";
import { formatTitleURLFriendly } from "./formatUtil";

const markdownFilesDirectory = path.join(process.cwd(), "src/md-files");

export interface MarkdownId {
  params: {
    slug: string[];
  };
}

type SiteType = "basic" | "video" | "article" | "book" | "profile";

export interface MarkdownData {
  content: string;
  title: string;
  id: string;
  url: string;
  outline: OutlineItem[];
  meta: MatterData;
}

export interface MatterData {
  title: string;
  description: string;
  snippet?: string;
  section: string;
  tags?: string[];
  canonical?: string;
  publishedTime: string;
  modifiedTime: string;
  authorImage: string;
  authorName: string;
  authorRole?: string;
  cover?: string;
  type?: SiteType;
}

// Recursively parse directory and return paths relative to the given root.
export async function getFiles(dir: string): Promise<string[]> {
  const dirents: Dirent[] = await fs.promises.readdir(dir, {
    withFileTypes: true,
  });
  const files: (string | string[])[] = await Promise.all(
    dirents.map((dirent): string | string[] | Promise<string | string[]> => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory()
        ? getFiles(res)
        : res.split(markdownFilesDirectory)[1].slice(1);
    })
  );
  return files.flat();
}

export async function getAllMarkdownIds(): Promise<[MarkdownId]> {
  let fileNames = await getFiles(markdownFilesDirectory);
  fileNames = fileNames.filter(function (file) {
    return path.extname(file).toLowerCase() === ".md";
  });

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: [...fileName.replace(/\.md$/, "").split(/\/|\\/g)], // Split string on / or \\ to get an array slug ("charts\\introduction" -> ["charts", "Introduction" ] )
      },
    };
  }) as [MarkdownId];
}

export function getMarkdownData(subPath: string): MarkdownData {
  const fullPath = path.join(markdownFilesDirectory, `${subPath}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileStats = fs.statSync(fullPath);

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  const outline: OutlineItem[] = Array.from(
    content.matchAll(/^(#{1,}\s)(.*)$/gm),
    (m) => ({
      title: m[2].replace(/\*/g, ""),
      id: formatTitleURLFriendly(m[2]),
      depth: m[1].length - 1,
    })
  );

  return {
    content,
    id: subPath,
    url: "https://developers.navigraph.com/docs/" + subPath,
    title: data.title || "Untitled",
    outline,
    meta: {
      ...(data as MatterData),
      publishedTime: fileStats.birthtime.toISOString(),
      modifiedTime: fileStats.mtime.toISOString(),
    },
  };
}
