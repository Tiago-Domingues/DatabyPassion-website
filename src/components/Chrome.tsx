"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { useModal } from "@/components/ModalProvider";
import {
  NETWORK_PALETTE_EVENT,
  NETWORK_PALETTE_META,
  type NetworkPaletteId,
  readNetworkPalette,
  writeNetworkPalette,
} from "@/lib/network-palette";

const TICKER = [
  "AI-first thinking",
  "Data-driven business",
  "Turning data into value",
  "From insight to action",
  "Enterprise-grade expertise",
  "Built for ambitious SMEs",
  "Strategy → Build → Scale",
];

const NAV = [
  { href: "/#platform", label: "Services" },
  { href: "/#results", label: "Impact" },
  { href: "/about", label: "About" },
];

function PaletteDots() {
  const [active, setActive] = useState<NetworkPaletteId>("parthenon");

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
          <a
            href="#"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Start a project
          </a>
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
        <a
          href="#"
          className="nav-cta"
          onClick={(e) => {
            e.preventDefault();
            setMenu(false);
            openModal();
          }}
        >
          Start a project
        </a>
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
            <p className="footer-brand-desc">
              Boutique data analytics, engineering, ML and AI — projects for clients, delivered by a
              senior founder-led studio.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/databypassion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a href="mailto:tiagopaixaodomingues@gmail.com" aria-label="Email">
                ✉
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link href="/analytics">Analytics</Link>
            <Link href="/engineering">Data Engineering</Link>
            <Link href="/ai">ML &amp; AI</Link>
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
            <a href="mailto:tiagopaixaodomingues@gmail.com">tiagopaixaodomingues@gmail.com</a>
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
            <span className="status-dot" /> All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
