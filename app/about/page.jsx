
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us — Bullish Pixel",
  description:
    "Bullish Pixel is a full-services Hub offering marketing, Trading, Shopify development, WordPress sites, custom web development, tuition, coaching, and company registration (LLC, LTD, Pvt).",
  keywords: [
    "About Bullish Pixel",
    "Digital Agency Team",
    "Trading Behaviour",
    "Web Development Agency",
    "Marketing Experts",
    "Shopify & WordPress Agency",
  ],
  openGraph: {
    title: "About Bullish Pixel — Who We Are",
    description:
      "Explore the story, mission, and team behind Bullish Pixel — your trusted partner for marketing, Shopify, WordPress, custom development, and digital services.",
    url: "https://bullishpixel.com/about",
    type: "website",
    images: ["https://bullishpixel.com/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bullish Pixel",
    description:
      "Meet the team behind Bullish Pixel — experts in Trading, marketing, Shopify, WordPress, custom development, and company registration.",
    images: ["https://bullishpixel.com/og-default.png"],
  },
};


const AboutPage = () => {

    return (
        <>
        <AboutContent/>
        </>
    )
}

export default AboutPage