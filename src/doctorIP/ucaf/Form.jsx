import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";

const UCAFForm = () => {
  const [caseManagementIncluded, setCaseManagementIncluded] = useState("no");

  const handleChange = (event) => {
    setCaseManagementIncluded(event.target.value);
  };

  return (
    <div className="my-4 box-style">
      <Typography variant="h6" gutterBottom>
        Is Case Management Form (CMF1.0) included?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="case-management-included"
          name="case-management-included"
          value={caseManagementIncluded}
          onChange={handleChange}
          row // This prop makes the radio buttons appear in a row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Possible Line Of Management"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Estimated Length Of Stay"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Expected Date Of Admission"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <div className="mt-3">
        <Button variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </div>
    </div>
  );
};

export default UCAFForm;
