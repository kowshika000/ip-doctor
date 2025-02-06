import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const DoctorIpSearch = () => {
  return (
    <div className="d-flex gap-4 w-100 flex-wrap">
      <TextField
        label="Search IP No"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />
      <TextField
        label="Search Admit Date"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
          width: 200,
        }}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Search Patient Name"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />
      <TextField
        label="Search Room"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />
      <TextField
        label="Search Ward"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />
      <TextField
        label="Search Mobile"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />
      <TextField
        label="Search Doctor"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />
      <TextField
        label="Search Insurance"
        variant="outlined"
        size="small"
        sx={{
          flexGrow: 1,
        }}
      />

      <FormControl
        size="small"
        sx={{
          flexGrow: 1,
          width: 200,
        }}
      >
        <InputLabel>Search Status</InputLabel>
        <Select label="Search Status">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="admitted">Admitted</MenuItem>
          <MenuItem value="preDischarge">Pre Discharge</MenuItem>
          <MenuItem value="discharge">Discharge</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DoctorIpSearch;
