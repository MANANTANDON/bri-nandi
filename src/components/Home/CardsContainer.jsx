"use client";
import { FEATURES } from "@/constant";
import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const CardsContainer = ({ onScrollToForm, setServiceSelection }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setServiceSelection(item.title);
    onScrollToForm();
  };

  const handleExplore = (item) => {
    setSelectedItem(item);
    setOpen(true);
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {" "}
                <Typography
                  className="font-500"
                  onClick={() => handleExplore(item)}
                  sx={{
                    textTransform: "none",
                    color: "#ef8644",
                    fontSize: "17px",
                    cursor: "pointer",
                  }}
                >
                  Explore
                </Typography>
                <ArrowForwardRounded
                  sx={{ color: "#ef8644", mt: 0.5 }}
                  fontSize="small"
                />
              </Box>
              <Button
                onClick={() => handleClick(item)}
                sx={{
                  textTransform: "none",
                  color: "#ffffff",
                  fontSize: "16px",
                  bgcolor: "#ef8644",
                  px: 2,
                  borderRadius: "30px",
                  zIndex: 1,
                }}
                className="font-400"
              >
                Select Service
              </Button>
            </Box>
            <Box
              sx={{ position: "absolute", right: 0, top: 5, opacity: 0.012 }}
            >
              <Image src={item.zodiac_sign} height={200} width={200} />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Modal with proper children */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#181818",
            border: "1px solid #343434",
            borderRadius: "12px",
            p: 4,
            maxWidth: "600px",
            width: "95%",
            maxHeight: "100vh",
            overflow: "auto",
            position: "relative",
          }}
        >
          {selectedItem && (
            <>
              <Typography
                className="font-600"
                sx={{ color: "#FFFFFF", fontSize: "28px", mb: 2 }}
              >
                {selectedItem.title}
              </Typography>

              <Typography
                className="font-500"
                sx={{
                  color: "#AEA19A",
                  fontSize: "16px",
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {selectedItem.content}
              </Typography>

              <Typography
                className="font-600"
                sx={{ color: "#ef8644", fontSize: "24px", mb: 3 }}
              >
                ₹{selectedItem.price}
              </Typography>

              {/* Important Information Box */}
              <Box
                sx={{
                  bgcolor: "#22201F",
                  border: "1px solid #ef864440",
                  borderRadius: "8px",
                  p: 2.5,
                  mb: 3,
                }}
              >
                <Typography
                  className="font-600"
                  sx={{
                    color: "#ef8644",
                    fontSize: "16px",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      bgcolor: "#ef8644",
                    }}
                  />
                  Important Information
                </Typography>
                <Typography
                  className="font-400"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    mb: 1,
                  }}
                >
                  <strong>Follow-up Consultation:</strong> Get a follow-up
                  session within 15 days of your initial booking @ just ₹
                  {(selectedItem.price / 2).toFixed(0)}.
                </Typography>
                <Typography
                  className="font-400"
                  sx={{
                    color: "#AEA19A",
                    fontSize: "13px",
                    fontStyle: "italic",
                    mt: 1.5,
                  }}
                >
                  * Please keep your Customer ID handy for follow-up bookings.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  onClick={() => {
                    setOpen(false);
                    handleClick(selectedItem);
                  }}
                  sx={{
                    bgcolor: "#ef8644",
                    color: "#FFFFFF",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    borderRadius: "30px",
                    fontSize: "16px",
                    "&:hover": {
                      bgcolor: "#d6743a",
                    },
                  }}
                  className="font-500"
                >
                  Book Now
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  sx={{
                    border: "1px solid #343434",
                    color: "#FFFFFF",
                    px: 3,
                    py: 0.5,
                    textTransform: "none",
                    borderRadius: "30px",
                    fontSize: "16px",
                    "&:hover": {
                      border: "1px solid #ef8644",
                    },
                  }}
                  className="font-500"
                >
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};
