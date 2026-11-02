"use client";

import React, { createContext, useContext } from "react";
import { Headset } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

interface AssistantContextType {
  assistantUrl: string;
  openAssistant: (options?: { topicId?: string; treatmentSlug?: string }) => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(
  undefined
);

export function useAssistant() {
  const ctx = useContext(AssistantContext);
  if (!ctx) {
    throw new Error("useAssistant must be used within AssistantProvider");
  }
  return ctx;
}

export function AssistantProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const openAssistant = () => {
    window.location.href = CLINIC_INFO.assistantUrl;
  };

  return (
    <AssistantContext.Provider
      value={{
        assistantUrl: CLINIC_INFO.assistantUrl,
        openAssistant,
      }}
    >
      {children}

      {/* Floating Bottom-Right Direct Link to User's External Assistant System */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40">
        <a
          href={CLINIC_INFO.assistantUrl}
          aria-label="Asistan ile Randevu ve Bilgi Al"
          className="group flex items-center gap-2.5 sm:gap-3 rounded-full bg-red-700 px-4 py-3 sm:px-5 sm:py-3.5 text-white shadow-xl shadow-red-900/25 hover:bg-red-800 transition-all duration-200 border border-white/20 min-h-[48px]"
        >
          <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-red-700 shadow-2xs shrink-0">
            <Headset className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600 border border-white"></span>
            </span>
          </span>
          <div className="text-left pr-1">
            <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-wider text-rose-100 leading-none mb-0.5">
              Dijital Asistan
            </span>
            <span className="block text-xs sm:text-sm font-bold leading-tight">
              Asistan ile Randevu & Bilgi Al
            </span>
          </div>
        </a>
      </div>
    </AssistantContext.Provider>
  );
}
