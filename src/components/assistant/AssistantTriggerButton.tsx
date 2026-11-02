import React from "react";
import { Headset, ArrowRight } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

interface AssistantTriggerButtonProps {
  label?: string;
  topicId?: string;
  treatmentSlug?: string;
  variant?: "primary" | "dark" | "outline";
  className?: string;
}

export function AssistantTriggerButton({
  label = "Asistan ile Randevu ve Bilgi Al",
  variant = "primary",
  className = "",
}: AssistantTriggerButtonProps) {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/20 hover:from-red-700 hover:to-rose-800",
    dark: "bg-slate-900 text-white hover:bg-red-600 shadow-sm",
    outline:
      "border border-rose-200 bg-rose-50/80 text-red-700 hover:bg-red-600 hover:text-white hover:border-red-600",
  }[variant];

  return (
    <a
      href={CLINIC_INFO.assistantUrl}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-extrabold transition-all ${variantClasses} ${className}`}
    >
      <Headset className="w-4 h-4 shrink-0" />
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 shrink-0" />
    </a>
  );
}
