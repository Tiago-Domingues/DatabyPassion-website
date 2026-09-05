import { ROLE_ARCHETYPES } from "@/content/collective";

export function RoleArchetypes({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`role-archetypes${compact ? " role-archetypes--compact" : ""}`}>
      <div className="role-archetypes__core">
        <span className="role-archetypes__pulse" aria-hidden="true" />
        <span className="mono-label">Accountable core</span>
        <strong>Founder-led</strong>
        <p>Problem, quality and communication stay connected.</p>
      </div>
      <ul className="role-archetypes__grid" aria-label="Knowledge Center roles">
        {ROLE_ARCHETYPES.map((role) => (
          <li key={role.code} className="role-archetypes__card">
            <span className="role-archetypes__code" aria-hidden="true">
              {role.code}
            </span>
            <div>
              <h3>{role.title}</h3>
              <p>{compact ? role.when : role.owns}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
