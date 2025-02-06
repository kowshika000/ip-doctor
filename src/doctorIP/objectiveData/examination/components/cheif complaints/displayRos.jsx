import React, { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RosHistory from "./RosHistory";
import AddRos from "./addRos";
import {
  IconButton,
  Menu,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import CustomTable from "../../../../components/Table";

function DisplayRos() {
  const [viewHistoryModal, setViewHistoryModal] = useState(false);
  const [addRosModal, setAddRosModal] = useState(false);
  const [reviewsAdded, setReviewsAdded] = useState([]);
  const [updatedReviewRowList, setUpdatedReviewRowList] = useState([]);

//   const rows = [
//     {
//       id: 1,
//       specialization: "Headache",
//       symptoms: [1, 2, 3, 4, 5],
//       otherSystemResponse: [{ Obj: [1, 2, 3, 4, 5] }],
//     },
//   ];

  const columns = [
    { field: "specialization", headerName: "Specialization", flex: 1 },
    { field: "symptoms", headerName: "Symptoms", flex: 1 },
    {
      field: "otherSystemResponse",
      headerName: "Other System Response",
      flex: 1,
    },
    {
      field: "options",
      headerName: "Options",
      flex: 1,
      renderCell: (params) => (
        <OptionsMenu
          row={params.row}
          setUpdatedReviewRowList={setUpdatedReviewRowList}
          updatedReviewRowList={updatedReviewRowList}
        />
      ),
    },
  ];

  const handleAddRosModalOpen = () => {
    setAddRosModal(true);
  };

  const handleAddRosModalClose = () => {
    setAddRosModal(false);
  };

  const handleViewHistoryModalOpen = () => {
    setViewHistoryModal(true);
  };

  const handleViewHistoryModalClose = () => {
    setViewHistoryModal(false);
  };

  const reviews = (value) => {
    setReviewsAdded((prevReviews) => [...prevReviews, value]);
  };

  useEffect(() => {
    // Update Rows with new data
    let updatedRowResult = reviewsAdded.map((item, index) => {
      const key = Object.keys(item.checkedItems)[0];
      const values = item.checkedItems[key].join(",");
      const result = `${key} - ${values}`;
      return {
        id: index + 1,
        specialization: item.specialization.label,
        symptoms: item.symptoms,
        otherSystemResponse: result,
      };
    });
    setUpdatedReviewRowList(updatedRowResult);
  }, [reviewsAdded]);

  return (
    <div>
      <Card variant="outlined" sx={{ marginBottom: 3 }}>
        <CardHeader
          title="Review Of System"
          action={
            <div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f9ccac",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#f7b697",
                  },
                  mr: 2,
                }}
                onClick={handleAddRosModalOpen}
              >
                Add Review Of System
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f9ccac",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#f7b697",
                  },
                  mr: 2,
                }}
                onClick={handleViewHistoryModalOpen}
              >
                View ROS History
              </Button>
            </div>
          }
        />
        <CardContent>
          <div style={{ height: 400, width: "100%" }}>
            <CustomTable columns={columns} rows={updatedReviewRowList} />
          </div>
        </CardContent>
      </Card>

      {addRosModal && (
        <AddRos
          handleAddRosModalClose={handleAddRosModalClose}
          reviews={reviews}
        />
      )}
      {viewHistoryModal && (
        <RosHistory
          handleViewHistoryModalClose={handleViewHistoryModalClose}
          reviewsAdded={reviewsAdded}
          setUpdatedReviewRow={setUpdatedReviewRowList}
        />
      )}
    </div>
  );
}

const OptionsMenu = ({
  row,
  updatedReviewRowList,
  setUpdatedReviewRowList,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (action) => {
    handleClose();
    if (action === "delete") {
      const deleteRow = updatedReviewRowList.filter(
        (item) => item.id !== row.id
      );
      setUpdatedReviewRowList(deleteRow);
    }
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleMenuClick("delete")}>
          Delete ROS
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DisplayRos;
