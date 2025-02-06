import { useFormik } from "formik";
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField,
} from "@mui/material";

function AddManagementPlan({
  handleAddManagementPlanModalClose,
  ManagementPlan,
}) {
  const formik = useFormik({
    initialValues: {
      id: "",
      plan: "",
      enteredBy: "",
      enteredDate: new Date(),
    },
    onSubmit: (values) => {
      ManagementPlan(values);
      console.log(values, "values");
      handleAddManagementPlanModalClose();
    },
  });

  return (
    <Dialog
      open={true}
      onClose={handleAddManagementPlanModalClose}
      maxWidth="sm"
      fullWidth
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <h6>Add Management Plan</h6>
          <div className="row">
            <div className="form-group">
              <TextField
                fullWidth
                label="ID"
                id="id"
                name="id"
                placeholder="Enter id"
                onChange={formik.handleChange}
                value={formik.values.id}
                variant="standard"
                sx={{marginBottom:"10px"}}
              />
            </div>
            <div className="form-group">
              <TextField
                fullWidth
                label="Plan"
                id="plan"
                name="plan"
                placeholder="Enter the plan"
                onChange={formik.handleChange}
                value={formik.values.plan}
                variant="standard"
                sx={{marginBottom:"10px"}}
              />
            </div>
            <div className="form-group">
              <TextField
                fullWidth
                label="Entered By"
                id="enteredBy"
                name="enteredBy"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.enteredBy}
                variant="standard"
                sx={{marginBottom:"10px"}}
              />
            </div>
            <div className="form-group">
              <TextField
                fullWidth
                label="Entered Date and Time"
                id="enteredDate"
                name="enteredDate"
                onChange={formik.handleChange}
                value={formik.values.enteredDate}
                variant="standard"
                sx={{marginBottom:"10px"}}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddManagementPlanModalClose} color="secondary">
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

export default AddManagementPlan;
