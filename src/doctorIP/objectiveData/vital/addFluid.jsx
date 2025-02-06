import { Box, Dialog, DialogContent } from "@mui/material";
import React from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddFluid = ({ handleCloseAddFluid }) => {
  return (
    <Dialog open={true} onClose={handleCloseAddFluid} fullWidth maxWidth="lg">
      <DialogContent>
        <form>
          <Grid container spacing={2}>
            {/* INTAKE HEADER */}
            <Grid item xs={12}>
              <strong>INTAKE (mL)</strong>
            </Grid>

            {/* Intake Rows */}
            {[1, 2, 3].map((type) => (
              <React.Fragment key={`intake-${type}`}>
                <Grid item xs={2}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel>{`Type ${type}`}</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label={`Volume ${type} (mL)`}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </React.Fragment>
            ))}

            {/* OUTPUT HEADER */}
            <Grid item xs={12}>
              <strong>OUTPUT (mL)</strong>
            </Grid>

            {/* Output Rows */}
            {[
              "Drain 1",
              "Drain 2",
              "Drain 3",
              "NG/Vomitus",
              "Urine",
              "Stool/Stoma",
            ].map((label) => (
              <Grid item xs={2} key={label}>
                <TextField label={label} variant="standard" fullWidth />
              </Grid>
            ))}
          </Grid>
          {/* Save Button */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFluid;
