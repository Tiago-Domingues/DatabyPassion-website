"use client";

import { useEffect, useState } from "react";
import {
  NETWORK_PALETTE_EVENT,
  type NetworkPaletteId,
  readNetworkPalette,
} from "@/lib/network-palette";

export function NetworkBackground() {
  const [palette, setPalette] = useState<NetworkPaletteId>("mono");

  useEffect(() => {
    setPalette(readNetworkPalette());
    function onChange(e: Event) {
      const id = (e as CustomEvent<NetworkPaletteId>).detail;
      if (id) setPalette(id);
    }
    window.addEventListener(NETWORK_PALETTE_EVENT, onChange);
    return () => window.removeEventListener(NETWORK_PALETTE_EVENT, onChange);
  }, []);

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
    <div className={`network-bg${palette === "galaxy" ? " is-galaxy" : ""}`} aria-hidden="true">
      {/* Hubble Ultra Deep Field (heic0406a) — NASA/ESA public media; credit in code only */}
      <div className="network-galaxy-still" />
      <canvas id="networkCanvas" />
    </div>
  );
}
