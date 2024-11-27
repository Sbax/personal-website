"use client";

import { InputField, LoadingButton } from "@/components/FormComponents";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Popup } from "@/components/Popup";
import { formatDateForInput } from "@/lib/formatDateForInput";
import { useState } from "react";

interface PostEditorProps {
  initialData?: {
    title: string;
    tags: string;
    date: string;
    content: string;
  };
  onSubmit: (data: {
    title: string;
    tags: string;
    date: string;
    content: string;
  }) => Promise<{ success: boolean; error?: string }>;
  isEditing?: boolean;
}

export const PostEditor = ({
  initialData,
  onSubmit,
  isEditing = false,
}: PostEditorProps) => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    date: formatDateForInput(new Date()),
    content: "",
    ...initialData,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const isValid = formData.title && formData.date && formData.content;

  const updateFormData = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!isValid) return;

    setIsLoading(true);
    setPopup(null);

    const { success, error } = await onSubmit(formData);

    setIsLoading(false);

    if (success) {
      setPopup({
        message: isEditing
          ? "Post aggiornato correttamente"
          : "Post creato correttamente",
        type: "success",
      });
      return;
    }

    setPopup({
      message: error || "Errore nella gestione del post",
      type: "error",
    });
  };

  return (
    <section className="space-y-4">
      <InputField
        label="Titolo"
        value={formData.title}
        onChange={(value) => updateFormData("title", value)}
        placeholder="Scrivi qui..."
      />

      <InputField
        label="Tag"
        value={formData.tags}
        onChange={(value) => updateFormData("tags", value)}
        placeholder="Inserisci i tag separati da virgola"
      />

      <InputField
        label="Data"
        type="date"
        value={formData.date}
        onChange={(value) => updateFormData("date", value)}
      />

      <div className="form-control w-full">
        <span className="label-text">Contenuto</span>
        <MarkdownEditor
          value={formData.content}
          onChange={(content) => updateFormData("content", content)}
        />
      </div>

      <LoadingButton
        isLoading={isLoading}
        onClick={handleSave}
        disabled={!isValid}
      >
        {isEditing ? "Update Post" : "Create Post"}
      </LoadingButton>

      <Popup
        isOpen={!!popup}
        message={popup?.message || ""}
        type={popup?.type}
        onClose={() => setPopup(null)}
      />
    </section>
  );
};
