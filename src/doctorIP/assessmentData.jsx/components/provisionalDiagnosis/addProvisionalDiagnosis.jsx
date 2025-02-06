import { useFormik } from "formik";
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField,
} from "@mui/material";

function AddProvisionalDiagnosis({
  handleAddProvisionalDiagnosisModalClose,
  ProvisionalDiagnosis,
}) {
  const formik = useFormik({
    initialValues: {
      id: "",
      provisionalDiagnosis: "",
      enteredDate: new Date(),
    },
    onSubmit: (values) => {
      ProvisionalDiagnosis(values);
      handleAddProvisionalDiagnosisModalClose();
    },
  });

  return (
    <Dialog
      open={true}
      onClose={handleAddProvisionalDiagnosisModalClose}
      fullWidth
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <h6>Add Provisional Diagnosis</h6>

          <div className="form-group">
            <TextField
              label="ID"
              id="id"
              name="id"
              type="text"
              fullWidth
              value={formik.values.id}
              onChange={formik.handleChange}
              variant="standard"
              sx={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group">
            <TextField
              label="Provisional Diagnosis"
              id="provisionalDiagnosis"
              name="provisionalDiagnosis"
              type="text"
              fullWidth
              value={formik.values.provisionalDiagnosis}
              onChange={formik.handleChange}
              variant="standard"
              sx={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group">
            <TextField
              label="Entered Date and Time"
              id="enteredDate"
              name="enteredDate"
              type="text"
              fullWidth
              value={formik.values.enteredDate}
              onChange={formik.handleChange}
              variant="standard"
              sx={{ marginBottom: "10px" }}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleAddProvisionalDiagnosisModalClose}
            color="secondary"
          >
            Close
          </Button>
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddProvisionalDiagnosis;
