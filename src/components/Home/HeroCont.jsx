// components/Home/HeroCont.jsx
import { StarBackground } from "@/components/StarBackground";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";
import { Box, Button, Typography } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";

export const HeroCont = ({ onScrollToForm }) => {
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
  }, [height]);

  return (
    <div
      style={{
        position: "relative",
        height: `${height}px`,
        overflow: "hidden",
        background: "#1F1F1F",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          height: "200px",
          background: "linear-gradient(to top, transparent,#1f1f1f)",
          zIndex: 100,
        }}
      >
        <Header onScrollToForm={onScrollToForm} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Suspense>
          <StarBackground />
        </Suspense>
      </div>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: { xs: -70, md: -180 },
          transform: "translateX(-50%) translateY(50%)",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          color: "#f48643",
        }}
        className="chartSpin"
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: "700px", md: "1000px" },
            width: { xs: "700px", md: "1000px" },
            overflow: "hidden",
            opacity: 0.3,
          }}
        >
          <Image
            src={"/chartwheel.svg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: "200px",
          background:
            "linear-gradient(to bottom, transparent 20%, #f48643 120%)",
        }}
      ></div>
      <Box
        sx={{
          position: "absolute",
          transform: {
            xs: "translateX(-50%) translateY(70%)",
            md: "translateX(-50%) translateY(60%)",
            lg: "translateX(-50%) translateY(48%)",
          },
          left: "50%",
          width: {
            xs: "calc(100% - 50px)",
            md: "calc(100% - 100px)",
            lg: "fit-content",
          },
          zIndex: 5,
        }}
      >
        <Typography
          fontSize={{ xs: "24px", sm: "42px", md: "52px" }}
          textAlign={"center"}
          sx={{ color: "#FFFFFF" }}
          className="font-700"
        >
          Unlock the secrets of the,
        </Typography>
        <Typography
          fontSize={{ xs: "24px", sm: "42px", md: "52px" }}
          className="font-700"
          textAlign={"center"}
          sx={{ my: { xs: -0.5, sm: -1.6, md: -2 }, color: "#FFFFFF" }}
        >
          stars and <span style={{ color: "#f48643" }}>discover your</span>
        </Typography>
        <Typography
          fontSize={{ xs: "24px", sm: "42px", md: "52px" }}
          className="font-700"
          textAlign={"center"}
          sx={{ color: "#FFFFFF" }}
        >
          cosmic path
        </Typography>

        <Typography
          sx={{
            color: "#f8f8f8",
            textAlign: "center",
            mt: { xs: 3, md: 1 },
            fontSize: { xs: "14px", sm: "16px" },
          }}
          className="font-500"
        >
          Discover your cosmic destiny with horoscopes, birth charts, and
          personalized insights. Let the stars guide your journey!
        </Typography>

        <Button
          sx={{
            mt: 4,
            textTransform: "none",
            py: 1,
            bgcolor: "#f48643",
            border: "1px solid #f48643",
            color: "#f8f8f8",
            fontSize: { xs: "16px", md: "20px" },
            borderRadius: "100px",
          }}
          className="font-500"
          fullWidth
          endIcon={<ArrowForwardRounded />}
          onClick={onScrollToForm}
        >
          Let the stars lead your way
        </Button>
      </Box>
    </div>
  );
};
