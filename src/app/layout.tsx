import type { Metadata } from "next";
import { Instrument_Sans, Newsreader, DM_Mono } from "next/font/google";
import { ModalProvider } from "@/components/ModalProvider";
import { Ticker, Nav, Footer } from "@/components/Chrome";
import { ContactModal } from "@/components/ContactModal";
import { CookieBanner } from "@/components/CookieBanner";
import { GpEffects } from "@/components/GpEffects";
import { NetworkBackground } from "@/components/NetworkBackground";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400"],
  variable: "--font-newsreader",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DatabyPassion | Boutique technology consultancy",
    template: "%s | DatabyPassion",
  },
  description:
    "A founder-led technology studio turning enterprise digital and AI opportunities into working products.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "DatabyPassion | Boutique technology consultancy",
    description:
      "Digital, data and AI products — founder-led, collective-powered and shaped around the work.",
    url: SITE_URL,
    siteName: "DatabyPassion",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${newsreader.variable} ${dmMono.variable}`}
    >
      <body>
        <ModalProvider>
          <NetworkBackground />
          <Nav />
          <Ticker />
          <div className="site-content">
            {children}
            <Footer />
          </div>
          <ContactModal />
          <CookieBanner />
          <GpEffects />
        </ModalProvider>
      </body>
    </html>
  );
}
