import type { Metadata } from "next";
import { StartProject } from "@/components/StartProject";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <div className="label">Careers at DatabyPassion</div>
          <h1>
            Build the delivery layer of <span className="em">enterprise data</span>
          </h1>
          <p className="careers-hero-sub">
            DatabyPassion is a founder-led boutique. There are no open roles right now.
          </p>
        </div>
      </section>
      <section className="positions-section" style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <div className="cta-box">
            <h3>No open roles</h3>
            <p>
              If that changes, they will be listed here. For project work, talk to the founder —
              not a careers inbox.
            </p>
            <StartProject className="btn-primary">Start a project →</StartProject>
          </div>
        </div>
      </section>
    </>
  );
}
