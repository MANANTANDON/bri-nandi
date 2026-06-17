import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import CalBri from "../Home/CalBri";

export const CalModal = ({ openCalModal, setOpenCalModal }) => {
  const handleClose = () => setOpenCalModal(false);

  return (
    <Modal
      open={openCalModal}
      onClose={handleClose}
      aria-labelledby="calendar-modal"
      aria-describedby="calendar-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto", // ✅ allows scrolling on small screens
        p: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: 1000 },
          maxHeight: "90vh", // ✅ prevents overflow outside screen
          overflowY: "auto", // ✅ enables internal scroll
          bgcolor: "#181818",
          border: "1px solid #343434",
          borderRadius: "12px",
          boxShadow: 24,
          outline: "none",
          WebkitOverflowScrolling: "touch", // ✅ smooth iOS scroll
        }}
      >
        {/* HEADER (Sticky) */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            bgcolor: "#181818",
            borderBottom: "1px solid #343434",
            px: { xs: 2, md: 4 },
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Typography
            id="calendar-modal"
            sx={{
              color: "#fff",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            Thank you! We've received your request and will get back to you
            within 24 hours. A confirmation email is on its way check your spam
            folder if you don't see it. You can also pick a time slot below for
            your consultation call, or skip it and we'll coordinate directly.
          </Typography>

          <IconButton
            onClick={handleClose}
            sx={{
              color: "#fff",
              mt: "-4px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* CONTENT */}
        <Box
          sx={{
            px: { xs: 2, md: 4 },
            py: 3,
          }}
        >
          <CalBri />
        </Box>
      </Box>
    </Modal>
  );
};
