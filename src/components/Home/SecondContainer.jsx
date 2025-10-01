import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CardsContainer } from "./CardsContainer";

export const SecondContainer = ({ onScrollToForm, setServiceSelection }) => {
  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              pt: 10,
              pb: 4,
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255, 140, 60, 0.3) 10%, rgba(255, 120, 40, 0.8) 25%, rgba(255, 100, 20, 1) 50%, rgba(255, 120, 40, 0.8) 75%, rgba(255, 140, 60, 0.3) 90%, transparent 100%)",
                boxShadow: "0 0 20px rgba(255, 120, 40, 0.4)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "1px",
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255, 160, 80, 0.4) 15%, rgba(255, 140, 60, 0.9) 30%, rgba(255, 120, 40, 1) 50%, rgba(255, 140, 60, 0.9) 70%, rgba(255, 160, 80, 0.4) 85%, transparent 100%)",
              },
            }}
          >
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
                  Popular Feature
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Let the stars lead your way.
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
                  Discover Our Most Popular{" "}
                  <span style={{ color: "#ef8644" }}>Astrology Feature</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#A2A2A2",
                    fontSize: { xs: "16px", md: "20px" },
                    mt: 2,
                  }}
                  className="font-500"
                  textAlign={"center"}
                >
                  Unlock deep insights with our top astrology tool, designed to
                  reveal your cosmic influences and guide your journey.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2, mb: 5 }}>
              <CardsContainer
                onScrollToForm={onScrollToForm}
                setServiceSelection={setServiceSelection}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
