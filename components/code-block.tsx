"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative", className)}>
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
      <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 font-mono text-[13px] leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}
