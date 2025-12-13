
import ContactSection from '@/components/ContactForm'
import ProjectsComponent from '@/components/ProjectsComponent'
import React from 'react'

export const metadata = {
  title: "Projects — Bullish Pixel Portfolio",
  description:
    "Browse Bullish Pixel’s portfolio showcasing Trading, Shopify stores, WordPress websites, marketing campaigns, custom web apps, and successful client projects.",
  keywords: [
    "Bullish Pixel Portfolio",
    "Web Development Projects",
    "Shopify Portfolio",
    "WordPress Portfolio",
    "Digital Agency Projects",
  ],
  openGraph: {
    title: "Bullish Pixel — Our Projects",
    description:
      "Explore completed Shopify, WordPress, custom development, and marketing projects from Bullish Pixel.",
    url: "https://bullishpixel.com/projects",
    type: "website",
    images: ["https://bullishpixel.com/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Bullish Pixel",
    description:
      "See our completed Trading, Shopify, WordPress, custom development and marketing projects.",
    images: ["https://bullishpixel.com/og-default.png"],
  },
};

const Projects = () => {
    return (
        <div className='md:p-10 p-3'>
            <div style={{ zIndex: 0 }} className="absolute inset-0 bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent blur-2xl" />
            <h1 className='md:text-6xl relative z-10 text-3xl font-black pt-20 text-center py-10'>
                Check Our Works With <br /> Real Results
            </h1>
            <ProjectsComponent />
            <ContactSection />
        </div>
    )
}

export default Projects