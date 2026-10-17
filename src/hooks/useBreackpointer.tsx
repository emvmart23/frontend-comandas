"use client";

import { useSyncExternalStore } from "react";

export function useBreakpoint(query: string): boolean {
  return useSyncExternalStore(
    // Suscribirse a cambios
    (callback) => {
      const mediaQuery = window.matchMedia(query);

      mediaQuery.addEventListener("change", callback);

      return () => {
        mediaQuery.removeEventListener("change", callback);
      };
    },

    // Valor en cliente
    () => window.matchMedia(query).matches,

    // Valor inicial en servidor
    () => false
  );
}