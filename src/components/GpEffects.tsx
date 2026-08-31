"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function GpEffects() {
  const pathname = usePathname();
  useEffect(() => {
    let cancelled = false;
    let cleanup: () => void = () => {};
    const t = window.setTimeout(() => {
      void import("@/lib/gp-effects").then(({ initGpEffects }) => {
        if (cancelled) return;
        cleanup = initGpEffects() || (() => {});
      });
    }, 50);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      cleanup();
    };
  }, [pathname]);
  return null;
}
