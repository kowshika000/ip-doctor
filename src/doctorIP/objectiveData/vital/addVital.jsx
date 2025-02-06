import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { TextField, Grid, Box, Button } from "@mui/material";

export const AddVital = ({ handleCloseAddVital }) => {
  return (
    <Dialog open={true} onClose={handleCloseAddVital} fullWidth maxWidth="lg">
      <DialogContent>
        <Box
          sx={{
            // p: 4,
            // maxWidth: 600,
            mx: "auto",
            // boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <h6>Medical Parameters</h6>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Temperature (°C)"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="B.P (Systolic) (mmHg)"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="B.P (Diastolic) (mmHg)"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pulse (BPM)" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Respiratory (rpm)"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="O2 Saturation (%)"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Blood Sugar (mmol/L)"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Height (cm)" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Weight (kg)" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="BMI (Kg/m²)" variant="standard" fullWidth />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
