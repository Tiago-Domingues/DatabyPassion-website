"use client";

import { useEffect } from "react";

export function NetworkBackground() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: () => void = () => {};
    const t = window.setTimeout(() => {
      void import("@/lib/gp-effects").then(({ initNetworkCanvas }) => {
        if (cancelled) return;
        cleanup = initNetworkCanvas() || (() => {});
      });
    }, 40);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      cleanup();
    };
  }, []);

  return (
    <div className="network-bg" aria-hidden="true">
      <canvas id="networkCanvas" />
    </div>
  );
}
