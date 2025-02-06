import DisplayComplaints from "./components/cheif complaints/displayComplaints";
import DisplayRos from "./components/cheif complaints/displayRos";
import DisplayClinicalExamination from "./components/cheif complaints/displayClinicalExamination";
import DisplayConfidentalDetails from "./components/cheif complaints/displayConfidentalDetails";
import React from "react";
import { Box, Grid, Paper } from "@mui/material";

function Examination() {
  return (
    <Box >
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <DisplayComplaints />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <DisplayRos />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <DisplayClinicalExamination />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <DisplayConfidentalDetails />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Examination;
