import React from "react";
import PatientInstructions from "./PatientInstuctionForm";
import Summary from "./Summary";
import DoctorSign from "./DoctorSign";
import { Box, Button, Typography } from "@mui/material";

const DischargeSummary = () => {
  return (
    <div className="full-screen-scrollable">
      <h5 className="mb-4">Discharge Summary</h5>
      <div>
        <Summary />
      </div>
      <div>
        <PatientInstructions />
      </div>
      <div>
        <DoctorSign />
      </div>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="contained" color="primary">
          Save Discharge Summary
        </Button>
        <Typography variant="body2" color="error">
          Clearances Not Yet Issued
        </Typography>
        <Button variant="contained" color="secondary">
          Print Discharge Summary
        </Button>
      </Box>
    </div>
  );
};

export default DischargeSummary;
