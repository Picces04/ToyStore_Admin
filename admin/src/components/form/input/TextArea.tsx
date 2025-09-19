"use client";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  className?: string;
  placeholder?: string;
}

export default function TextArea({
  value = "",
  onChange,
  disabled = false,
  error = false,
  hint,
  className = "",
  placeholder = "Enter your message",
}: TextareaProps) {
  const editorRef = useRef<any>(null);

  return (
    <div className={`relative ${className}`}>
      <Editor
        apiKey="rb8401ud5yvnk1uai2vxr55oe39ajvh1fbxrfpczzxs3ypic"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={value}
        onEditorChange={(content) => {
          if (onChange) onChange(content);
        }}
        init={{
          height: 300,
          menubar: false,
          placeholder, // TinyMCE có hỗ trợ placeholder
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "image media link | removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          readOnly: disabled,
          file_picker_types: 'image',
          images_upload_url: '/api/upload',
          automatic_uploads: true,
        }}
      />

      {hint && (
        <p
          className={`mt-2 text-sm ${
            error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
}