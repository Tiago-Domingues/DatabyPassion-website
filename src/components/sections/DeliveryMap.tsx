import { DELIVERY_METHOD } from "@/content/collective";

export function DeliveryMap() {
  return (
    <figure className="delivery-map">
      <figcaption className="delivery-map__caption">
        <span className="section-label">How we deliver</span>
        <strong>Understand → Shape → Build → Evolve</strong>
      </figcaption>
      <div className="delivery-map__track" aria-hidden="true">
        <span className="delivery-map__spine" />
        <span className="delivery-map__pulse" />
      </div>
      <ol className="delivery-map__steps">
        {DELIVERY_METHOD.map((step) => (
          <li key={step.number} className="delivery-map__step">
            <span className="delivery-map__node" aria-hidden="true">
              {step.number}
            </span>
            <div>
              <h3>{step.title}</h3>
              <span className="delivery-map__output">{step.output}</span>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
