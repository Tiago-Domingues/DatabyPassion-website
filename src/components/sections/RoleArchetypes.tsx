"use client";

import { useState } from "react";
import { FOUNDER_ROLE, ROLE_ARCHETYPES } from "@/content/collective";
import { RoleDetailPanel, type RoleDetail } from "@/components/sections/RoleDetailPanel";

export function RoleArchetypes({ compact = false }: { compact?: boolean }) {
  const [openRole, setOpenRole] = useState<RoleDetail | null>(null);

  return (
    <div className={`role-archetypes${compact ? " role-archetypes--compact" : ""}`}>
      <button
        type="button"
        className="role-archetypes__core"
        onClick={() =>
          setOpenRole({
            code: FOUNDER_ROLE.code,
            title: FOUNDER_ROLE.title,
            when: FOUNDER_ROLE.when,
            owns: FOUNDER_ROLE.owns,
            body: FOUNDER_ROLE.body,
          })
        }
      >
        <span className="role-archetypes__pulse" aria-hidden="true" />
        <span className="mono-label">{FOUNDER_ROLE.label}</span>
        <strong>{FOUNDER_ROLE.title}</strong>
        <p>{FOUNDER_ROLE.summary}</p>
      </button>
      <ul className="role-archetypes__grid" aria-label="Knowledge Center roles">
        {ROLE_ARCHETYPES.map((role) => (
          <li key={role.code}>
            <button
              type="button"
              className="role-archetypes__card"
              onClick={() => setOpenRole(role)}
            >
              <span className="role-archetypes__code" aria-hidden="true">
                {role.code}
              </span>
              <div>
                <h3>{role.title}</h3>
                <p>{role.when}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {openRole ? <RoleDetailPanel role={openRole} onClose={() => setOpenRole(null)} /> : null}
    </div>
  );
}
