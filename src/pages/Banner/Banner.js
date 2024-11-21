import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        backgroundColor: "primary.main",
        color: "white",
        padding: "16px",
        borderRadius: "8px",
        zIndex: 1000,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Banner
      </Typography>
      <Typography variant="body2">
        This is a sample banner for the embedding test.
      </Typography>
    </Box>
  );
};

export default Banner;
