"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Container,
  Grid,
  InputBase,
} from "@mui/material";
import Image from "next/image";

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          height: "100px",
          backgroundImage: "linear-gradient(#1f1f1f, transparent)",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: "500px",
          backgroundImage: "linear-gradient(transparent, #1f1f1f)",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: -2,
          opacity: 0.03,
        }}
      >
        <Image
          src="images/zodiac/capricorn.svg"
          layout="intrinsic"
          height={300}
          width={400}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: -200, md: 0 },
          right: { md: -300 },
          opacity: 0.08,
          zIndex: -2,
        }}
      >
        <Image
          src="/chartwheel_white.svg"
          layout="intrinsic"
          height={700}
          width={700}
        />
      </Box>
      <Container maxWidth="xl" sx={{ py: 4, zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "1.5px solid #333333",
              borderRadius: "100px",
              py: 0.3,
              pl: 0.3,
              pr: 2,
              bgcolor: "#181818",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "14px",
                bgcolor: "#ef8644",
                borderRadius: "100px",
                px: 1.5,
                py: 0.5,
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
              Begin with one simple step.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mt: 5,
              width: { xs: "100%", md: "700px" },
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "24px", md: "32px" },
              }}
              className="font-700"
              textAlign={"center"}
            >
              Elevate your <span style={{ color: "#ef8644" }}>astrology</span>{" "}
              experience
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: 5,
          }}
        >
          <Box
            sx={{
              border: "2px solid white",
              width: { xs: "100%", md: "900px" },
              border: "1px solid #343434",
              bgcolor: "#181818",
              borderRadius: "12px",
              backgroundImage:
                "linear-gradient(to bottom right, #18181890, #F0874410)",
              p: 4,
            }}
          >
            <Typography
              sx={{
                color: "#F8F8F8",
                fontSize: { xs: "16px", md: "18px" },
                pb: 2,
              }}
            >
              Discover what the stars have in store for your journey
            </Typography>
            <Grid container rowGap={2}>
              <Grid item size={{ xs: 12, md: 6 }} sx={{ pr: { xs: 0, md: 1 } }}>
                <Typography
                  sx={{ color: "#FFFFFF" }}
                  fontSize={"16px"}
                  className="font-500"
                >
                  Name
                </Typography>
                <InputBase
                  type="text"
                  fullWidth
                  placeholder="Your Name..."
                  className="font-500"
                  sx={{
                    border: "1px solid #343434",
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }} sx={{ pl: { xs: 0, md: 1 } }}>
                <Typography
                  sx={{ color: "#FFFFFF" }}
                  fontSize={"16px"}
                  className="font-500"
                >
                  Email
                </Typography>
                <InputBase
                  type="email"
                  fullWidth
                  className="font-500"
                  placeholder="Your Email..."
                  sx={{
                    border: "1px solid #343434",
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }} sx={{ pr: { xs: 0, md: 1 } }}>
                <Typography
                  sx={{ color: "#FFFFFF" }}
                  fontSize={"16px"}
                  className="font-500"
                >
                  Phone
                </Typography>
                <InputBase
                  type="text"
                  fullWidth
                  className="font-500"
                  placeholder="Your Phone..."
                  sx={{
                    border: "1px solid #343434",
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }} sx={{ pl: { xs: 0, md: 1 } }}>
                <Typography
                  sx={{ color: "#FFFFFF" }}
                  fontSize={"16px"}
                  className="font-500"
                >
                  DOB
                </Typography>
                <InputBase
                  type="date"
                  fullWidth
                  className="font-500"
                  placeholder="..."
                  sx={{
                    border: "1px solid #343434",
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                    // Add this to make calendar icon white
                    '& input[type="date"]::-webkit-calendar-picker-indicator': {
                      filter: "invert(1)",
                      cursor: "pointer",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              className="font-600"
              fullWidth
              sx={{
                textTransform: "none",
                bgcolor: "#ef8644",
                color: "#FFFFFF",
                borderRadius: "50px",
                mt: 5,
                fontSize: "18px",
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Box>

        {/* <Paper elevation={3} sx={{ p: 4, width: 350, borderRadius: 3 }}>
          <Typography variant="h5" mb={2} textAlign="center">
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date of Birth"
              type="date"
              name="dob"
              InputLabelProps={{ shrink: true }}
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                mt: 2,
                bgcolor: "#f48643",
                "&:hover": { bgcolor: "#e06f28" },
              }}
            >
              {loading ? "Sending..." : "Book Now"}
            </Button>
          </form>
        </Paper> */}
      </Container>
    </Box>
  );
};
