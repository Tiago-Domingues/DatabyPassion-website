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

  function save(value: string) {
    try {
      window.localStorage.setItem(KEY, value);
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
        We remember this choice on your device. Continue with essentials only, or accept cookies
        if you prefer.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={() => save("essential")}>
          Essentials only
        </button>
        <button type="button" className="cookie-accept" onClick={() => save("all")}>
          Accept
        </button>
      </div>
    </div>
  );
}
