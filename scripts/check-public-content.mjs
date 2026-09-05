import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceRoots = ["src/app", "src/components", "src/content"];
const sourceFiles = [];

async function collect(relativeDir) {
  const entries = await readdir(path.join(root, relativeDir), { withFileTypes: true });
  for (const entry of entries) {
    const relativePath = path.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      await collect(relativePath);
    } else if (/\.(?:ts|tsx)$/.test(entry.name)) {
      sourceFiles.push(relativePath);
    }
  }
}

await Promise.all(sourceRoots.map(collect));

const sources = new Map(
  await Promise.all(
    sourceFiles.map(async (file) => [file, await readFile(path.join(root, file), "utf8")]),
  ),
);

const forbidden = [
  { label: "public placeholder metric", pattern: /\(placeholder\)|Placeholder\s*·/i },
  { label: "fake submission confirmation", pattern: /we(?:'|’)ve received your request/i },
  { label: "fake sending state", pattern: /Sending\.\.\./i },
  { label: "legacy enablement badge", pattern: /DBP Enabled/i },
];

const failures = [];
for (const [file, source] of sources) {
  for (const rule of forbidden) {
    if (rule.pattern.test(source)) failures.push(`${file}: ${rule.label}`);
  }
}

const practices = sources.get("src/content/practices.ts") || "";
const engagementLabels = practices.match(/label:\s*"Typical engagement",/g) || [];
const engagementDisclaimers =
  practices.match(/Illustrative delivery pattern, not a client case study or measured outcome\./g) ||
  [];

if (engagementLabels.length !== 4) {
  failures.push(
    `src/content/practices.ts: expected 4 labelled typical engagements, found ${engagementLabels.length}`,
  );
}
if (engagementDisclaimers.length !== engagementLabels.length) {
  failures.push(
    "src/content/practices.ts: every typical engagement must carry the illustrative-pattern disclaimer",
  );
}

const contactModal = sources.get("src/components/ContactModal.tsx") || "";
if (/\bfetch\s*\(|XMLHttpRequest|sendBeacon\s*\(/.test(contactModal)) {
  failures.push("src/components/ContactModal.tsx: project brief must remain UI-only");
}
if (!/Nothing is\s+sent\s+from\s+this\s+website\./.test(contactModal)) {
  failures.push("src/components/ContactModal.tsx: missing visible no-submission disclosure");
}

const layout = sources.get("src/app/layout.tsx") || "";
if (/AssistantWidget/.test(layout)) {
  failures.push("src/app/layout.tsx: unfinished assistant is still mounted");
}

const homepage = sources.get("src/app/page.tsx") || "";
if (/Mercer|EY-Parthenon|Jhonny/i.test(homepage)) {
  failures.push("src/app/page.tsx: career brands and client names must stay off the homepage");
}
if (!/Create a project brief/.test(homepage)) {
  failures.push("src/app/page.tsx: missing first-viewport project-brief CTA copy");
}

if (failures.length) {
  console.error("Public content assertions failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Public content assertions passed across ${sourceFiles.length} files: no fake proof, fake submission state, legacy badge or unlabeled typical engagement.`,
  );
}
