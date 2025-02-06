import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomTable from "../../../../components/Table";
import AddConfidentalDetails from "./addConfidentalDetails";

function DisplayConfidentalDetails() {
  const [addConfidentalDetailsModal, setAddConfidentalDetailsModal] =
    useState(false);
  const [confidentalDetailsAdded, setConfidentalDetailsAdded] = useState([]);

  const columns = [
    { field: "confidentalDetails", headerName: "Confidental Detail", flex: 1 },
    { field: "options", headerName: "Options", flex: 0.5 },
  ];

  const handleAddConfidentalDetailsOpen = () => {
    setAddConfidentalDetailsModal(true);
  };

  const handleAddConfidentalDetailsClose = () => {
    setAddConfidentalDetailsModal(false);
  };

  const handleAddConfidentalDetailsSubmit = (newDetail) => {
    setConfidentalDetailsAdded((prev) => [
      ...prev,
      { id: prev.length + 1, confidentalDetails: newDetail.confidentaldetails },
    ]);
    setAddConfidentalDetailsModal(false);
  };

  const handleOptionClick = (event, row) => {
    console.log("Options clicked for:", row);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h4>Confidental Details</h4>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f9ccac",
            color: "#000",
            "&:hover": {
              backgroundColor: "#f7b697",
            },
          }}
          onClick={handleAddConfidentalDetailsOpen}
        >
          Add Confidental Details
        </Button>
      </div>

      <CustomTable
        columns={columns}
        rows={confidentalDetailsAdded}
        onOptionClick={handleOptionClick}
      />

      <AddConfidentalDetails
        open={addConfidentalDetailsModal}
        onClose={handleAddConfidentalDetailsClose}
        onSubmit={handleAddConfidentalDetailsSubmit}
      />
    </div>
  );
}
export default DisplayConfidentalDetails;
