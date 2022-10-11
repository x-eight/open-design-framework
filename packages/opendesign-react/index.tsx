import { useLayoutEffect, useRef, useState } from "react";
import {
  createCanvasRenderer,
  createEditor,
  designFromUrl,
  Editor,
} from "@avocode/opendesign-universal";

// NOTE: I did not spend too much time thinking about react API, yet
// but most of it would be done by using universal functions anyway.

export function useEditor(
  options?:
    | {
        url?: string;
        onLoad?: (editor: Editor) => void;
      }
    | string
) {
  const [editor] = useState(() => {
    const ed = createEditor({ content: designFromUrl(url) });
    setup?.(ed);
    return ed;
  });
  return editor;
}

export function EditorCanvas({ editor }: { editor: Editor }): JSX.Element {
  const canvas = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    const renderer = createCanvasRenderer(editor, canvas.current);
    return renderer.destroy;
  }, [editor]);
  return <canvas ref={canvas} />;
}
