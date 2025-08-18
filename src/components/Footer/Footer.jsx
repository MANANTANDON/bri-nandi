import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Box sx={{ borderTop: "1.5px solid #343434", py: 4 }}>
        <Container maxWidth="xl">
          <Grid container alignItems={"center"}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box>
                <a href="/">
                  <Image
                    src={"/logo2.png"}
                    layout="intrinsic"
                    height={80}
                    width={150}
                  />
                </a>
              </Box>
            </Grid>
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                mt: { xs: 5, md: 0 },
                display: "flex",
                flexDirection: { xs: "column", md: "row-reverse" },
                gap: { xs: 1, md: 2 },
              }}
            >
              <Typography
                component={"a"}
                href="/privacy-policy"
                sx={{ color: "#F8F8F8" }}
                className="font-500"
              >
                Privacy Policy
              </Typography>
              <Typography
                component={"a"}
                href="/tnc"
                sx={{ color: "#F8F8F8" }}
                className="font-500"
              >
                Terms and Conditions
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: { xs: 4, md: 1 } }}>
            <Typography
              className="font-400"
              sx={{ fontSize: "14px", color: "#F8f8F8" }}
            >
              Powered By © Snowchild Studios
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};
