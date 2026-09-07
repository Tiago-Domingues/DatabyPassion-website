export function FounderVideo({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`founder-video${compact ? " founder-video--compact" : ""}`}>
      <div className="founder-video__frame founder-video__frame--still" aria-hidden="true">
        <span className="founder-video__mark">Film</span>
      </div>
      <figcaption id="founder-video-note">
        <strong>{compact ? "A note from the founder" : "Why the collective exists"}</strong>
        <p>Founder film — English, with captions — will sit here when it is ready.</p>
      </figcaption>
    </figure>
  );
}
