import React, { useRef, useState } from "react";
import Head from "next/head";
import { HeroCont } from "@/components/Home/HeroCont";
import { FormContainer } from "@/components/Home/FormContainer";
import { SecondContainer } from "@/components/Home/SecondContainer";
import { Footer } from "@/components/Footer/Footer";
import CalBri from "@/components/Home/CalBri";

export default function Home() {
  const [serviceSelection, setServiceSelection] = useState("");
  const formRef = useRef(null);

  const scrollToForm = () => {
    const element = formRef.current;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // JSON-LD Structured Data - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brinandi",
    alternateName: "Brinandi Astrology",
    url: "https://www.brinandi.com",
    logo: "https://www.brinandi.com/logo.png",
    image: "https://www.brinandi.com/logo.png",
    description:
      "Expert Vedic astrology consultation services offering personalized career guidance, accurate Kundali creation, and comprehensive relationship compatibility readings. Get cosmic insights from professional astrologers.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Hindi"],
    },
    priceRange: "$$",
    serviceType: [
      "Vedic Astrology Consultation",
      "Career Astrology Reading",
      "Kundali Creation",
      "Birth Chart Analysis",
      "Relationship Compatibility Reading",
      "Marriage Compatibility",
      "Horoscope Reading",
      "Astrological Guidance",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  // JSON-LD Structured Data - Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vedic Astrology Services",
    provider: {
      "@type": "ProfessionalService",
      name: "Brinandi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vedic Astrology Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Career Consultation",
            description:
              "Professional Career Roadmap Analysis - Comprehensive Vedic Career Blueprint",
            provider: {
              "@type": "ProfessionalService",
              name: "Brinandi",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kundali Creation & Vedic Analysis",
            description:
              "Generate Your Personalized Kundali & Unlock Vedic Wisdom (Includes 2 Detailed Astrological Insights)",
            provider: {
              "@type": "ProfessionalService",
              name: "Brinandi",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Relationship Reading",
            description:
              "Sacred Union Analysis - Complete Vedic Compatibility & Relationship Harmony Reading",
            provider: {
              "@type": "ProfessionalService",
              name: "Brinandi",
            },
          },
        },
      ],
    },
  };

  // JSON-LD Structured Data - Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Brinandi Astrology",
    alternateName: "Brinandi",
    url: "https://www.brinandi.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.brinandi.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // JSON-LD Structured Data - Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Brinandi",
    image: "https://www.brinandi.com/logo.png",
    "@id": "https://www.brinandi.com",
    url: "https://www.brinandi.com",
    telephone: "",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Ultra SEO Optimized */}
        <title>
          Brinandi | Best Vedic Astrology Consultation, Kundali & Career Reading
          Online
        </title>
        <meta
          name="title"
          content="Brinandi | Best Vedic Astrology Consultation, Kundali & Career Reading Online"
        />
        <meta
          name="description"
          content="Get expert Vedic astrology consultation online at Brinandi. Professional Kundali creation, accurate career astrology, relationship compatibility readings & personalized horoscope analysis. Trusted by 1000+ clients worldwide. Book your astrology session now!"
        />
        <meta
          name="keywords"
          content="astrology, vedic astrology, online astrology consultation, kundali, kundali creation, birth chart, horoscope, astrology reading, career astrology, relationship astrology, marriage compatibility, love compatibility, astrologer online, best astrologer, vedic astrologer, indian astrology, jyotish, astrology consultation online, free kundali, kundli matching, astrology services, professional astrologer, accurate astrology predictions, personalized horoscope, natal chart reading, astrological guidance, cosmic guidance, planetary analysis, zodiac signs, horoscope reading online, astrology forecast, career guidance astrology, relationship reading, compatibility analysis, birth chart analysis, vedic horoscope, online kundali, astrology expert, spiritual guidance, destiny reading, fortune telling, astrological consultation, astrology advice, life path astrology, astrology report"
        />
        <meta name="author" content="Brinandi Astrology" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta
          name="classification"
          content="Vedic Astrology, Spiritual Guidance, Professional Astrology Services"
        />
        <meta name="category" content="Astrology Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="DC.title" content="Brinandi Vedic Astrology Services" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.brinandi.com" />

        {/* Open Graph / Facebook - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brinandi.com" />
        <meta
          property="og:title"
          content="Brinandi | Best Vedic Astrology Consultation, Kundali & Career Reading Online"
        />
        <meta
          property="og:description"
          content="Get expert Vedic astrology consultation online at Brinandi. Professional Kundali creation, accurate career astrology, relationship compatibility readings & personalized horoscope analysis. Trusted by 1000+ clients worldwide."
        />
        <meta property="og:image" content="https://www.brinandi.com/logo.png" />
        <meta
          property="og:image:secure_url"
          content="https://www.brinandi.com/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Brinandi - Expert Vedic Astrology Services"
        />
        <meta property="og:site_name" content="Brinandi Astrology" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="hi_IN" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.brinandi.com" />
        <meta
          name="twitter:title"
          content="Brinandi | Best Vedic Astrology Consultation, Kundali & Career Reading Online"
        />
        <meta
          name="twitter:description"
          content="Get expert Vedic astrology consultation online at Brinandi. Professional Kundali creation, accurate career astrology & relationship compatibility readings."
        />
        <meta
          name="twitter:image"
          content="https://www.brinandi.com/logo.png"
        />
        <meta
          name="twitter:image:alt"
          content="Brinandi - Expert Vedic Astrology Services"
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="https://www.brinandi.com/logo.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Favicon - Updated Path */}
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://www.brinandi.com" />
        <link rel="dns-prefetch" href="https://www.brinandi.com" />

        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="en" href="https://www.brinandi.com" />
        <link
          rel="alternate"
          hrefLang="hi"
          href="https://www.brinandi.com/hi"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.brinandi.com"
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Structured Data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>

      <HeroCont onScrollToForm={scrollToForm} />
      <SecondContainer
        onScrollToForm={scrollToForm}
        setServiceSelection={setServiceSelection}
      />
      <div ref={formRef}>
        <FormContainer serviceSelection={serviceSelection} />
      </div>
      <Footer />
    </>
  );
}

// Nextjs UPDATE
