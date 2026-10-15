/** Public origin until databypaixao.com is pointed at this Vercel project. */
export const SITE_URL = "https://databy-passion-website.vercel.app";

/** Temporary founder inbox used until the business domain is ready. */
export const CONTACT_EMAIL = "tiagopaixaodomingues@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export function canonicalUrl(path: string = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
