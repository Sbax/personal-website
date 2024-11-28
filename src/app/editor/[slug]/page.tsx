"use client";

import { FormValues, PostEditor } from "@/components/FormComponents/PostEditor";
import { createSlug } from "@/lib/createSlug";
import { Post, loadPostData, updatePost } from "@/lib/posts";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

interface EditorProps {
  params: Promise<{ slug: Post["slug"] }>;
}

const Editor = ({ params }: EditorProps) => {
  const router = useRouter();
  const { slug } = React.use(params);

  const handleUpdate = async ({
    date,
    language,
    tags,
    title,
    content,
  }: FormValues) => {
    const newSlug = createSlug(title);

    return await updatePost({
      slug: newSlug,
      date,
      language,
      tags: tags.length ? tags.split(",").map((tag) => tag.trim()) : [],
      title,
      content,
    });
  };

  const [initialData, setInitialData] = useState<FormValues | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postData = await loadPostData(slug);

        setInitialData({
          date: postData.date,
          language: postData.language,
          tags: postData.tags.join(", "),
          title: postData.title,
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
