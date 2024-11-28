"use client";

import { FormValues, PostEditor } from "@/components/FormComponents/PostEditor";
import { createSlug } from "@/lib/createSlug";
import { createPost } from "@/lib/posts";

const Editor = () => {
  const handleCreate = async ({
    date,
    language,
    tags,
    title,
    content,
    summary,
  }: FormValues) => {
    const slug = createSlug(title);

    return await createPost({
      slug,
      date,
      language,
      tags: tags.length ? tags.split(",") : [],
      title,
      content,
      summary,
    });
  };

  return <PostEditor onSubmit={handleCreate} />;
};

export default Editor;
