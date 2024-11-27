"use client";

import { PostEditor } from "@/components/FormComponents/PostEditor";
import { createSlug } from "@/lib/createSlug";
import { createPost } from "@/lib/posts";

const Editor = () => {
  const handleCreate = async ({
    title,
    tags,
    date,
    content,
  }: {
    title: string;
    tags: string;
    date: string;
    content: string;
  }) => {
    const slug = createSlug(title);

    return await createPost({
      slug,
      title,
      tags: tags.split(","),
      date,
      content,
    });
  };

  return <PostEditor onSubmit={handleCreate} />;
};

export default Editor;
