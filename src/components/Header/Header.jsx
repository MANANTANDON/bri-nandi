import { MENU } from "@/constant";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography component={"a"} href="/" sx={{ color: "#FFFFFF" }}>
          Bri Nandi
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        {MENU?.map((item, key) => (
          <Typography
            component={"a"}
            href={item.link}
            key={key}
            sx={{ color: "#FFFFFF" }}
          >
            {item.name}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};
