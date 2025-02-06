import React, { useState } from "react";
import { Dialog, DialogContent, TextField, Grid, Button } from "@mui/material";

const AddChiefComplaint = ({ handleClose }) => {
  const [inputValues, setInputValues] = useState({
    // chiefComplaint: '',
    duration: "",
    location: "",
    quality: "",
    context: "",
    timing: "",
    modifyingFactor: "",
    associatedSymptoms: "",
    remarks: "",
    painScale: "",
    severity: "",
  });

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogContent>
      <h6>Chief Complaint</h6>
        <Grid container spacing={3}>
          {/* Chief Complaint */}
         
          {/* <Grid item xs={12} sm={6}>
            <TextField
              name="chiefComplaint"
              label="Chief Complaint"
              fullWidth
              variant="standard"
              value={inputValues.chiefComplaint}
              onChange={handleChange}
            />
          </Grid> */}

          {/* Duration/Onset */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="duration"
              label="Add New Duration"
              fullWidth
              variant="standard"
              value={inputValues.duration}
              onChange={handleChange}
            />
          </Grid>

          {/* Location */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="location"
              label="Add New Location"
              fullWidth
              variant="standard"
              value={inputValues.location}
              onChange={handleChange}
            />
          </Grid>

          {/* Quality */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="quality"
              label="Add New Quality"
              fullWidth
              variant="standard"
              value={inputValues.quality}
              onChange={handleChange}
            />
          </Grid>

          {/* Context */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="context"
              label="Add New Context"
              fullWidth
              variant="standard"
              value={inputValues.context}
              onChange={handleChange}
            />
          </Grid>

          {/* Timing */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="timing"
              label="Add New Timing"
              fullWidth
              variant="standard"
              value={inputValues.timing}
              onChange={handleChange}
            />
          </Grid>

          {/* Modifying Factor */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="modifyingFactor"
              label="Add New Modify Factor"
              fullWidth
              variant="standard"
              value={inputValues.modifyingFactor}
              onChange={handleChange}
            />
          </Grid>

          {/* Associated Symptoms */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="associatedSymptoms"
              label="Add New Symptoms"
              fullWidth
              variant="standard"
              value={inputValues.associatedSymptoms}
              onChange={handleChange}
            />
          </Grid>

          {/* Remarks */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="remarks"
              label="Remarks"
              fullWidth
              variant="standard"
              value={inputValues.remarks}
              onChange={handleChange}
            />
          </Grid>

          {/* Pain Scale */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="painScale"
              label="Pain Scale (0-10)"
              fullWidth
              variant="standard"
              value={inputValues.painScale}
              onChange={handleChange}
            />
          </Grid>

          {/* Severity */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="severity"
              label="Severity"
              fullWidth
              variant="standard"
              value={inputValues.severity}
              onChange={handleChange}
            />
          </Grid>

          {/* Actions */}
          <Grid item xs={12} alignSelf={"center"}>
          <Button onClick={handleClose} variant="contained">
              Save
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Close
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddChiefComplaint;
