import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import whtsp from '@/public/assets/whtsp.png'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

const CormorantFont = Cormorant_Garamond({
  weight: ['400', '500', '600', '700',],
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  metadataBase: new URL("https://bullishpixel.com"),
  title: {
    default: "Bullish Pixel — Market, Trade & Web Solutions",
    template: "%s | Bullish Pixel",
  },
  description:
    "Bullish Pixel is a full-service digital agency offering marketing, trading, Shopify development, WordPress sites, custom web development, tuition, coaching, and company registration (LLC, LTD, Pvt).",
  keywords: [
    "Bullish Pixel",
    "Digital Marketing",
    "Marketing",
    "Trading",
    "Marketing Agency",
    "Shopify Development",
    "WordPress Development",
    "Custom Web Development",
    "Tuition",
    "Coaching",
    "Business Coaching",
    "Company Registration LLC LTD Pvt",
    "Web Development Agency Pakistan",
    "Ecommerce Development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bullish Pixel",
    url: "https://bullishpixel.com",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <head>

        


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Bullish Pixel",
                  url: "https://bullishpixel.com",
                  logo: "https://bullishpixel.com/logo.png",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  url: "https://bullishpixel.com",
                  name: "Bullish Pixel",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://bullishpixel.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  name: "Bullish Pixel",
                  url: "https://bullishpixel.com",
                  image: "https://bullishpixel.com/og-default.png",
                  priceRange: "Varies",
                  description:
                    "Bullish Pixel provides marketing, Trading, Shopify development, WordPress development, custom web development, tuitions, coaching, and LLC, LTD, Pvt company registration services."
                },
                {
                  "@type": "Service",
                  serviceType: "Marketing Services",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                },
                {
                  "@type": "Service",
                  serviceType: "Trading with AI Agents",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                },
                {
                  "@type": "Service",
                  serviceType: "Shopify Development",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                },
                {
                  "@type": "Service",
                  serviceType: "WordPress Development",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                },
                {
                  "@type": "Service",
                  serviceType: "Custom Web Development",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                },
                {
                  "@type": "Service",
                  serviceType: "Tuitions & Coaching",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                },
                {
                  "@type": "Service",
                  serviceType: "LLC, LTD, Pvt Company Registration",
                  provider: {
                    "@type": "Organization",
                    name: "Bullish Pixel",
                    url: "https://bullishpixel.com"
                  }
                }
              ]
            })
          }}
        />

         {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '822602123947026');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}

      </head>
      <body
        className={`${CormorantFont.className}  antialiased `}
      >
        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=822602123947026&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ToastContainer />
        <Navbar />
        {children}
        <Link href='https://wa.me/923117787395'>
          <Image className=" w-10 fixed z-40 bottom-4 md:bottom-10 right-4" src={whtsp.src} height={whtsp.height} width={whtsp.width} alt="Whatsap logo" />
        </Link>
        <Footer />
      </body>
    </html>
  );
}
