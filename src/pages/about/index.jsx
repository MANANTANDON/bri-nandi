import { Layout } from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";
import {
  Star,
  Heart,
  Eye,
  Compass,
  BookOpen,
  Target,
  Lightbulb,
  Box,
} from "lucide-react";
import { Footer } from "@/components/Footer/Footer";
import { Grid, Typography } from "@mui/material";

const About = () => {
  const services = [
    {
      icon: <Target size={24} />,
      title: "Career Clarity",
      description: "Aligning professional path with cosmic purpose",
    },
    {
      icon: <Heart size={24} />,
      title: "Relationship Harmony",
      description: "Understanding soul connections through Vedic compatibility",
    },
    {
      icon: <Compass size={24} />,
      title: "Life Purpose",
      description: "Discovering your unique dharmic mission",
    },
  ];

  // =========================================================================
  // 1. JSON-LD STRUCTURED DATA - Person/Astrologer
  // =========================================================================
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brinandi Astrologer",
    alumniOf: "PhD in Economics, Data Science Expert",
    description:
      "A Vedic Astrologer specializing in Bhrigu Nandi Nadi (BNN), combining modern data science precision with ancient spiritual wisdom to provide deep cosmic guidance.",
    url: "https://www.brinandi.com/about",
    sameAs: ["https://www.brinandi.com"],
    jobTitle: "Vedic Astrologer and Cosmic Guide",
    knowsAbout: [
      "Vedic Astrology",
      "Bhrigu Nandi Nadi",
      "Career Astrology",
      "Relationship Compatibility",
      "Dharma",
      "Devi Sadhana",
    ],
  };

  // =========================================================================
  // 2. JSON-LD STRUCTURED DATA - AboutPage
  // =========================================================================
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Brinandi - Vedic Astrology & Bhrigu Nandi Nadi Specialist",
    description:
      "Learn about Brinandi's unique approach to Vedic Astrology, blending a PhD in Economics/Data Science background with the ancient wisdom of Bhrigu Nandi Nadi and dedicated Devi Sadhana for precise, dharmic guidance.",
    url: "https://www.brinandi.com/about",
    mainEntity: personSchema,
    mentions: [
      "Bhrigu Nandi Nadi Astrology",
      "Devi Sadhana",
      "Dharmic Mission",
      "Career Clarity",
    ],
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />

        {/* Primary Meta Tags - Targeting Expertise and Mission */}
        <title>
          About Brinandi | Bhrigu Nandi Nadi (BNN) Astrology Specialist | PhD
          Expert
        </title>
        <meta
          name="title"
          content="About Brinandi | Bhrigu Nandi Nadi (BNN) Astrology Specialist | PhD Expert"
        />
        <meta
          name="description"
          content="Discover the astrologer behind Brinandi: a PhD in Economics & data science professional who found their dharmic path in Bhrigu Nandi Nadi (BNN) Vedic astrology through dedicated Devi Sadhana. Learn about our sacred mission for precise cosmic guidance."
        />
        <meta
          name="keywords"
          content="about us, Brinandi, Bhrigu Nandi Nadi specialist, BNN astrology, Vedic astrologer, astrologer with PhD, data science astrology, Devi Sadhana, cosmic guidance, dharmic purpose, career path, spiritual journey, professional astrologer"
        />
        <meta name="author" content="Brinandi Astrology" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.brinandi.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.brinandi.com/about" />
        <meta
          property="og:title"
          content="About Brinandi | Bhrigu Nandi Nadi (BNN) Astrology Specialist | PhD Expert"
        />
        <meta
          property="og:description"
          content="Discover the unique blend of data science precision and Bhrigu Nandi Nadi wisdom at Brinandi. Read the astrologer's personal journey to provide you with expert cosmic guidance."
        />
        <meta property="og:image" content="https://www.brinandi.com/logo.png" />
        <meta property="og:site_name" content="Brinandi Astrology" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.brinandi.com/about" />
        <meta
          name="twitter:title"
          content="About Brinandi | Bhrigu Nandi Nadi (BNN) Astrology Specialist"
        />
        <meta
          name="twitter:description"
          content="PhD in Economics meets Vedic Astrology. Specializing in Bhrigu Nandi Nadi to offer precise, dharmic guidance. Learn the Brinandi story."
        />
        <meta
          name="twitter:image"
          content="https://www.brinandi.com/logo.png"
        />

        {/* Structured Data - Person (Astrologer) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Structured Data - AboutPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
      </Head>

      <Layout>
        <div
          style={{
            background: "#1f1f1f",
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
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <Typography
                className="font-700"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "1.5rem", md: "3rem" },
                  marginBottom: "1.5rem",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  lineHeight: "1.2",
                }}
              >
                Where <span style={{ color: "#f48643" }}>Ancient Wisdom</span>{" "}
                Meets <span style={{ color: "#f48643" }}>Modern Precision</span>
              </Typography>

              <div
                style={{
                  padding: "2rem",
                  marginBottom: "2rem",
                  background:
                    "linear-gradient(to bottom right, #18181820, #F0874410)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid #343434",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <p
                  className="font-500"
                  style={{
                    color: "#e8e8e8",
                    fontStyle: "italic",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  "योतिषां अपि तत् ज्योतिस्तमसः परमुच्यते।"
                </p>
                <p
                  className="font-400"
                  style={{
                    color: "#f48643",
                    fontSize: "1rem",
                  }}
                >
                  - That light which illuminates all lights, beyond all
                  darkness, is the Supreme Knowledge.
                </p>
              </div>
            </div>

            {/* Introduction Card */}
            <h2
              className="font-600"
              style={{
                color: "#f48643",
                fontSize: { xs: "1rem", md: "1.8rem" },
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Namaste 🙏
            </h2>
            <div
              style={{
                marginBottom: "30px",
                background:
                  "linear-gradient(to bottom right, #18181820, #F0874410)",
                backdropFilter: "blur(15px)",
                border: "1.5px solid #343434",
                borderRadius: "16px",
                padding: "2.5rem",
                boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <BookOpen size={28} color="#f48643" />
                <h3
                  className="font-600"
                  style={{
                    color: "#f48643",
                    fontSize: "1.5rem",
                    margin: "0",
                  }}
                >
                  My Journey
                </h3>
              </div>

              <p
                className="font-400"
                style={{
                  color: "#e8e8e8",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                }}
              >
                I am a **PhD in Economics** with expertise in **data science**,
                currently working with an MNC. I previously taught postgraduate
                students and have found my true calling in the sacred science of
                **Vedic astrology**—a passion ignited in childhood and nurtured
                through years of **Devi Sadhana**.
              </p>

              <span
                style={{
                  backgroundColor: "rgba(244,134,67,0.2)",
                  color: "#f48643",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Bhrigu Nandi Nadi Astrology Specialist
              </span>
            </div>

            {/* Sacred Journey Section */}
            <Grid
              container
              gap={{ xs: "30px" }}
              sx={{
                marginBottom: "3rem",
              }}
            >
              <Grid
                item
                size={{ xs: 12 }}
                sx={{
                  background:
                    "linear-gradient(to bottom right, #18181820, #F0874410)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid #343434",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Star size={28} color="#f48643" />
                  <h3
                    className="font-600"
                    style={{
                      color: "#f48643",
                      fontSize: "1.5rem",
                      margin: "0",
                    }}
                  >
                    The Sacred Journey
                  </h3>
                </div>

                <p
                  className="font-400"
                  style={{
                    color: "#e8e8e8",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
                  What began as childhood fascination with celestial movements
                  evolved into deep spiritual practice. Through dedicated **Devi
                  Sadhana**, I discovered my **dharmic path** in **Bhrigu Nandi
                  Nadi Astrology**—the ancient system that forms the foundation
                  of this platform's name, "Bri-Nandi."
                </p>

                <div
                  style={{
                    padding: "1.5rem",
                    background: "rgba(244,134,67,0.1)",
                    border: "1.5px solid #343434",
                    borderRadius: "12px",
                  }}
                >
                  <p
                    className="font-500"
                    style={{
                      color: "#e8e8e8",
                      fontStyle: "italic",
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः।"
                  </p>
                  <p
                    className="font-400"
                    style={{
                      color: "#f48643",
                      fontSize: "0.85rem",
                      margin: "0",
                    }}
                  >
                    - The Supreme Lord is the witness, permitter, supporter, and
                    experiencer of all.
                  </p>
                </div>
              </Grid>

              <Grid
                item
                size={{ xs: 12 }}
                sx={{
                  background:
                    "linear-gradient(to bottom right, #18181820, #F0874410)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid #343434",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Eye size={28} color="#f48643" />
                  <h3
                    className="font-600"
                    style={{
                      color: "#f48643",
                      fontSize: "1.5rem",
                      margin: "0",
                    }}
                  >
                    Sacred Mission
                  </h3>
                </div>

                <p
                  className="font-400"
                  style={{
                    color: "#e8e8e8",
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  My mission is empowering you with cosmic guidance that
                  transcends mere prediction to touch the essence of your
                  **dharmic purpose**.
                </p>
              </Grid>
            </Grid>

            {/* Services Section */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                className="font-600"
                style={{
                  color: "#f48643",
                  textAlign: "center",
                  marginBottom: "1rem",
                  fontSize: "2.2rem",
                }}
              >
                Services
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    style={{
                      background:
                        "linear-gradient(to bottom right, #18181820, #F0874410)",
                      backdropFilter: "blur(10px)",
                      border: "1.5px solid #343434",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      textAlign: "center",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(244,134,67,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0,0,0,0.2)";
                    }}
                  >
                    <div
                      style={{
                        color: "#f48643",
                        marginBottom: "1rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h4
                      className="font-600"
                      style={{
                        color: "#f48643",
                        marginBottom: "1rem",
                        fontSize: "1.2rem",
                      }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="font-400"
                      style={{
                        color: "#e8e8e8",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond Prediction Section */}
            <div
              style={{
                background:
                  "linear-gradient(to bottom right, #18181820, #F0874410)",
                backdropFilter: "blur(15px)",
                border: "1.5px solid #343434",
                borderRadius: "16px",
                padding: "2.5rem",
                boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Lightbulb size={28} color="#f48643" />
                <h3
                  className="font-600"
                  style={{
                    color: "#f48643",
                    fontSize: "1.5rem",
                    margin: "0",
                  }}
                >
                  Beyond Prediction
                </h3>
              </div>

              <div
                style={{
                  padding: "2rem",
                  marginBottom: "1.5rem",
                  background: "rgba(244,134,67,0.1)",
                  border: "1.5px solid #343434",
                  borderRadius: "12px",
                }}
              >
                <p
                  className="font-500"
                  style={{
                    color: "#e8e8e8",
                    fontStyle: "italic",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  "तमेव शरणं गच्छ सर्वभावेन भारत।"
                </p>
                <p
                  className="font-400"
                  style={{
                    color: "#f48643",
                    textAlign: "center",
                    margin: "0",
                  }}
                >
                  - Surrender unto Him completely, and by His grace attain
                  supreme peace.
                </p>
              </div>

              <p
                className="font-400"
                style={{
                  color: "#e8e8e8",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  textAlign: "center",
                }}
              >
                True astrology isn't fatalistic prediction—it's about complete
                surrender to divine will and receiving cosmic guidance. Each
                reading becomes a sacred space where ancient **Vedic
                mathematics** meets **divine grace**, revealing your soul's
                journey with both precision and compassion.
              </p>

              <div
                style={{
                  height: "1px",
                  background: "rgba(244,134,67,0.3)",
                  margin: "2rem 0",
                }}
              ></div>

              <h4
                className="font-600"
                style={{
                  color: "#f48643",
                  textAlign: "center",
                  marginBottom: "1rem",
                  fontSize: "1.3rem",
                }}
              >
                Welcome to Your Cosmic Journey of Self-Discovery
              </h4>

              <p
                className="font-500"
                style={{
                  color: "#e8e8e8",
                  textAlign: "center",
                  lineHeight: "1.7",
                  margin: "0",
                  fontSize: "1.05rem",
                }}
              >
                When you consult with me, you enter a realm where the Supreme
                Knowledge illuminates your path, transcending mere planetary
                calculations to touch the very essence of your dharmic purpose.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default About;
