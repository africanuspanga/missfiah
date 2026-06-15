"use client";

import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  iconSize?: number;
}

export function ImagePlaceholder({
  label = "Image coming soon",
  className = "",
  iconSize = 40,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400 ${className}`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/10 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm">
          <ImageIcon size={iconSize} className="text-brand" strokeWidth={1.5} />
        </div>
        <span className="max-w-[140px] text-sm font-medium leading-snug text-stone-500">
          {label}
        </span>
      </div>
    </div>
  );
}
