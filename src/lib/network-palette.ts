export type NetworkPaletteId = "parthenon" | "ember" | "mono" | "galaxy";

export const NETWORK_PALETTE_KEY = "dbp_network_palette";
export const NETWORK_PALETTE_EVENT = "dbp-network-palette";
export const DEFAULT_NETWORK_PALETTE: NetworkPaletteId = "mono";

export const NETWORK_PALETTES = {
  parthenon: {
    a: "#67e8f9",
    b: "#1a9afa",
    c: "#5bb8ff",
    rgbA: "103,232,249",
    rgbB: "26,154,250",
  },
  ember: {
    a: "#fb923c",
    b: "#ea580c",
    c: "#f97316",
    rgbA: "251,146,60",
    rgbB: "234,88,12",
  },
  mono: {
    a: "#f4f4f5",
    b: "#a1a1aa",
    c: "#d4d4d8",
    rgbA: "244,244,245",
    rgbB: "161,161,170",
  },
  galaxy: {
    a: "#e8f1ff",
    b: "#9eb6ff",
    c: "#f0d7ff",
    rgbA: "232,241,255",
    rgbB: "158,182,255",
  },
} as const;

export const NETWORK_PALETTE_META: { id: NetworkPaletteId; label: string }[] = [
  { id: "parthenon", label: "Parthenon" },
  { id: "ember", label: "Ember" },
  { id: "mono", label: "Mono" },
  { id: "galaxy", label: "Galaxy" },
];

export function isNetworkPaletteId(value: string): value is NetworkPaletteId {
  return value === "parthenon" || value === "ember" || value === "mono" || value === "galaxy";
}

export function readNetworkPalette(): NetworkPaletteId {
  try {
    const stored = window.sessionStorage.getItem(NETWORK_PALETTE_KEY);
    if (stored && isNetworkPaletteId(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_NETWORK_PALETTE;
}

export function writeNetworkPalette(id: NetworkPaletteId) {
  try {
    window.sessionStorage.setItem(NETWORK_PALETTE_KEY, id);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(NETWORK_PALETTE_EVENT, { detail: id }));
}
