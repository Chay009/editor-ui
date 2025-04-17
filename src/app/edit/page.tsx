"use client";

import Editor from "@/features/editor";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Add dark class to html element for editor page
    document.documentElement.classList.add('dark');

    // Cleanup: remove dark class when leaving editor page
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return <Editor />;
}
