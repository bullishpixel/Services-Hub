import ContactContent from "./ContactSection";

export const metadata = {
  title: "Contact Us — Bullish Pixel",
  description:
    "Contact Bullish Pixel for Trading, Shopify development, WordPress websites, marketing services, custom web apps, tuitions, coaching, or company registration. Get a free consultation or quote.",
  keywords: [
    "Contact Bullish Pixel",
    "Digital Agency Contact",
    "Shopify Developer Contact",
    "WordPress Developer Contact",
    "Custom Web Development Contact",
  ],
  openGraph: {
    title: "Contact Bullish Pixel",
    description:
      "Get in touch with Bullish Pixel for Trading, development, marketing, coaching, and registration services.",
    url: "https://bullishpixel.com/contact",
    type: "website",
    images: ["https://bullishpixel.com/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bullish Pixel",
    description:
      "Message us for Trading, Shopify, WordPress, development, marketing, coaching, and registration services.",
    images: ["https://bullishpixel.com/og-default.png"],
  },
};


export default function ContactPage() {
    return (
        <>
        <ContactContent/>
        </>
    );
}
