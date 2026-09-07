export type NetworkPaletteId =
  | "redshift"
  | "ionosphere"
  | "galaxy"
  | "station"
  | "solar";

export const NETWORK_PALETTE_KEY = "dbp_network_palette";
export const NETWORK_PALETTE_EVENT = "dbp-network-palette";
export const DEFAULT_NETWORK_PALETTE: NetworkPaletteId = "redshift";

/** Photo-backed themes: still image + calmer network overlay */
export const PHOTO_NETWORK_PALETTES: NetworkPaletteId[] = ["galaxy", "station", "solar"];

export function isPhotoNetworkPalette(id: string): boolean {
  return PHOTO_NETWORK_PALETTES.includes(id as NetworkPaletteId);
}

export const NETWORK_PALETTES = {
  redshift: {
    a: "#fff7f7",
    b: "#e11d48",
    c: "#fb7185",
    rgbA: "225,29,72",
    rgbB: "225,29,72",
    star: "#f8fafc",
  },
  ionosphere: {
    a: "#67e8f9",
    b: "#1a9afa",
    c: "#5bb8ff",
    rgbA: "103,232,249",
    rgbB: "26,154,250",
  },
  galaxy: {
    a: "#e8f1ff",
    b: "#9eb6ff",
    c: "#f0d7ff",
    rgbA: "232,241,255",
    rgbB: "158,182,255",
  },
  station: {
    a: "#d7e6f5",
    b: "#8fb4d8",
    c: "#c9d4de",
    rgbA: "215,230,245",
    rgbB: "143,180,216",
  },
  solar: {
    a: "#ffe2a8",
    b: "#f0a34a",
    c: "#9ec7ff",
    rgbA: "255,226,168",
    rgbB: "240,163,74",
  },
} as const;

export const NETWORK_PALETTE_META: { id: NetworkPaletteId; label: string }[] = [
  { id: "redshift", label: "Redshift" },
  { id: "ionosphere", label: "Ionosphere" },
  { id: "galaxy", label: "Deep Field" },
  { id: "station", label: "Cupola" },
  { id: "solar", label: "Perihelion" },
];

const PALETTE_ALIASES: Record<string, NetworkPaletteId> = {
  ember: "redshift",
  mono: "redshift",
  parthenon: "ionosphere",
};

export function isNetworkPaletteId(value: string): value is NetworkPaletteId {
  return (
    value === "redshift" ||
    value === "ionosphere" ||
    value === "galaxy" ||
    value === "station" ||
    value === "solar"
  );
}

export function resolveNetworkPaletteId(value: string): NetworkPaletteId | null {
  if (isNetworkPaletteId(value)) return value;
  return PALETTE_ALIASES[value] ?? null;
}

export function readNetworkPalette(): NetworkPaletteId {
  try {
    const stored = window.sessionStorage.getItem(NETWORK_PALETTE_KEY);
    if (stored) {
      const resolved = resolveNetworkPaletteId(stored);
      if (resolved) {
        if (resolved !== stored) window.sessionStorage.setItem(NETWORK_PALETTE_KEY, resolved);
        return resolved;
      }
    }
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
