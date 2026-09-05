"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useModal } from "@/components/ModalProvider";
import { CONTACT_EMAIL } from "@/lib/site";

export function ContactModal() {
  const { open, closeModal } = useModal();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [brief, setBrief] = useState("");
  const [copyState, setCopyState] = useState("");

  const emailDraft = useMemo(() => {
    if (!brief) return "";
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "DatabyPassion project brief",
    )}&body=${encodeURIComponent(brief)}`;
  }, [brief]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      document.body.style.overflow = "";
      returnFocusRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setBrief("");
      setCopyState("");
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal, open]);

  function buildBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) || "").trim();

    const formatted = [
      "DatabyPassion project brief",
      "",
      `Contact: ${value("name")}`,
      `Work email: ${value("email")}`,
      `Organisation: ${value("company")}`,
      `Role: ${value("role") || "Not provided"}`,
      "",
      `Business problem`,
      value("problem"),
      "",
      `Desired change`,
      value("outcome"),
      "",
      `Relevant practice: ${value("practice")}`,
      `Current stage: ${value("stage")}`,
      `Data sensitivity: ${value("sensitivity")}`,
      `Timing: ${value("timing")}`,
      "",
      "This brief was created locally in the browser and has not been submitted.",
    ].join("\n");

    setBrief(formatted);
    setCopyState("");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyState("Brief copied to clipboard.");
    } catch {
      setCopyState("Copy was blocked. Select the preview text and copy it manually.");
    }
  }

  return (
    <div
      className={`modal-overlay${open ? " active" : ""}`}
      aria-hidden={!open}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div
        ref={panelRef}
        className="modal-panel brief-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-brief-title"
        aria-describedby="project-brief-description"
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={closeModal}
          aria-label="Close project brief"
        >
          ✕
        </button>
        <div className="modal-title" id="project-brief-title">
          Create a project brief
        </div>
        <p className="modal-sub" id="project-brief-description">
          Shape the essentials, then copy the brief or open it in your email app. Nothing is sent
          from this website.
        </p>

        <form className="brief-form" onSubmit={buildBrief}>
          <fieldset>
            <legend>Your context</legend>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="brief-name">
                  Name *
                </label>
                <input
                  className="form-input"
                  id="brief-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="brief-email">
                  Work email *
                </label>
                <input
                  className="form-input"
                  id="brief-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="brief-company">
                  Organisation *
                </label>
                <input
                  className="form-input"
                  id="brief-company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Organisation"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="brief-role">
                  Role
                </label>
                <input
                  className="form-input"
                  id="brief-role"
                  name="role"
                  autoComplete="organization-title"
                  placeholder="Product, data, technology…"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>The work</legend>
            <div className="form-group">
              <label className="form-label" htmlFor="brief-problem">
                What business problem needs to change? *
              </label>
              <textarea
                className="form-input form-textarea"
                id="brief-problem"
                name="problem"
                rows={4}
                placeholder="Describe the decision, workflow or customer problem—not only the technology."
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="brief-outcome">
                What would be different if this worked? *
              </label>
              <textarea
                className="form-input form-textarea"
                id="brief-outcome"
                name="outcome"
                rows={3}
                placeholder="A useful operating change or product outcome."
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="brief-practice">
                  Relevant practice *
                </label>
                <select
                  className="form-select"
                  id="brief-practice"
                  name="practice"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Data platforms</option>
                  <option>Analytics &amp; decisions</option>
                  <option>AI &amp; automation</option>
                  <option>Digital products</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="brief-stage">
                  Current stage *
                </label>
                <select
                  className="form-select"
                  id="brief-stage"
                  name="stage"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Exploring the problem</option>
                  <option>Shaping the first scope</option>
                  <option>Ready to build</option>
                  <option>Improving a live product</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="brief-sensitivity">
                  Data sensitivity *
                </label>
                <select
                  className="form-select"
                  id="brief-sensitivity"
                  name="sensitivity"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>No client data expected</option>
                  <option>Business-confidential data</option>
                  <option>Personal or regulated data</option>
                  <option>To be assessed</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="brief-timing">
                  Timing *
                </label>
                <select
                  className="form-select"
                  id="brief-timing"
                  name="timing"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Near-term priority</option>
                  <option>This quarter</option>
                  <option>Later / planning</option>
                  <option>Open</option>
                </select>
              </div>
            </div>
          </fieldset>

          <button className="form-submit" type="submit">
            Build my brief
          </button>
        </form>

        {brief && (
          <section className="brief-preview" aria-labelledby="brief-preview-title">
            <div className="brief-preview__header">
              <div>
                <span className="scope-badge scope-badge--current">Built locally</span>
                <h2 id="brief-preview-title">Your project brief</h2>
              </div>
              <span>No network submission</span>
            </div>
            <pre tabIndex={0}>{brief}</pre>
            <div className="brief-actions">
              <button type="button" className="btn-ghost" onClick={copyBrief}>
                Copy brief
              </button>
              <a className="btn-primary" href={emailDraft}>
                Open email draft
              </a>
            </div>
            <p className="brief-destination">
              The email draft is addressed to <strong>{CONTACT_EMAIL}</strong>. Review it in your
              email app and send it yourself.
            </p>
            <p className="brief-copy-status" aria-live="polite">
              {copyState}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
