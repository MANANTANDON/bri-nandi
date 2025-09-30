"use client";
import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Alert,
  Snackbar,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Image from "next/image";
import { CustomInputBase } from "../FormControl/CustomInputBase";
import { FEATURES } from "@/constant"; // Adjust path as needed

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    pob: "",
    tob: "",
    service: "", // This will now hold the service OBJECT or empty string
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
    pob: "",
    tob: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // ⭐ FIX: Parse the JSON string from MenuItem back into an object for 'service' field
    if (name === "service" && typeof value === "string" && value !== "") {
      try {
        newValue = JSON.parse(value);
      } catch (error) {
        console.error("Error parsing service JSON:", error);
        newValue = ""; // Reset or handle error gracefully
      }
    }
    // ⭐ END FIX

    // For phone number, only allow digits and limit to 10 characters
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      // Use the parsed object (or original value for other fields)
      setFormData({ ...formData, [name]: newValue });
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

    // Place of Birth validation
    if (!formData.pob.trim()) {
      newErrors.pob = "Place of birth is required";
    } else if (formData.pob.trim().length < 2) {
      newErrors.pob = "Place of birth must be at least 2 characters long";
    }

    // Time of Birth validation
    if (!formData.tob) {
      newErrors.tob = "Time of birth is required";
    }

    // Service validation - now checks if it's an object with a title property
    if (
      !formData.service ||
      typeof formData.service !== "object" ||
      !formData.service.title
    ) {
      newErrors.service = "Please select a service";
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
      // The API is now robust, but to ensure consistency, we send the entire formData which includes the 'service' object.
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
          pob: "",
          tob: "",
          service: "",
        });
      } else {
        setNotification({
          open: true,
          message:
            result.message || "Failed to send request. Please try again.",
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
              <CustomInputBase
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name..."
                error={errors.name}
              />

              <CustomInputBase
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email..."
                error={errors.email}
                paddingLeft={true}
              />

              <CustomInputBase
                label="Phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone..."
                error={errors.phone}
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]*",
                }}
              />

              <CustomInputBase
                label="DOB"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                placeholder="..."
                error={errors.dob}
                paddingLeft={true}
              />

              <CustomInputBase
                label="Place of Birth"
                name="pob"
                type="text"
                value={formData.pob}
                onChange={handleChange}
                placeholder="Place of Birth..."
                error={errors.pob}
              />

              <CustomInputBase
                label="Time of Birth"
                name="tob"
                type="time"
                value={formData.tob}
                onChange={handleChange}
                placeholder="..."
                error={errors.tob}
                paddingLeft={true}
              />

              {/* Service Selection Field - MUI Select */}
              <Grid item size={12}>
                <Typography
                  sx={{
                    color: "#F8F8F8",
                    fontSize: "14px",
                    mb: 1,
                  }}
                >
                  Select Service *
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  name="service"
                  // Pass the stringified object for comparison in value, or use a unique ID if you refactor.
                  // Since formData.service is an object, but MenuItem values are strings, we stringify
                  // formData.service to match the MenuItem values for the Select component to work.
                  value={
                    formData.service ? JSON.stringify(formData.service) : ""
                  }
                  onChange={handleChange}
                  displayEmpty
                  sx={{
                    bgcolor: "#1f1f1f",
                    color: formData.service ? "#FFFFFF" : "#888888",
                    border: errors.service
                      ? "1px solid #f44336"
                      : "1px solid #343434",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused": {
                      border: "1px solid #ef8644",
                    },
                    "& .MuiSelect-icon": {
                      color: "#FFFFFF",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "#1f1f1f",
                        border: "1px solid #343434",
                        "& .MuiMenuItem-root": {
                          color: "#FFFFFF",
                          "&:hover": {
                            bgcolor: "#2a2a2a",
                          },
                          "&.Mui-selected": {
                            bgcolor: "#ef8644",
                            "&:hover": {
                              bgcolor: "#d6743a",
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="">
                    <Typography sx={{ color: "#FFFFFF" }}>
                      Select a service...
                    </Typography>
                  </MenuItem>
                  {FEATURES.map((feature, index) => (
                    <MenuItem key={index} value={JSON.stringify(feature)}>
                      {feature.title} - ₹{feature.price}
                    </MenuItem>
                  ))}
                </Select>
                {errors.service && (
                  <FormHelperText sx={{ color: "#f44336", ml: 1 }}>
                    {errors.service}
                  </FormHelperText>
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

        {/* Notification Snackbar - Positioned at top center */}
        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
