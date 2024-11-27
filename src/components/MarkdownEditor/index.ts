import dynamic from "next/dynamic";

export * from "./MarkdownEditor";

export const MarkdownEditor = dynamic(
  () =>
    import("@/components/MarkdownEditor").then(
      ({ MarkdownEditorClient }) => MarkdownEditorClient
    ),
  {
    ssr: false,
  }
);
