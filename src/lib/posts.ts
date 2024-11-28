"use server";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

export interface Post {
  slug: string;
  date: string;
  language: "italian" | "english";
  tags: string[];
  title: string;
  content: string;
  summary: string;
  creationDate?: string;
  lastModified?: string;
}

export interface PostResponseSuccess {
  success: true;
  post: Post;
}

export interface PostResponseError {
  success: false;
  error: string;
}

export type PostResponse = PostResponseSuccess | PostResponseError;

const POSTS_PATH = "src/content/posts" as const;

const getPostFilePath = (slug: string): string =>
  path.join(process.cwd(), POSTS_PATH, `${slug}.md`);

const loadMarkdownFile = (filePath: string) => {
  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  return matter(markdownWithMeta);
};

export const loadPostData = async (slug: string): Promise<Post> => {
  const filePath = getPostFilePath(slug);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const { data, content } = loadMarkdownFile(filePath);

  return {
    slug,
    date: data.date || "",
    language: data.language || "italian",
    tags: Array.isArray(data.tags) ? data.tags : [],
    title: data.title || "",
    content: content || "",
    summary: data.summary || "",
    creationDate: data.creationDate || undefined,
    lastModified: data.lastModified || undefined,
  };
};

export const getPosts = async (): Promise<Post[]> => {
  const directoryPath = path.join(process.cwd(), POSTS_PATH);
  const files = fs.readdirSync(directoryPath);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".md", "");
      return loadPostData(slug);
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

const writePostToFile = (post: Post, overwrite: boolean): PostResponse => {
  const {
    slug,
    date,
    language = "italian",
    tags,
    title,
    content,
    summary,
    creationDate = new Date().toISOString(),
  } = post;

  const filePath = getPostFilePath(slug);

  const lastModified = new Date().toISOString();
  const uniqueTags = tags ? Array.from(new Set(tags)) : [];

  const metadata = [
    `title: "${title}"`,
    `date: "${date}"`,
    `language: "${language}"`,
    uniqueTags.length > 0
      ? `tags: [${uniqueTags.map((tag) => `"${tag}"`).join(", ")}]`
      : null,
    `summary: "${summary}"`,
    `creationDate: "${creationDate}"`,
    `lastModified: "${lastModified}"`,
  ]
    .filter(Boolean)
    .join("\n");

  const markdownContent = `---\n${metadata}\n---\n\n${content}`;

  try {
    if (!overwrite && fs.existsSync(filePath)) {
      throw new Error(`Post "${slug}" already exists`);
    }

    fs.writeFileSync(filePath, markdownContent, "utf8");
    return {
      success: true,
      post: {
        slug,
        date,
        language,
        tags,
        title,
        content,
        summary,
        creationDate,
        lastModified,
      },
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

export const createPost = async (post: Post): Promise<PostResponse> =>
  writePostToFile({ ...post, creationDate: new Date().toISOString() }, false);

export const updatePost = async (post: Post): Promise<PostResponse> =>
  writePostToFile(post, true);
