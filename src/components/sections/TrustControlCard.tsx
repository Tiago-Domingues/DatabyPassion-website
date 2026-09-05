import { TRUST_SCOPE_LABELS, type TrustControl } from "@/content/trust";

export function TrustControlCard({
  control,
  compact = false,
}: {
  control: TrustControl;
  compact?: boolean;
}) {
  return (
    <article className={`trust-control-card${compact ? " trust-control-card--compact" : ""}`}>
      <div className="trust-control-card__meta">
        <span className={`scope-badge scope-badge--${control.scope}`}>
          {TRUST_SCOPE_LABELS[control.scope]}
        </span>
        {!compact && <span className="mono-label">{control.category}</span>}
      </div>
      <h3>{control.title}</h3>
      <p>{control.body}</p>
    </article>
  );
}
