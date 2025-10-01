import { FEATURES } from "@/constant";
import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const CardsContainer = ({ onScrollToForm, setServiceSelection }) => {
  const handleClick = (item) => {
    setServiceSelection(item.title);
    onScrollToForm();
  };
  return (
    <>
      <Box
        sx={{
          p: { xs: 1, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {FEATURES.map((item, key) => (
          <Box
            key={key}
            sx={{
              border:
                key === 1 ? "1.5px solid #ef864480" : "1.5px solid #343434",
              borderRadius: "10px",
              width: { xs: "100%", md: "400px" },
              px: 2,
              pt: 2,
              pb: 4,
              position: "relative",
              bgcolor: "#181818",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(to bottom right, #18181820, #F0874410)",
              "&:hover": {
                border: "1.5px solid #ef864480",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  bgcolor: "#22201F",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  borderRadius: "12px",
                }}
              >
                <Image
                  src={item.logo}
                  layout="intrinsic"
                  height={70}
                  width={70}
                />
              </Box>
            </Box>
            <Typography
              className="font-600"
              sx={{ color: "#FFFFFF", fontSize: "22px", mt: 2 }}
            >
              {item.title}
            </Typography>
            <Typography
              className="font-500"
              sx={{
                color: "#AEA19A",
                fontSize: "18px",
                my: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.content}
            </Typography>
            <Typography
              onClick={() => handleClick(item)}
              sx={{
                color: "#ef8644",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "20px",
              }}
              className="font-500"
            >
              Explore now <ArrowForwardRounded fontSize="small" />
            </Typography>
            <Box
              sx={{ position: "absolute", right: 0, top: 5, opacity: 0.012 }}
            >
              <Image src={item.zodiac_sign} height={200} width={200} />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
