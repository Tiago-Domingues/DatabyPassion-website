"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type RoleDetail = {
  code: string;
  title: string;
  sell?: string;
  when: string;
  owns: string;
  body?: readonly string[];
};

export function RoleDetailPanel({
  role,
  onClose,
}: {
  role: RoleDetail;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeRef.current?.focus());

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      returnFocusRef.current?.focus();
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted, onClose, role.code]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="modal-overlay active role-panel-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="modal-panel role-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="role-panel-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close role details"
        >
          ×
        </button>
        <div className="role-panel__layout">
          <div className="role-panel__photo" aria-hidden="true">
            <span className="role-panel__photo-mark">{role.code}</span>
          </div>
          <div className="role-panel__copy">
            <span className="mono-label">Named profile agreed per engagement</span>
            <h2 id="role-panel-title">{role.title}</h2>
            {role.sell ? <p className="role-panel__sell">{role.sell}</p> : null}
            <p className="role-panel__when">{role.when}</p>
            <p className="role-panel__owns">{role.owns}</p>
            {role.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
