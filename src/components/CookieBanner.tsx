"use client";

import { useEffect, useState } from "react";

const KEY = "dbp_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function continueWithEssentials() {
    try {
      window.localStorage.setItem(KEY, "essential");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookies">
      <h3>Cookies and privacy</h3>
      <p>
        This website does not load analytics. We store a preference on your device so this notice
        does not return.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-accept" onClick={continueWithEssentials}>
          Continue
        </button>
      </div>
    </div>
  );
}
