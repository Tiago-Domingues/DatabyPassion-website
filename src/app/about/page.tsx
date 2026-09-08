import type { Metadata } from "next";
import Link from "next/link";
import { StartProject } from "@/components/StartProject";
import { DeliveryMap } from "@/components/sections/DeliveryMap";
import { FounderVideo } from "@/components/sections/FounderVideo";
import { LegalSupportBar } from "@/components/sections/LegalSupportBar";
import { RoleArchetypes } from "@/components/sections/RoleArchetypes";
import {
  BOUTIQUE_CONTRAST,
  COLLECTIVE_DIFFERENTIATORS,
  COLLECTIVE_PRINCIPLES,
  DELIVERY_METHOD,
  HOW_WE_WORK,
  TRADITIONAL_CONTRAST,
} from "@/content/collective";
import { CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the collective",
  description:
    "How DatabyPassion forms senior, problem-shaped teams around digital, data and AI products.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <Link href="/" className="page-hero-back">
            ← Back to Home
          </Link>
          <div className="label">The Collective</div>
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
              Built to keep <span className="em">judgement close to delivery.</span>
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

      <section className="collective-detail band-frost section-pad">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">Knowledge Center</span>
              <h2 className="sh">
                A capability map, <span className="em">not a fixed bench</span>
              </h2>
            </div>
            <p className="sb">
              Six senior capabilities show how an engagement can form. One accountable lead holds
              the outcome; specialists join when the work earns them. Named people and time
              commitment are agreed around the scope.
            </p>
          </div>
          <RoleArchetypes />
          <LegalSupportBar />
        </div>
      </section>

      <section className="principles-section band-frost">
        <div className="container">
          <div className="section-heading-split">
            <div>
              <span className="label">Principles</span>
              <h2 className="sh">
                Ten commandments. <span className="em">How the collective actually works.</span>
              </h2>
            </div>
            <p className="sb">
              These are the rules we hold ourselves to on every engagement — so a small, senior
              team can move at startup speed inside an enterprise without becoming theatre.
            </p>
          </div>
          <div className="principles-grid principles-grid--ten">
            {COLLECTIVE_PRINCIPLES.map((principle) => (
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

      <section className="approach-section band-frost">
        <div className="container">
          <div className="approach-header">
            <div className="label">How we work</div>
            <h2 className="sh">
              {HOW_WE_WORK.titleLead}{" "}
              <span className="em">{HOW_WE_WORK.titleEm}</span>
            </h2>
            {HOW_WE_WORK.intro.map((paragraph) => (
              <p className="sb" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <DeliveryMap orientation="horizontal" />
          <ol className="usbe-detail">
            {DELIVERY_METHOD.map((stage) => (
              <li className="usbe-detail__stage" key={stage.number}>
                <span className="usbe-detail__num" aria-hidden="true">
                  {stage.number}
                </span>
                <div>
                  <h3>{stage.title}</h3>
                  <span className="usbe-detail__output">{stage.output}</span>
                  {stage.detail.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fit-section section-pad">
        <div className="container">
          <div className="fit-grid">
            <article className="fit-card fit-card--positive">
              <span className="label">{BOUTIQUE_CONTRAST.label}</span>
              <h2>{BOUTIQUE_CONTRAST.title}</h2>
              <ul>
                {BOUTIQUE_CONTRAST.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="fit-card">
              <span className="label">{TRADITIONAL_CONTRAST.label}</span>
              <h2>{TRADITIONAL_CONTRAST.title}</h2>
              <ul>
                {TRADITIONAL_CONTRAST.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="cta-inner">
          <h2>
            Bring the problem. <span className="em">Shape the first credible move.</span>
          </h2>
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
