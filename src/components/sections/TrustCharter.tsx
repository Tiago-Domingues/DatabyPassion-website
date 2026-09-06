import { TRUST_SCOPE_LABELS, type TrustControl } from "@/content/trust";

export function TrustCharter({
  controls,
  numbered = true,
}: {
  controls: TrustControl[];
  numbered?: boolean;
}) {
  return (
    <div className="trust-charter" role="list">
      {controls.map((control, index) => (
        <div className="trust-pledge" role="listitem" key={control.id}>
          {numbered ? (
            <span className="trust-pledge-index">
              <span className="trust-pledge-n" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="trust-pledge-seal" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle className="trust-seal-ring" cx="10" cy="10" r="7.2" />
                  <path
                    className="trust-seal-tick"
                    d="M6.15 10.15 L8.85 12.75 L13.85 7.35"
                  />
                </svg>
              </span>
            </span>
          ) : null}
          <div className="trust-pledge-copy">
            <span className={`scope-badge scope-badge--${control.scope}`}>
              {TRUST_SCOPE_LABELS[control.scope]}
            </span>
            <h3>{control.title}</h3>
            <p>{control.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
