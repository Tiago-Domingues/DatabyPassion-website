import Link from "next/link";

export function LegalSupportBar({ href = "/security" }: { href?: string | null }) {
  return (
    <aside className="legal-support-card">
      <div>
        <span className="scope-badge scope-badge--engagement">Optional per engagement</span>
        <h3>Independent legal-partner support</h3>
      </div>
      <p>
        Contract, privacy and AI-governance questions are handled with an independent practising
        counsel — not an employee and not a permanent bench member. The partner is brought in when
        the engagement needs that depth. Scope, confidentiality and access are agreed before any
        client context is shared.
      </p>
      {href ? <Link href={href}>Review the Trust model →</Link> : null}
    </aside>
  );
}
