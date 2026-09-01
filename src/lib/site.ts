/** Public origin until databypaixao.com is pointed at this Vercel project. */
export const SITE_URL = "https://databy-passion-website.vercel.app";

/** Founder WhatsApp used on the Jhonny assistant widget. */
export const WHATSAPP_E164 = "351935968825";
export const WHATSAPP_PREFILL =
  "Hi Tiago — I'd like to talk about a data and AI project with DatabyPassion.";

export function whatsappHref(text = WHATSAPP_PREFILL) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
