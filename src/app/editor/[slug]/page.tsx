"use client";

import { PostEditor } from "@/components/FormComponents/PostEditor";
import { createSlug } from "@/lib/createSlug";
import { loadPostData, updatePost } from "@/lib/posts";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

interface EditorProps {
  params: Promise<{ slug: string }>;
}

const Editor = ({ params }: EditorProps) => {
  const router = useRouter();
  const { slug } = React.use(params);

  const handleUpdate = async ({
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

    return await updatePost({
      slug,
      title,
      tags: tags.split(",").map((tag) => tag.trim()),
      date,
      content,
    });
  };

  const [initialData, setInitialData] = useState<{
    title: string;
    tags: string;
    date: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postData = await loadPostData(slug);

        setInitialData({
          title: postData.title,
          tags: postData.tags.join(", "),
          date: postData.date,
          content: postData.content,
        });
      } catch {
        router.push("/editor");
      }
    };

    fetchPostData();
  }, [slug, router]);

  if (!initialData) return <p>Caricamento...</p>;

  return (
    <PostEditor initialData={initialData} onSubmit={handleUpdate} isEditing />
  );
};

export default Editor;
