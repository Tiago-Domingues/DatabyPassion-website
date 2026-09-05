import type { Metadata } from "next";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { FounderVideo } from "@/components/sections/FounderVideo";
import { PortfolioPath } from "@/components/sections/PortfolioPath";
import { RoleArchetypes } from "@/components/sections/RoleArchetypes";
import {
  BEST_FIT,
  COLLECTIVE_DIFFERENTIATORS,
  NOT_THE_RIGHT_FIT,
  OPERATING_MODEL,
} from "@/content/collective";
import { CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the collective",
  description:
    "How DatabyPassion forms senior, problem-shaped teams around digital, data and AI products.",
};

const PRINCIPLES = [
  {
    code: "01",
    title: "Start from the decision",
    body: "Tools follow the business problem, the workflow and the people who need to use the answer.",
  },
  {
    code: "02",
    title: "Make the work visible",
    body: "Working sessions, decisions and increments replace layers of status theatre.",
  },
  {
    code: "03",
    title: "Earn the next release",
    body: "A focused product creates evidence. Evidence, not momentum alone, decides what grows.",
  },
  {
    code: "04",
    title: "Leave an operating capability",
    body: "Code, contracts, runbooks and product context should remain useful after the engagement.",
  },
] as const;

const METHOD = [
  {
    number: "01",
    title: "Understand",
    output: "A problem frame",
    body: "Map the business decision, real workflow, users, data and delivery constraints.",
  },
  {
    number: "02",
    title: "Shape",
    output: "A credible first product",
    body: "Choose what ships first, what waits, how risk is handled and what evidence matters.",
  },
  {
    number: "03",
    title: "Build",
    output: "Working software",
    body: "Deliver in short, visible loops inside the agreed stack and control model.",
  },
  {
    number: "04",
    title: "Evolve",
    output: "A portfolio decision",
    body: "Observe use, improve the product and decide whether to scale, transfer or stop.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="label">The right collective</div>
          <h1>
            Senior people, shaped around <span className="em">the work</span>
          </h1>
          <p className="about-hero-sub">
            DatabyPassion is a founder-led boutique technology consultancy. One accountable core
            holds the outcome and delivery standard; trusted specialists join when the problem
            needs their depth.
          </p>
        </div>
      </section>

      <section className="about-story section-pad">
        <div className="container about-story__grid">
          <div className="about-story__copy">
            <span className="label">The founder story</span>
            <h2 className="sh">
              Built to keep <span className="g">judgement close to delivery.</span>
            </h2>
            <p>
              DatabyPassion exists to close the gap between senior advice and the product that
              actually reaches users. The engagement lead stays close to the business problem,
              architecture and build instead of passing the work down an account ladder.
            </p>
            <p>
              The founder&apos;s career includes lead data-engineering work in wealth at Mercer
              and AI-engineering experience at EY-Parthenon. Those organisations are career
              context only; they are not presented as DatabyPassion clients.
            </p>
            <p>
              The result is deliberately small at the centre: direct communication, visible
              decisions and a team that changes with the work.
            </p>
          </div>
          <FounderVideo />
        </div>
      </section>

      <section className="collective-detail section-pad">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">The collective</span>
              <h2 className="sh">A capability map, not a fixed bench</h2>
            </div>
            <p className="sb">
              Six senior role archetypes show how an engagement can form. The actual team, named
              people and time commitment are agreed around the scope.
            </p>
          </div>
          <RoleArchetypes />
        </div>
      </section>

      <section className="operating-model section-pad">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">Operating model</span>
              <h2 className="sh">
                How teams <span className="g">form and change</span>
              </h2>
            </div>
            <p className="sb">
              The core stays accountable. Specialists join for specific decisions and delivery
              stages; ownership remains explicit as the product evolves.
            </p>
          </div>
          <div className="operating-model__grid">
            {OPERATING_MODEL.map((item) => (
              <article key={item.number} className="numbered-card">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="legal-support-card">
            <div>
              <span className="scope-badge scope-badge--engagement">
                Optional per engagement
              </span>
              <h3>Independent legal-partner support</h3>
            </div>
            <p>
              Contract, privacy and AI-governance support can be brought in when needed. The
              partner is independent—not an employee or permanent bench member—and scope is
              agreed before access to client context.
            </p>
            <Link href="/security">Review the Trust model →</Link>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">Principles</span>
              <h2 className="sh">Constraints we work against</h2>
            </div>
            <p className="sb">
              Practical commitments that keep a senior, small-team model useful inside an
              enterprise.
            </p>
          </div>
          <div className="principles-grid principles-grid--four">
            {PRINCIPLES.map((principle) => (
              <article className="principle-card" key={principle.code}>
                <div className="principle-icon">{principle.code}</div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
          <div className="collective-differentiators">
            {COLLECTIVE_DIFFERENTIATORS.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="approach-header">
            <div className="label">How we work</div>
            <h2>Understand → Shape → Build → Evolve</h2>
            <p>Each stage ends with a useful artefact and an explicit decision.</p>
          </div>
          <div className="approach-grid">
            {METHOD.map((stage) => (
              <article className="approach-card" key={stage.number}>
                <div className="approach-num">
                  {stage.number} {stage.title}
                </div>
                <h3>{stage.output}</h3>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
          <PortfolioPath />
        </div>
      </section>

      <section className="fit-section section-pad">
        <div className="container">
          <div className="fit-grid">
            <article className="fit-card fit-card--positive">
              <span className="label">Best fit</span>
              <h2>Work that benefits from a senior, focused team</h2>
              <ul>
                {BEST_FIT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="fit-card">
              <span className="label">Not the right fit</span>
              <h2>Clear boundaries protect both sides</h2>
              <ul>
                {NOT_THE_RIGHT_FIT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>Bring the problem. Shape the first credible move.</h2>
          <p className="sb">Build a concise brief before choosing whether to start a conversation.</p>
          <div className="cta-buttons">
            <StartProject className="btn-primary">Create a project brief →</StartProject>
            <a href={CONTACT_MAILTO} className="btn-ghost">
              Email the founder
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
