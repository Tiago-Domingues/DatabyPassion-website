"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappHref } from "@/lib/site";

const SEEN_KEY = "dbp_assistant_seen_v1";

const COPY = {
  name: "DatabyPassion AI",
  role: "Studio assistant",
  label: "AI assistant",
  openLabel: "Open the DatabyPassion AI assistant",
  close: "Close",
  greeting:
    "Hi! I'm the DatabyPassion AI assistant. I can help you get in touch about data, analytics, engineering and AI projects.",
  soon: "Coming soon",
  placeholder: "Chat is coming very soon…",
  send: "Send",
  fallbackIntro: "Need a hand right now?",
  fallbackCta: "Chat on WhatsApp",
};

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function AssistantRocket() {
  return (
    <svg className="dbp-assistant-monogram" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#111" />
      <path
        fill="#f4efe6"
        d="M32 8c6.2 9.6 8.4 18.4 8.4 27.2v5.2l7.6 8.8-6.4-1.6-3.2 7.2L32 49.2l-6.4 5.6-3.2-7.2-6.4 1.6 7.6-8.8v-5.2C23.6 34.4 25.8 25.6 32 8z"
      />
      <circle cx="32" cy="26" r="4.2" fill="#111" />
      <path fill="#f4efe6" d="M29.2 52.4 32 56.2l2.8-3.8c-.9.4-1.8.6-2.8.6s-1.9-.2-2.8-.6z" />
    </svg>
  );
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [seen, setSeen] = useState(true);
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      setSeen(window.localStorage.getItem(SEEN_KEY) === "1");
    } catch {
      setSeen(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || !typing) return;
    const t = window.setTimeout(() => setTyping(false), 900);
    return () => window.clearTimeout(t);
  }, [open, typing]);

  function close() {
    setOpen(false);
    bubbleRef.current?.focus();
  }

  function toggle() {
    if (open) {
      close();
      return;
    }
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("dbp-a11y-motion");
    setOpen(true);
    setSeen(true);
    setTyping(!reduced);
    try {
      window.localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label={COPY.close}
          tabIndex={-1}
          className="dbp-assistant-scrim"
          onClick={close}
        />
      )}
      {open && (
        <div
          role="dialog"
          aria-labelledby="dbp-assistant-title"
          className="dbp-assistant-panel"
        >
          <div className="dbp-assistant-head">
            <span className="dbp-assistant-avatar">
              <AssistantRocket />
            </span>
            <div className="dbp-assistant-id">
              <p id="dbp-assistant-title">{COPY.name}</p>
              <p>
                <span className="dbp-assistant-online" />
                {COPY.role}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={COPY.close}
              className="dbp-assistant-close"
            >
              ×
            </button>
          </div>
          <div className="dbp-assistant-body">
            {typing ? (
              <div className="dbp-assistant-typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            ) : (
              <div className="dbp-assistant-msg">
                <p>{COPY.greeting}</p>
                <p className="dbp-assistant-soon">{COPY.soon}</p>
              </div>
            )}
          </div>
          <div className="dbp-assistant-foot">
            <div className="dbp-assistant-compose">
              <input type="text" disabled placeholder={COPY.placeholder} aria-label={COPY.placeholder} />
              <button type="button" disabled aria-label={COPY.send}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 12 20 4 12 20 11 13 4 12Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="dbp-assistant-wa">
              {COPY.fallbackIntro}{" "}
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon />
                {COPY.fallbackCta}
              </a>
            </p>
          </div>
        </div>
      )}
      <div className="dbp-assistant-dock">
        <span className="dbp-assistant-tip" aria-hidden="true">
          {COPY.label}
        </span>
        <button
          ref={bubbleRef}
          type="button"
          onClick={toggle}
          aria-label={COPY.openLabel}
          aria-expanded={open}
          title={COPY.label}
          className="dbp-assistant-bubble"
        >
          <AssistantRocket />
          <span className="dbp-assistant-wa-badge" aria-hidden="true">
            <WhatsappIcon />
          </span>
          {!seen && !open && (
            <span className="dbp-assistant-dot">
              <span className="dbp-assistant-ping" />
              <span className="dbp-assistant-dot-core" />
            </span>
          )}
        </button>
      </div>
    </>
  );
}
