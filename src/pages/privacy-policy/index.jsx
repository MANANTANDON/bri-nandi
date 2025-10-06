import { Layout } from "@/components/Layout/Layout";
import { Footer } from "@/components/Footer/Footer";
import Head from "next/head";
import React from "react";
import { Typography, Grid, Divider, Box } from "@mui/material";
import { Lock, Eye, Target } from "lucide-react"; // Using Lucide icons for visual appeal

const PrivacyPolicy = () => {
  // Use the orange accent color and dark theme colors
  const accentColor = "#f48643";
  const textColor = "#e8e8e8";
  const backgroundColor = "#1f1f1f";
  const cardBackground =
    "linear-gradient(to bottom right, #18181820, #F0874410)";
  const cardBorder = "1.5px solid #343434";

  // SEO Schema Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Brinandi Privacy Policy - Data Collection and Security",
    description:
      "Our commitment to protecting your personal information and sensitive birth data used for Vedic Astrology and Bhrigu Nandi Nadi consultations.",
    url: "https://www.brinandi.com/privacy-policy",
  };

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Privacy Policy | Brinandi Vedic Astrology</title>
        <meta
          name="description"
          content="Brinandi's commitment to protecting your personal data, especially sensitive birth details (date, time, place), used exclusively for personalized Vedic Astrology services."
        />
        <meta
          name="keywords"
          content="privacy policy, data security, astrology data, birth chart data protection, BNN privacy, Brinandi"
        />
        <link rel="canonical" href="https://www.brinandi.com/privacy-policy" />
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
                Our Sacred <span style={{ color: accentColor }}>Trust</span>
              </Typography>
              <Typography
                className="font-400"
                sx={{
                  color: textColor,
                  fontSize: "1.1rem",
                }}
              >
                Protecting your privacy is a foundation of our spiritual
                service.
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
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                1. Information We Collect
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "1rem" }}
              >
                We collect information necessary to provide and improve our
                Vedic Astrology consultation services:
              </Typography>

              <Grid container spacing={3} sx={{ marginBottom: "2rem" }}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      padding: "1.5rem",
                      background: "rgba(244,134,67,0.1)",
                      border: cardBorder,
                      borderRadius: "12px",
                      height: "100%",
                    }}
                  >
                    <Target color={accentColor} />
                    <Typography
                      variant="body1"
                      sx={{ color: accentColor, fontWeight: "600", mt: 1 }}
                    >
                      Sensitive Birth Data (Mandatory for Service)
                    </Typography>
                    <Box
                      component="ul"
                      sx={{ lineHeight: "1.7", paddingLeft: "1.5rem", mt: 1 }}
                    >
                      <li>Full Name</li>
                      <li>Date of Birth</li>
                      <li>Exact Time of Birth</li>
                      <li>Place of Birth (City/Country)</li>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      padding: "1.5rem",
                      background: "rgba(244,134,67,0.1)",
                      border: cardBorder,
                      borderRadius: "12px",
                      height: "100%",
                    }}
                  >
                    <Lock color={accentColor} />
                    <Typography
                      variant="body1"
                      sx={{ color: accentColor, fontWeight: "600", mt: 1 }}
                    >
                      Contact and Booking Data
                    </Typography>
                    <Box
                      component="ul"
                      sx={{ lineHeight: "1.7", paddingLeft: "1.5rem", mt: 1 }}
                    >
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Specific Consultation Questions/Concerns</li>
                      <li>
                        Payment Details (handled by third-party processors)
                      </li>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                2. How We Use Your Information
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                Your information is used strictly for the following purposes:
              </Typography>
              <Box
                component="ul"
                sx={{
                  lineHeight: "1.7",
                  paddingLeft: "2rem",
                  "& li": { marginBottom: "0.5rem" },
                }}
              >
                <li>
                  **Service Delivery:** Your **Birth Data** is used solely for
                  the calculation, analysis, and preparation of your
                  personalized Vedic Astrology (Bhrigu Nandi Nadi) chart and
                  consultation report.
                </li>
                <li>
                  **Communication:** We use your email and phone number to
                  confirm bookings, reschedule appointments, send consultation
                  reports, and respond to your inquiries.
                </li>
                <li>
                  **Improvement:** Anonymized data may be used to improve the
                  accuracy and quality of our analytical models, always ensuring
                  personal identification is removed.
                </li>
              </Box>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                3. Data Sharing and Disclosure
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                **We will never sell, rent, or trade your Birth Data or personal
                information to third parties for marketing purposes.**
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "1rem" }}
              >
                We may share your data only in the following limited
                circumstances:
              </Typography>
              <Box
                component="ul"
                sx={{
                  lineHeight: "1.7",
                  paddingLeft: "2rem",
                  "& li": { marginBottom: "0.5rem" },
                }}
              >
                <li>
                  **Service Providers:** We may use third-party tools for
                  payment processing (e.g., Stripe, PayPal) and scheduling
                  (e.g., Calendly). These services receive only the data
                  required to perform their specific function.
                </li>
                <li>
                  **Legal Obligations:** If required to do so by law or in
                  response to valid requests by public authorities (e.g., a
                  court order).
                </li>
              </Box>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                4. Data Security
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                The security of your data is paramount. We employ a variety of
                security measures, including encryption and secure storage, to
                protect against unauthorized access, alteration, disclosure, or
                destruction of your personal information, especially your
                sensitive **Birth Data**. However, please remember that no
                method of transmission over the Internet is 100% secure.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                5. Your Data Protection Rights
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "1rem" }}
              >
                Depending on your location, you have certain rights regarding
                the personal information we hold about you. These may include
                the right to:
              </Typography>
              <Box
                component="ul"
                sx={{
                  lineHeight: "1.7",
                  paddingLeft: "2rem",
                  "& li": { marginBottom: "0.5rem" },
                }}
              >
                <li>Request access to the data we have about you.</li>
                <li>Request the correction of inaccurate data.</li>
                <li>Request the deletion of your personal data.</li>
                <li>Object to the processing of your personal data.</li>
              </Box>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginTop: "1rem" }}
              >
                To exercise any of these rights, please contact us using the
                information below.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                6. Changes to This Privacy Policy
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7", marginBottom: "2rem" }}
              >
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date at the top of the
                page. You are advised to review this Privacy Policy periodically
                for any changes.
              </Typography>

              <Divider
                sx={{ background: "rgba(244,134,67,0.3)", margin: "2rem 0" }}
              />

              <Typography
                variant="h5"
                sx={{ color: accentColor, marginBottom: "1.5rem" }}
              >
                7. Contact Us
              </Typography>
              <Typography
                variant="body1"
                className="font-400"
                sx={{ lineHeight: "1.7" }}
              >
                If you have any questions or concerns regarding this Privacy
                Policy or your data, please contact us:
                <br />
                **Email:** [Insert Contact Email Address Here]
              </Typography>
            </Box>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
