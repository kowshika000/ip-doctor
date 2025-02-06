import { Box } from "@mui/material";
import DisplayPainRate from "./displayPainRate";

const PainRate = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          borderRadius: "8px",
          backgroundColor: "#f5fcff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          margin: " auto",
          maxWidth: "auto",
          marginTop: "15px",
          height: "350px",
          overflowY: "auto",
        }}
      >
        <DisplayPainRate />
      </Box>
    </>
  );
};
export default PainRate;
