import { useFormik } from 'formik';
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
} from '@mui/material';


function AddComplaints({ handleAddComplaintsModalClose, complaints }) {
  const formik = useFormik({
    initialValues: {
      id: '',
      enteredBy: '',
      enteredDate: '',
      duration: '',
      quality: '',
      timing: '',
      symptoms: '',
      location: '',
      context: '',
      modifyFactor: '',
      painScale: '',
      chiefComplaint: '',
      remarks: '',
      severity: '',
    },
    onSubmit: (values) => {
      complaints(values);
      handleAddComplaintsModalClose();
    },
  });

  return (
    <Dialog open onClose={handleAddComplaintsModalClose} fullWidth maxWidth="lg">
      <DialogTitle>Add Chief Complaints</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            {[
              { label: 'ID', name: 'id' },
              { label: 'Entered By', name: 'enteredBy' },
              { label: 'Entered Date', name: 'enteredDate' },
              { label: 'Chief Complaint', name: 'chiefComplaint' },
              { label: 'Duration/Onset', name: 'duration' },
              { label: 'Quality', name: 'quality' },
              { label: 'Timing', name: 'timing' },
              { label: 'Associated Symptoms', name: 'symptoms' },
              { label: 'Location', name: 'location' },
              { label: 'Context', name: 'context' },
              { label: 'Modifying Factor', name: 'modifyFactor' },
              { label: 'Pain Scale', name: 'painScale', type: 'number' },
              { label: 'Remarks', name: 'remarks' },
              { label: 'Severity', name: 'severity' },
            ].map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  type={field.type || 'text'}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  variant="standard"
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddComplaintsModalClose} color="secondary">
            Close
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddComplaints;