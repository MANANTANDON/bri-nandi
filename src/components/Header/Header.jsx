import { MENU } from "@/constant";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Header = ({ onScrollToForm }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
    onScrollToForm();
  };

  return (
    <>
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
          <a href="/">
            <Image
              src={"/logo2.png"}
              layout="intrinsic"
              height={60}
              width={130}
            />
          </a>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 5,
          }}
        >
          {MENU?.map((item, key) => (
            <Typography
              component={"a"}
              href={item.link}
              key={key}
              className={router?.asPath === item.link ? "font-700" : "font-400"}
              sx={{
                color: router?.asPath === item.link ? "#f48643" : "#FFFFFF",
                textDecoration: "none",
                position: "relative",
                transition: "color 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -2,
                  width: router?.asPath === item.link ? "100%" : 0,
                  height: "2px",
                  backgroundColor: "#f48643",
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  color: "#f48643",
                  "&::after": {
                    width: "100%",
                  },
                },
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{
              textTransform: "none",
              color: "#FFFFFF",
              bgcolor: "#f48643",
              border: "2px solid #323232",
              px: 3.5,
              py: 1,
              fontSize: "16px",
              borderRadius: "100px",
            }}
            className="font-500"
            onClick={onScrollToForm}
          >
            Book Now
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            sx={{ bgcolor: "#181818", border: "2px solid #262626" }}
            onClick={() => setOpen(true)}
          >
            <MenuRounded sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Box>
      </Container>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: "100%",
            bgcolor: "#1f1f1f",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Box>
              <a href="/">
                <Image
                  src={"/logo.png"}
                  layout="intrinsic"
                  height={60}
                  width={130}
                />
              </a>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                sx={{ bgcolor: "#181818", border: "2px solid #262626" }}
                onClick={() => setOpen(false)}
              >
                <CloseRounded sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {MENU?.map((item, key) => (
              <Box
                component={"a"}
                href={item.link}
                sx={{
                  py: 2.5,
                  px: 2,
                  bgcolor: router?.asPath === item.link && "#f4864320",
                  borderBottom: "2px solid #262626",
                  "&:hover": {
                    bgcolor: "#f4864320",
                  },
                }}
              >
                <Typography
                  component={"a"}
                  href={item.link}
                  key={key}
                  className={
                    router?.asPath === item.link ? "font-700" : "font-400"
                  }
                  sx={{
                    color: router?.asPath === item.link ? "#f48643" : "#FFFFFF",
                    textDecoration: "none",
                    position: "relative",
                    transition: "color 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      width: router?.asPath === item.link ? "100%" : 0,
                      height: "2px",
                      backgroundColor: "#f48643",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: "#f48643",
                      "&::after": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 5, px: 4 }}>
            <Button
              onClick={handleClick}
              fullWidth
              sx={{
                textTransform: "none",
                color: "#FFFFFF",
                bgcolor: "#f48643",
                border: "2px solid #323232",
                px: 3.5,
                py: 1,
                fontSize: "16px",
                borderRadius: "100px",
              }}
              className="font-500"
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
