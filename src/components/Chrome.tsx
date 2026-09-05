"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { useModal } from "@/components/ModalProvider";
import { SITE_IDENTITY } from "@/content/identity";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";
import {
  DEFAULT_NETWORK_PALETTE,
  NETWORK_PALETTE_EVENT,
  NETWORK_PALETTE_META,
  type NetworkPaletteId,
  readNetworkPalette,
  writeNetworkPalette,
} from "@/lib/network-palette";

const TICKER = [
  "Boutique technology consultancy",
  "Founder-led. Collective-powered.",
  "Senior accountability",
  "Problem-shaped teams",
  "Digital, data and AI products",
  "From focused product to portfolio",
];

const NAV = [
  { href: "/#platform", label: "The Studio" },
  { href: "/about", label: "The Collective" },
  { href: "/security", label: "Trust" },
];

function PaletteDots() {
  const [active, setActive] = useState<NetworkPaletteId>(DEFAULT_NETWORK_PALETTE);

  useEffect(() => {
    setActive(readNetworkPalette());
    function onChange(e: Event) {
      const id = (e as CustomEvent<NetworkPaletteId>).detail;
      if (id) setActive(id);
    }
    window.addEventListener(NETWORK_PALETTE_EVENT, onChange);
    return () => window.removeEventListener(NETWORK_PALETTE_EVENT, onChange);
  }, []);

  return (
    <div className="network-swatches" role="radiogroup" aria-label="Network color">
      {NETWORK_PALETTE_META.map((p) => (
        <button
          key={p.id}
          type="button"
          role="radio"
          className="network-swatch"
          data-id={p.id}
          aria-label={p.label}
          aria-checked={active === p.id}
          title={p.label}
          onClick={() => {
            setActive(p.id);
            writeNetworkPalette(p.id);
          }}
        />
      ))}
    </div>
  );
}

export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((t, i) => (
          <div className="ticker-item" key={`${t}-${i}`}>
            <span className="dot" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Nav() {
  const { openModal } = useModal();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="nav" id="nav">
        <Link href="/" className="nav-logo" aria-label="DatabyPassion home">
          <Wordmark />
        </Link>
        <div className="nav-links">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <button type="button" className="lang-switch" aria-label="Language">
            <span>EN</span>
          </button>
          <PaletteDots />
          <button
            type="button"
            className="nav-cta"
            onClick={openModal}
          >
            Create a project brief
          </button>
        </div>
        <button type="button" className="nav-menu" onClick={() => setMenu((v) => !v)} aria-label="Menu">
          ☰
        </button>
      </nav>
      <div className={`mobile-nav${menu ? " open" : ""}`}>
        {NAV.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenu(false)}>
            {l.label}
          </Link>
        ))}
        <button type="button" className="lang-switch">
          <span>EN</span>
        </button>
        <PaletteDots />
        <button
          type="button"
          className="nav-cta"
          onClick={() => {
            setMenu(false);
            openModal();
          }}
        >
          Create a project brief
        </button>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <Wordmark />
            </div>
            <p className="footer-brand-desc">{SITE_IDENTITY.shortDescription}</p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/databypassion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a href={CONTACT_MAILTO} aria-label="Email">
                ✉
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link href="/engineering">Data platforms</Link>
            <Link href="/analytics">Analytics &amp; decisions</Link>
            <Link href="/ai">AI &amp; automation</Link>
            <Link href="/products">Digital products</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/security">Security &amp; Trust</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
            <a
              href="https://www.linkedin.com/company/databypassion"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 DatabyPassion. All rights reserved.</p>
          <span className="footer-status">
            <span className="status-dot" /> Founder-led · engagement-specific teams
          </span>
        </div>
      </div>
    </footer>
  );
}
