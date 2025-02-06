import { useFormik } from "formik";
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

function AddDiagnosis({ handleAddDiagnosisModalClose, handleAddDiagnosis }) {
  const formik = useFormik({
    initialValues: {
      id: "",
      category: "",
      IcdCode: "",
      diagnosis: "",
    },
    onSubmit: (values) => {
      handleAddDiagnosis(values);
      handleAddDiagnosisModalClose();
    },
  });

  return (
    <Dialog
      open={true}
      onClose={handleAddDiagnosisModalClose}
      maxWidth="md"
      fullWidth
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
        <h6>Add Final Diagnosis</h6>
          <div className="row">
            {/* ID Field */}
            <div className="form-group" style={{ marginBottom: "16px" }}>
              <TextField
                fullWidth
                id="id"
                name="id"
                label="ID"
                placeholder="Enter ID"
                value={formik.values.id}
                onChange={formik.handleChange}
                variant="standard"
              />
            </div>

            {/* Category Dropdown */}
            <div className="form-group" style={{ marginBottom: "16px" }}>
              <FormControl fullWidth variant="standard">
                <InputLabel>Category</InputLabel>
                <Select
                  id="category"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  label="Category"
                >
                  <MenuItem value="">Select a Category</MenuItem>
                  <MenuItem value="Primary">Primary</MenuItem>
                  <MenuItem value="Secondary">Secondary</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* ICD Code Dropdown */}
            <div className="form-group" style={{ marginBottom: "16px" }}>
              <FormControl fullWidth variant="standard">
                <InputLabel>ICD Code</InputLabel>
                <Select
                  id="IcdCode"
                  name="IcdCode"
                  value={formik.values.IcdCode}
                  onChange={formik.handleChange}
                  label="ICD Code"
                >
                  <MenuItem value="">Select a ICD Code</MenuItem>
                  <MenuItem value="C25.0">C25.0</MenuItem>
                  <MenuItem value="A42.1">A42.1</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Diagnosis Dropdown */}
            <div className="form-group" style={{ marginBottom: "16px" }}>
              <FormControl fullWidth variant="standard">
                <InputLabel>Diagnosis</InputLabel>
                <Select
                  id="diagnosis"
                  name="diagnosis"
                  value={formik.values.diagnosis}
                  onChange={formik.handleChange}
                  label="Diagnosis"
                >
                  <MenuItem value="">Select a Diagnosis</MenuItem>
                  <MenuItem value="Malignant neoplasm of head of pancreas">
                    Malignant neoplasm of head of pancreas - C25.0
                  </MenuItem>
                  <MenuItem value="Abdominal actinomycosis">
                    Abdominal actinomycosis - A42.1
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDiagnosisModalClose} color="secondary">
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

export default AddDiagnosis;
