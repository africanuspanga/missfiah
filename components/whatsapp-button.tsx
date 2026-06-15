"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/data";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "floating";
}

export function WhatsAppButton({
  message,
  className = "",
  children,
  variant = "primary",
}: WhatsAppButtonProps) {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Hello ${BUSINESS.name}, I would like to know more about your products.`);

  const href = `${BUSINESS.whatsappLink}?text=${encodedMessage}`;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#25D366] text-white px-6 py-3 shadow-lg shadow-[#25D366]/25 hover:bg-[#128C7E] hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5",
    outline:
      "border-2 border-[#25D366] text-[#25D366] px-6 py-3 hover:bg-[#25D366] hover:text-white hover:-translate-y-0.5",
    floating:
      "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:bg-[#128C7E]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex shrink-0 items-center justify-center">
        {variant === "floating" ? (
          <Image
            src={BUSINESS.whatsappLogo}
            alt="WhatsApp"
            width={28}
            height={28}
            className="object-contain"
          />
        ) : (
          <Image
            src={BUSINESS.whatsappLogo}
            alt="WhatsApp"
            width={22}
            height={22}
            className="object-contain"
          />
        )}
      </span>
      {children}
    </a>
  );
}
