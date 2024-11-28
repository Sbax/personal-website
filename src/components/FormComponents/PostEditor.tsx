"use client";

import {
  InputField,
  LoadingButton,
  SelectField,
  TextAreaField,
} from "@/components/FormComponents";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { usePopup } from "@/context/PopupContext";
import { formatDateForInput } from "@/lib/formatDateForInput";
import {
  PostResponse,
  PostResponseError,
  PostResponseSuccess,
} from "@/lib/posts";
import { redirect } from "next/navigation";
import { useState } from "react";

export interface FormValues {
  date: string;
  language: "italian" | "english";
  tags: string;
  title: string;
  content: string;
  summary: string;
}

interface PostEditorProps {
  initialData?: FormValues;
  onSubmit: (data: FormValues) => Promise<PostResponse>;
  isEditing?: boolean;
}

export const PostEditor = ({
  initialData,
  onSubmit,
  isEditing = false,
}: PostEditorProps) => {
  const [formData, setFormData] = useState<FormValues>({
    date: formatDateForInput(new Date()),
    language: "italian",
    tags: "",
    title: "",
    content: "",
    summary: "",
    ...initialData,
  });

  const [isLoading, setIsLoading] = useState(false);
  const { showPopup } = usePopup();

  const isValid = formData.date && formData.title && formData.content;

  const updateFormData = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const updateLanguage = (language: "italian" | "english") => {
    setFormData((prev) => ({ ...prev, language }));
  };

  const handleSave = async () => {
    if (!isValid) return;

    setIsLoading(true);

    const { success, ...response } = await onSubmit(formData);

    setIsLoading(false);

    if (success === true) {
      const { post } = response as PostResponseSuccess;
      showPopup({
        message: isEditing
          ? "Post successfully updated"
          : "Post successfully created",
        type: "success",
      });

      redirect(`/editor/${post.slug}`);
    }

    if (success === false) {
      const { error } = response as PostResponseError;

      showPopup({
        message: error || "Error creating post :(",
        type: "error",
      });
    }
  };

  return (
    <section className="space-y-4">
      <InputField
        label="Date"
        type="date"
        value={formData.date}
        onChange={(value) => updateFormData("date", value)}
      />

      <SelectField
        label="Language"
        value={formData.language}
        onChange={(value) => updateLanguage(value as "italian" | "english")}
        options={[
          { value: "italian", label: "Italian" },
          { value: "english", label: "English" },
        ]}
      />

      <InputField
        label="Tags"
        value={formData.tags}
        onChange={(value) => updateFormData("tags", value)}
        placeholder="Comma separated tags"
      />

      <InputField
        label="Title"
        value={formData.title}
        onChange={(value) => updateFormData("title", value)}
        placeholder="Type here..."
      />

      <div className="form-control w-full">
        <span className="label-text">Content</span>
        <MarkdownEditor
          value={formData.content}
          onChange={(content) => updateFormData("content", content)}
        />
      </div>

      <TextAreaField
        label="Summary"
        value={formData.summary}
        onChange={(value) => updateFormData("summary", value)}
        placeholder="Type here..."
      />

      <LoadingButton
        isLoading={isLoading}
        onClick={handleSave}
        disabled={!isValid}
      >
        {isEditing ? "Update Post" : "Create Post"}
      </LoadingButton>
    </section>
  );
};
