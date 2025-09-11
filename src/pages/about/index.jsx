import { Layout } from "@/components/Layout/Layout";
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

  return (
    <>
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
                I am a PhD in Economics with expertise in data science,
                currently working with an MNC. I previously taught postgraduate
                students and have found my true calling in the sacred science of
                Vedic astrology—a passion ignited in childhood and nurtured
                through years of Devi Sadhana.
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
              gap={{ xs: "30px", md: 2 }}
              sx={{
                marginBottom: "3rem",
              }}
            >
              <Grid
                item
                size={{ xs: 12, md: 5.9 }}
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
                  evolved into deep spiritual practice. Through dedicated Devi
                  Sadhana, I discovered my dharmic path in Bhrigu Nandi Nadi
                  Astrology—the ancient system that forms the foundation of this
                  platform's name, "Bri-Nandi."
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
                size={{ xs: 12, md: 5.9 }}
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

                <div
                  style={{
                    padding: "1.5rem",
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
                      marginBottom: "0.5rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च।"
                  </p>
                  <p
                    className="font-400"
                    style={{
                      color: "#f48643",
                      fontSize: "0.85rem",
                      margin: "0",
                    }}
                  >
                    - I am seated in the hearts of all; from Me come memory,
                    knowledge, and understanding.
                  </p>
                </div>

                <p
                  className="font-400"
                  style={{
                    color: "#e8e8e8",
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  Every consultation channels this divine knowledge. My mission
                  is empowering you with cosmic guidance that transcends mere
                  prediction to touch the essence of your dharmic purpose.
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
                Sacred Services
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
                reading becomes a sacred space where ancient Vedic mathematics
                meets divine grace, revealing your soul's journey with both
                precision and compassion.
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
