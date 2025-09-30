import { Typography, InputBase, Grid } from "@mui/material";

export const CustomInputBase = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  gridSize = { xs: 12, md: 6 },
  gridPadding = { xs: 0, md: 1 },
  paddingLeft = false,
  inputProps = {},
  sx = {},
}) => {
  return (
    <Grid
      item
      size={gridSize}
      sx={{
        pr: paddingLeft ? 0 : gridPadding,
        pl: paddingLeft ? gridPadding : 0,
      }}
    >
      <Typography
        sx={{ color: "#FFFFFF" }}
        fontSize={"16px"}
        className="font-500"
      >
        {label}
      </Typography>
      <InputBase
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        className="font-500"
        placeholder={placeholder}
        required
        inputProps={inputProps}
        sx={{
          border: `1px solid ${error ? "#f44336" : "#343434"}`,
          borderRadius: "10px",
          bgcolor: "#181818",
          color: "#f8f8f8",
          px: 1.5,
          py: 0.7,
          fontSize: "16px",
          mt: 0.7,
          '& input[type="date"]::-webkit-calendar-picker-indicator, & input[type="time"]::-webkit-calendar-picker-indicator':
            {
              filter: "invert(1)",
              cursor: "pointer",
            },
          ...sx,
        }}
      />
      {error && (
        <Typography
          sx={{
            color: "#f44336",
            fontSize: "12px",
            mt: 0.5,
            ml: 1,
          }}
        >
          {error}
        </Typography>
      )}
    </Grid>
  );
};
