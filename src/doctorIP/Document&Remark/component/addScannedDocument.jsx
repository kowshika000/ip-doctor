import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const AddScannedDocument = ({
  handleAddScannedDocModalClose,
  uploadDocuments,
}) => {
  const initialValues = {
    docuement: "",
    file: null,
  };

  const handleSubmit = (values) => {
    let errors = {};

    if (!values.docuement) {
      errors.category = "Please select a document type";
    }
    if (!values.file) {
      errors.file = "Please upload a file";
    }

    if (Object.keys(errors).length > 0) {
      alert("Please fill out all required fields");
      return;
    }

    uploadDocuments(values);
    handleAddScannedDocModalClose(); // Close the modal after successful upload
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, values, errors, touched }) => (
        <Dialog
          open={true} // Ensure the dialog is open
          onClose={handleAddScannedDocModalClose}
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle>Attachment</DialogTitle>
          <Form>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    select
                    fullWidth
                    label="Document Type"
                    name="docuement"
                    variant="standard"
                    helperText={
                      errors.category && touched.category && errors.category
                    }
                    error={errors.category && touched.category}
                  >
                    <MenuItem value="">Select a document</MenuItem>
                    <MenuItem value="Lab">Lab</MenuItem>
                    <MenuItem value="Pre Approval">Pre Approval</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    inputProps={{ multiple: true }}
                    onChange={(event) => {
                      const file = event.currentTarget.files;
                      setFieldValue("file", file);
                    }}
                    helperText={errors.file && touched.file && errors.file}
                    error={errors.file && touched.file}
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAddScannedDocModalClose} color="secondary">
                Close
              </Button>
              <Button type="submit" color="primary">
                Upload
              </Button>
            </DialogActions>
          </Form>
        </Dialog>
      )}
    </Formik>
  );
};

export default AddScannedDocument;
