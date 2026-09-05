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
            <span className="trust-pledge-n" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
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
