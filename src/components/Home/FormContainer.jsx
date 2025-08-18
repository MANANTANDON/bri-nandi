"use client";
import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  Grid,
  InputBase,
  Alert,
  Snackbar,
} from "@mui/material";
import Image from "next/image";

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone number, only allow digits and limit to 10 characters
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation (only letters and spaces)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // DOB validation
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();

      if (dobDate > today) {
        newErrors.dob = "Date of birth cannot be in the future";
      } else if (age > 120) {
        newErrors.dob = "Please enter a valid date of birth";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      setNotification({
        open: true,
        message: "Please correct the errors in the form",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setNotification({
          open: true,
          message: "Appointment request sent successfully!",
          severity: "success",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          dob: "",
        });
      } else {
        setNotification({
          open: true,
          message: "Failed to send request. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        open: true,
        message: "An error occurred. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
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
            component="form"
            onSubmit={handleSubmit}
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Your Name..."
                  className="font-500"
                  required
                  sx={{
                    border: `1px solid ${errors.name ? "#f44336" : "#343434"}`,
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                  }}
                />
                {errors.name && (
                  <Typography
                    sx={{
                      color: "#f44336",
                      fontSize: "12px",
                      mt: 0.5,
                      ml: 1,
                    }}
                  >
                    {errors.name}
                  </Typography>
                )}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  className="font-500"
                  placeholder="Your Email..."
                  required
                  sx={{
                    border: `1px solid ${errors.email ? "#f44336" : "#343434"}`,
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                  }}
                />
                {errors.email && (
                  <Typography
                    sx={{
                      color: "#f44336",
                      fontSize: "12px",
                      mt: 0.5,
                      ml: 1,
                    }}
                  >
                    {errors.email}
                  </Typography>
                )}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  className="font-500"
                  placeholder="Your Phone..."
                  required
                  inputProps={{
                    maxLength: 10,
                    pattern: "[0-9]*",
                  }}
                  sx={{
                    border: `1px solid ${errors.phone ? "#f44336" : "#343434"}`,
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                  }}
                />
                {errors.phone && (
                  <Typography
                    sx={{
                      color: "#f44336",
                      fontSize: "12px",
                      mt: 0.5,
                      ml: 1,
                    }}
                  >
                    {errors.phone}
                  </Typography>
                )}
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
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  fullWidth
                  className="font-500"
                  placeholder="..."
                  required
                  sx={{
                    border: `1px solid ${errors.dob ? "#f44336" : "#343434"}`,
                    borderRadius: "10px",
                    bgcolor: "#181818",
                    color: "#f8f8f8",
                    px: 1.5,
                    py: 0.7,
                    fontSize: "16px",
                    mt: 0.7,
                    '& input[type="date"]::-webkit-calendar-picker-indicator': {
                      filter: "invert(1)",
                      cursor: "pointer",
                    },
                  }}
                />
                {errors.dob && (
                  <Typography
                    sx={{
                      color: "#f44336",
                      fontSize: "12px",
                      mt: 0.5,
                      ml: 1,
                    }}
                  >
                    {errors.dob}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              className="font-600"
              fullWidth
              disabled={loading}
              sx={{
                textTransform: "none",
                bgcolor: "#ef8644",
                color: "#FFFFFF",
                borderRadius: "50px",
                mt: 5,
                fontSize: "18px",
                "&:hover": {
                  bgcolor: "#d6743a",
                },
                "&:disabled": {
                  bgcolor: "#666666",
                  color: "#999999",
                },
              }}
            >
              {loading ? "Sending..." : "Book Appointment"}
            </Button>
          </Box>
        </Box>

        {/* Notification Snackbar */}
        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
            sx={{ width: "100%" }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};
