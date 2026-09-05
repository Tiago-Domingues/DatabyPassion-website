const STEPS = [
  {
    number: "01",
    title: "Problem",
    body: "Name the business decision, workflow or customer need worth changing.",
  },
  {
    number: "02",
    title: "Focused product",
    body: "Ship the smallest credible product that can create real evidence.",
  },
  {
    number: "03",
    title: "Measured value",
    body: "Observe adoption, operating change and the signals that matter.",
  },
  {
    number: "04",
    title: "Portfolio",
    body: "Scale the product, add the next use case or stop cleanly.",
  },
] as const;

export function PortfolioPath({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`portfolio-path${compact ? " portfolio-path--compact" : ""}`}>
      <figcaption className="portfolio-path__caption">
        <span className="section-label">The portfolio path</span>
        <strong>One useful product can earn the next.</strong>
      </figcaption>
      <div className="portfolio-path__canvas">
        <svg
          className="portfolio-path__line"
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="portfolio-path__track"
            d="M60 95 C165 20 260 165 360 90 S555 20 655 92 S840 162 940 78"
          />
          <path
            className="portfolio-path__progress"
            d="M60 95 C165 20 260 165 360 90 S555 20 655 92 S840 162 940 78"
          />
        </svg>
        <ol className="portfolio-path__steps">
          {STEPS.map((step) => (
            <li key={step.number} className="portfolio-path__step">
              <span className="portfolio-path__number" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="portfolio-path__note">
        Expansion is a decision, not an assumption. Each stage creates the evidence for the
        next commitment.
      </p>
    </figure>
  );
}
