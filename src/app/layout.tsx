import type { Metadata } from "next";
import { Instrument_Sans, Newsreader, DM_Mono } from "next/font/google";
import { ModalProvider } from "@/components/ModalProvider";
import { Ticker, Nav, Footer } from "@/components/Chrome";
import { ContactModal } from "@/components/ContactModal";
import { CookieBanner } from "@/components/CookieBanner";
import { GpEffects } from "@/components/GpEffects";
import { NetworkBackground } from "@/components/NetworkBackground";
import { AssistantWidget } from "@/components/AssistantWidget";
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
    default: "DatabyPassion | Founder-led technology studio",
    template: "%s | DatabyPassion",
  },
  description:
    "DatabyPassion is a founder-led technology studio helping companies turn ideas and complex business problems into data systems, intelligent workflows and digital products.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "DatabyPassion | Founder-led technology studio",
    description:
      "Data systems, intelligent workflows and digital products — founder-led, collective-powered.",
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
          <AssistantWidget />
          <GpEffects />
        </ModalProvider>
      </body>
    </html>
  );
}
