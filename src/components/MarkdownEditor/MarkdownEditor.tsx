"use client";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  MDXEditor,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  toolbarPlugin,
  type MDXEditorProps,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import "./MarkdownEditor.style.css";

type MarkdownEditorProps = {
  value?: string;
} & Omit<
  MDXEditorProps,
  "className" | "contentEditableClassName" | "markdown" | "plugins"
>;

const plugins = [
  toolbarPlugin({
    toolbarContents: () => (
      <>
        <UndoRedo />
        <BoldItalicUnderlineToggles />
        <CreateLink />
        <BlockTypeSelect />
      </>
    ),
  }),
  listsPlugin(),
  quotePlugin(),
  headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
  linkPlugin(),
  linkDialogPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      js: "JavaScript",
      css: "CSS",
      txt: "Plain Text",
      tsx: "TypeScript",
      "": "Unspecified",
    },
  }),
  markdownShortcutPlugin(),
];

export const MarkdownEditorClient = ({ ...props }: MarkdownEditorProps) => {
  return (
    <MDXEditor
      contentEditableClassName="prose max-w-full"
      markdown={props.value || ""}
      plugins={plugins}
      {...props}
    />
  );
};
