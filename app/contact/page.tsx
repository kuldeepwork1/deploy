import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Sbzee",
  description:
    "Get in touch with Sbzee. Send us a message or reach us via email and phone for any queries.",
  alternates: {
    canonical: "https://sbzee.com/contact",
  },
};

// ensure static build consistency
export const dynamic = "force-static";

export default function ContactPage() {
  return <ContactClient />;
}
