import type { TypicalEngagement } from "@/content/practices";

export function RepresentativeEngagement({
  engagement,
  compact = false,
}: {
  engagement: TypicalEngagement;
  compact?: boolean;
}) {
  return (
    <article
      className={`representative-engagement${compact ? " representative-engagement--compact" : ""}`}
    >
      <div className="representative-engagement__header">
        <span className="scope-badge scope-badge--example">{engagement.label}</span>
      </div>
      <h3>{engagement.title}</h3>
      {compact ? (
        <p>{engagement.situation}</p>
      ) : (
        <>
          <div className="representative-engagement__story">
            <div>
              <span className="mono-label">Situation</span>
              <p>{engagement.situation}</p>
            </div>
            <div>
              <span className="mono-label">Intervention</span>
              <p>{engagement.intervention}</p>
            </div>
          </div>
          <div className="representative-engagement__deliverables">
            <span className="mono-label">Concrete deliverables</span>
            <ul>
              {engagement.delivers.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </div>
          <div className="representative-engagement__change">
            <span className="mono-label">What changes</span>
            <p>{engagement.change}</p>
          </div>
          <div className="representative-engagement__meta">
            <div>
              <span className="mono-label">Who is in the room</span>
              <p>{engagement.who}</p>
            </div>
            <div>
              <span className="mono-label">Team that forms</span>
              <p>{engagement.team}</p>
            </div>
            <div>
              <span className="mono-label">Evidence / stop-or-expand</span>
              <p>{engagement.evidence}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
