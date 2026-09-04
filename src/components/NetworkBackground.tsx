"use client";

import { useEffect, useState } from "react";
import {
  NETWORK_PALETTE_EVENT,
  type NetworkPaletteId,
  isPhotoNetworkPalette,
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

  const photo = isPhotoNetworkPalette(palette);
  const bgClass = [
    "network-bg",
    photo ? "is-photo" : "",
    palette === "galaxy" ? "is-galaxy" : "",
    palette === "station" ? "is-station" : "",
    palette === "solar" ? "is-solar" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={bgClass} aria-hidden="true">
      {/* NASA/ESA public media stills — credit in public/bg/README.md only */}
      <div className="network-photo-still network-galaxy-still" data-still="galaxy" />
      <div className="network-photo-still network-station-still" data-still="station" />
      <div className="network-photo-still network-solar-still" data-still="solar" />
      <canvas id="networkCanvas" />
    </div>
  );
}
