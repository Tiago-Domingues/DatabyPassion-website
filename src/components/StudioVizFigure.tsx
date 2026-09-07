type StudioVizFigureProps = {
  variant: "orbit" | "architecture";
};

export function StudioVizFigure({ variant }: StudioVizFigureProps) {
  if (variant === "architecture") {
    return (
      <svg
        className="studio-viz-figure studio-viz-figure--architecture"
        viewBox="0 0 1000 620"
        role="img"
        aria-label="Delivery path from client need through studio expertise to operating value"
      >
        <text className="studio-viz-kicker studio-viz-kicker--need" x="90" y="36" textAnchor="middle">
          Client need
        </text>
        <text className="studio-viz-kicker" x="500" y="36" textAnchor="middle">
          The studio
        </text>
        <text className="studio-viz-kicker studio-viz-kicker--out" x="910" y="36" textAnchor="middle">
          Evolve
        </text>

        <path className="studio-viz-link studio-viz-link--need" d="M120 150 C 220 150 260 310 320 310" />
        <path className="studio-viz-link studio-viz-link--need" d="M120 240 C 220 240 260 310 320 310" />
        <path className="studio-viz-link studio-viz-link--need" d="M120 380 C 220 380 260 310 320 310" />
        <path className="studio-viz-link studio-viz-link--need" d="M120 470 C 220 470 260 310 320 310" />
        <path className="studio-viz-link studio-viz-link--need" d="M320 310 H 380" />
        <path className="studio-viz-link studio-viz-link--out" d="M620 310 H 680" />
        <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 150 880 150" />
        <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 240 880 240" />
        <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 380 880 380" />
        <path className="studio-viz-link studio-viz-link--out" d="M680 310 C 740 310 780 470 880 470" />

        <circle className="studio-viz-flow studio-viz-flow--need" r="4">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M120 150 C 220 150 260 310 320 310" />
        </circle>
        <circle className="studio-viz-flow studio-viz-flow--out" r="4">
          <animateMotion dur="3.8s" begin="-1.2s" repeatCount="indefinite" path="M680 310 C 740 310 780 150 880 150" />
        </circle>

        {[
          ["Data", 120, 150],
          ["Decision", 120, 240],
          ["Workflow", 120, 380],
          ["Product gap", 120, 470],
        ].map(([label, x, y]) => (
          <g key={label} transform={`translate(${x} ${y})`}>
            <circle className="studio-viz-node studio-viz-node--need" r="6" />
            <text className="studio-viz-node-label" y="22" textAnchor="middle">
              {label}
            </text>
          </g>
        ))}

        <rect className="studio-viz-studio-box" x="380" y="140" width="240" height="340" rx="16" />
        <circle className="studio-viz-core" cx="500" cy="310" r="12" />
        <text className="studio-viz-core-label" x="500" y="338" textAnchor="middle">
          The studio
        </text>
        <text className="studio-viz-ring-label studio-viz-ring-label--understand" x="500" y="188" textAnchor="middle">
          Understand
        </text>
        <text className="studio-viz-ring-label studio-viz-ring-label--shape" x="500" y="248" textAnchor="middle">
          Shape
        </text>
        <text className="studio-viz-ring-label studio-viz-ring-label--build" x="500" y="400" textAnchor="middle">
          Build
        </text>
        <text className="studio-viz-zone" x="320" y="560" textAnchor="middle">
          Unified data layer
        </text>
        <text className="studio-viz-zone studio-viz-kicker--out" x="680" y="560" textAnchor="middle">
          Decisions & actions
        </text>

        {[
          ["Trusted data", 880, 150],
          ["Shared number", 880, 240],
          ["Governed workflow", 880, 380],
          ["Working product", 880, 470],
        ].map(([label, x, y]) => (
          <g key={label} transform={`translate(${x} ${y})`}>
            <circle className="studio-viz-node studio-viz-node--out" r="6" />
            <text className="studio-viz-node-label" y="22" textAnchor="middle">
              {label}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  return (
    <svg
      className="studio-viz-figure studio-viz-figure--orbit"
      viewBox="0 0 1000 620"
      role="img"
      aria-label="Orbital studio: four capabilities around a studio core delivering operating value"
    >
      <g className="studio-viz-orbit-spin" transform="translate(500 286)">
        <circle className="studio-viz-orbit-guide" r="248" />
        <g className="studio-viz-ring studio-viz-ring--understand">
          <circle r="176" />
          <text className="studio-viz-ring-label studio-viz-ring-label--understand" y="-188" textAnchor="middle">
            Understand
          </text>
        </g>
        <g className="studio-viz-ring studio-viz-ring--shape">
          <circle r="130" />
          <text className="studio-viz-ring-label studio-viz-ring-label--shape" y="-142" textAnchor="middle">
            Shape
          </text>
        </g>
        <g className="studio-viz-ring studio-viz-ring--build">
          <circle r="88" />
          <text className="studio-viz-ring-label studio-viz-ring-label--build" y="-100" textAnchor="middle">
            Build
          </text>
        </g>
        <g className="studio-viz-ring studio-viz-ring--evolve">
          <circle r="52" />
          <text className="studio-viz-ring-label studio-viz-ring-label--evolve" y="-64" textAnchor="middle">
            Evolve
          </text>
        </g>
        <circle className="studio-viz-core-glow" r="38" />
        <circle className="studio-viz-core" r="12" />
        <text className="studio-viz-core-label" y="32" textAnchor="middle">
          The studio
        </text>
      </g>

      <g className="studio-viz-cap" transform="translate(310 128)">
        <circle className="studio-viz-node studio-viz-node--data" r="7" />
        <text className="studio-viz-node-label" y="-16" textAnchor="middle">
          Data
        </text>
      </g>
      <g className="studio-viz-cap" transform="translate(690 104)">
        <circle className="studio-viz-node studio-viz-node--decisions" r="7" />
        <text className="studio-viz-node-label" y="-16" textAnchor="middle">
          Decisions
        </text>
      </g>
      <g className="studio-viz-cap" transform="translate(708 444)">
        <circle className="studio-viz-node studio-viz-node--intel" r="7" />
        <text className="studio-viz-node-label" y="24" textAnchor="middle">
          Intelligence
        </text>
      </g>
      <g className="studio-viz-cap" transform="translate(310 446)">
        <circle className="studio-viz-node studio-viz-node--products" r="7" />
        <text className="studio-viz-node-label" y="24" textAnchor="middle">
          Products
        </text>
      </g>

      <path className="studio-viz-value-arc" d="M260 548 Q 500 588 740 548" />
      <text className="studio-viz-value-label" x="500" y="596" textAnchor="middle">
        Operating value
      </text>
    </svg>
  );
}
