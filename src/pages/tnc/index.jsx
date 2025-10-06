import { Layout } from "@/components/Layout/Layout";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import React from "react";
import { Typography, Grid, Divider, Box } from "@mui/material";
import { Box as LucideBox, Target } from "lucide-react"; // Using Lucide Box for an icon

const TermsAndConditions = () => {
  // Use the orange accent color
  const accentColor = "#f48643";
  const textColor = "#e8e8e8";
  const backgroundColor = "#1f1f1f";
  const cardBackground =
    "linear-gradient(to bottom right, #18181820, #F0874410)";
  const cardBorder = "1.5px solid #343434";

  // SEO Schema Data (using AboutPage structure as a fallback)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Brinandi Terms and Conditions - Vedic Astrology Service",
    description:
      "Official Terms and Conditions governing the use of Brinandi's Vedic Astrology and Bhrigu Nandi Nadi consultation services.",
    url: "https://www.brinandi.com/tnc",
  };

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Terms and Conditions | Brinandi Vedic Astrology</title>
        <meta
          name="description"
          content="Official Terms and Conditions for Brinandi's Vedic Astrology consultation services, covering service usage, disclaimers, and user obligations."
        />
        <link rel="canonical" href="https://www.brinandi.com/tnc" />
        {/* Favicon links (assuming they are in the public folder) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Layout>
        <div
          style={{
            background: backgroundColor,
            minHeight: "100vh",
            padding: "4rem 0",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            {/* Header */}
            <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
              <Typography
                className="font-700"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  marginBottom: "1rem",
                  lineHeight: "1.2",
                }}
              >
                Terms and <span style={{ color: accentColor }}>Conditions</span>
              </Typography>
              <Typography
                className="font-400"
                sx={{
                  color: textColor,
                  fontSize: "1.1rem",
                }}
              >
                Last Updated: October 6, 2025
              </Typography>
            </Box>

            {/* Main Content Card */}
            <Box
              sx={{
                background: cardBackground,
                backdropFilter: "blur(15px)",
                border: cardBorder,
                borderRadius: "16px",
                padding: { xs: "2rem", md: "3rem" },
                boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
                color: textColor,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                1. Acceptance of Terms
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                By accessing or using the Brinandi website and any related
                services ("Services"), you agree to be bound by these Terms and
                Conditions ("Terms"). If you disagree with any part of the
                terms, then you may not access the Service. These Terms apply to
                all visitors, users, and others who access or use the Service.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                2. Description of Services
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "1rem" }}
              >
                Brinandi provides Vedic Astrology consultation services,
                including but not limited to:
              </Typography>
              <Box
                component="ul"
                sx={{
                  lineHeight: "1.7",
                  paddingLeft: "2rem",
                  "& li": { marginBottom: "0.5rem" },
                }}
              >
                <li>Career Consultation & Roadmap Analysis</li>
                <li>Kundali Creation & Vedic Analysis</li>
                <li>
                  Relationship Compatibility Reading (Sacred Union Analysis)
                </li>
                <li>Custom cosmic guidance and spiritual counseling.</li>
              </Box>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginTop: "1rem" }}
              >
                All services are based on the ancient science of Vedic
                Astrology, including the Bhrigu Nandi Nadi system.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                3. Disclaimer of Astrological Service (Crucial Clause)
              </Typography>
              <Box
                sx={{
                  padding: "1.5rem",
                  background: "rgba(244,134,67,0.1)",
                  border: cardBorder,
                  borderRadius: "12px",
                  marginBottom: "2rem",
                }}
              >
                <Typography
                  variant="body1"
                  className="font-500"
                  sx={{
                    color: textColor,
                    lineHeight: "1.7",
                    fontStyle: "italic",
                  }}
                >
                  Brinandi is an educational and consulting service that
                  provides spiritual and philosophical guidance based on
                  astrological principles. By law, we are required to state that
                  all readings, consultations, and reports are for
                  **entertainment purposes only**. The Service is **not a
                  substitute for professional medical, psychological, legal, or
                  financial advice**. The user is solely responsible for their
                  interpretation of the guidance and the subsequent actions
                  taken. Brinandi makes no guarantees, express or implied, about
                  the outcomes of any consultation.
                </Typography>
              </Box>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                4. User Obligations and Accuracy
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "1rem" }}
              >
                **Accurate Information:** The efficacy of astrological analysis
                is highly dependent on the accuracy of the birth details
                provided. You warrant that all information you provide,
                including name, date, time, and place of birth, is accurate and
                correct. Brinandi is not responsible for inaccurate readings
                resulting from incorrect data provided by the user.
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                **Prohibited Use:** You agree not to use the Service for any
                purpose that is unlawful or prohibited by these Terms.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                5. Payment and Refunds
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "1rem" }}
              >
                **Payment:** All services must be paid for in advance. Fees are
                listed on the website and are subject to change without prior
                notice.
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                **Refund Policy:** Due to the personalized and time-intensive
                nature of astrological chart preparation and analysis, **all
                sales are final**. No refunds will be issued once the
                consultation is booked and work on the chart has commenced, or
                after the consultation is delivered. Reschedule requests may be
                accommodated subject to availability.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                6. Intellectual Property
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                The Service and its original content, features, and
                functionality (including all design, text, graphics, logos, and
                materials created for your consultation) are and will remain the
                exclusive property of Brinandi. You may not reproduce, modify,
                distribute, or create derivative works from the content without
                explicit written permission from Brinandi.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                7. Links to Other Websites
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Brinandi. Brinandi
                has no control over, and assumes no responsibility for, the
                content, privacy policies, or practices of any third-party web
                sites or services.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                8. Governing Law and Jurisdiction
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                These Terms shall be governed and construed in accordance with
                the laws of **[Insert Your State/Country Here]**, without regard
                to its conflict of law provisions. You agree to submit to the
                exclusive jurisdiction of the courts located in **[Insert Your
                City/Region Here]** to resolve any legal matter arising from
                these Terms.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h6"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                9. Contact Us
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7" }}
              >
                If you have any questions about these Terms, please contact us
                at:
                <br />
                <a href="mailto:brinandi09@gmail.com">
                  <b>brinandi09@gmail.com</b>
                </a>
              </Typography>
            </Box>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default TermsAndConditions;
