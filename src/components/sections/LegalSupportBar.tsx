import Link from "next/link";

export function LegalSupportBar() {
  return (
    <aside className="legal-support-card">
      <div>
        <span className="scope-badge scope-badge--engagement">Optional per engagement</span>
        <h3>Independent legal-partner support</h3>
      </div>
      <p>
        Contract, privacy and AI-governance support can be brought in when needed. The partner
        is independent—not an employee or permanent bench member—and scope is agreed before
        access to client context.
      </p>
      <Link href="/security">Review the Trust model →</Link>
    </aside>
  );
}
