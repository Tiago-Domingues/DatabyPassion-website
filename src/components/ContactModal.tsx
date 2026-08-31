"use client";

import { useEffect, useState } from "react";
import { useModal } from "@/components/ModalProvider";

const personalDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "live.com",
  "msn.com",
  "me.com",
];

export function ContactModal() {
  const { open, closeModal } = useModal();
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [submitLabel, setSubmitLabel] = useState("Submit");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      setEmailError("");
      setSubmitLabel("Submit");
      setBusy(false);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const first = String(fd.get("first") || "").trim();
    const last = String(fd.get("last") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const title = String(fd.get("title") || "").trim();
    const industry = String(fd.get("industry") || "");
    const func = String(fd.get("function") || "");
    if (!first || !last || !email || !company || !title || !industry || !func) {
      setSubmitLabel("Please fill all fields");
      window.setTimeout(() => setSubmitLabel("Submit"), 2000);
      return;
    }
    const domain = (email.split("@")[1] || "").toLowerCase();
    if (personalDomains.includes(domain)) {
      setEmailError("Please use your business email");
      return;
    }
    if (!email.includes("@") || !domain.includes(".")) {
      setEmailError("Please enter a valid email");
      return;
    }
    setBusy(true);
    setSubmitLabel("Sending...");
    window.setTimeout(() => {
      setSuccess(true);
      setBusy(false);
      setSubmitLabel("Submit");
      window.setTimeout(() => closeModal(), 2800);
    }, 600);
  }

  return (
    <div
      className={`modal-overlay${open ? " active" : ""}`}
      id="demoModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-panel">
        <button type="button" className="modal-close" onClick={closeModal} aria-label="Close">
          ✕
        </button>
        {success ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Thank you</h3>
            <p>We&apos;ve received your request and will be in touch shortly.</p>
          </div>
        ) : (
          <form id="demoForm" onSubmit={onSubmit}>
            <div className="modal-title">Get in touch</div>
            <p className="modal-sub">
              Tell us a bit about yourself and we&apos;ll reach out to schedule a conversation.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input className="form-input" name="first" placeholder="Jane" required />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input className="form-input" name="last" placeholder="Smith" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Business Email *</label>
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
                onChange={() => setEmailError("")}
              />
              <div className={`form-error${emailError ? " visible" : ""}`}>{emailError || "Please use your business email"}</div>
            </div>
            <div className="form-group">
              <label className="form-label">Company *</label>
              <input className="form-input" name="company" placeholder="Acme Corp" required />
            </div>
            <div className="form-group">
              <label className="form-label">Title *</label>
              <input className="form-input" name="title" placeholder="VP Growth" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Industry *</label>
                <select className="form-select" name="industry" defaultValue="">
                  <option value="">Select…</option>
                  <option>Financial Services</option>
                  <option>Public Sector</option>
                  <option>Utilities</option>
                  <option>Retail</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Function *</label>
                <select className="form-select" name="function" defaultValue="">
                  <option value="">Select…</option>
                  <option>C-Suite / Executive</option>
                  <option>Strategy</option>
                  <option>Data / Analytics</option>
                  <option>Technology</option>
                  <option>Operations</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <button className="form-submit" type="submit" disabled={busy}>
              {submitLabel}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
