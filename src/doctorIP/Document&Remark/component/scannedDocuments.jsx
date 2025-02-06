import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import AddScannedDocument from "./addScannedDocument";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ScannedDocuments = () => {
  const [addScannedDocModal, setAddScannedDocModal] = useState(false);
  const [uploadDocLabDataList, setUploadLabDocDataList] = useState([]);
  const [uploadDocApprovalDataList, setUploadApprovalDocDataList] = useState(
    []
  );

  // Modal handlers
  const handleAddScannedDocModalOpen = () => {
    setAddScannedDocModal(true);
  };

  const handleAddScannedDocModalClose = () => {
    setAddScannedDocModal(false);
  };

  // Add uploaded documents
  const uploadDocuments = (values) => {
    if (values.docuement === "Lab") {
      setUploadLabDocDataList((prev) => [...prev, values]);
    } else if (values.docuement === "Pre Approval") {
      setUploadApprovalDocDataList((prev) => [...prev, values]);
    }
  };

  // Generate file URL safely
  const getFileURL = (file) => {
    try {
      return URL.createObjectURL(file);
    } catch (error) {
      console.error("Invalid file:", file);
      return "#";
    }
  };

  // Render document links
  const renderDocuments = (dataList, documentType) => {
    if (dataList.length === 0) {
      return (
        <Typography variant="body2" color="textSecondary">
          No documents found
        </Typography>
      );
    }

    return (
      <Grid container spacing={2}>
        {dataList.map((item) =>
          item.docuement === documentType && item.file
            ? Object.keys(item.file).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <a
                    href={getFileURL(item.file[key])}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.file[key].name}
                  </a>
                </Grid>
              ))
            : null
        )}
      </Grid>
    );
  };

  return (
    <div>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h6>Scanned Documents</h6>
          <div className="custom-btn" onClick={handleAddScannedDocModalOpen}>
            Add Scanned Documents
          </div>
        </div>

        <div>
          {/* Lab Accordion */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Lab</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderDocuments(uploadDocLabDataList, "Lab")}
            </AccordionDetails>
          </Accordion>

          {/* Pre-Approval Accordion */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Pre Approval</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderDocuments(uploadDocApprovalDataList, "Pre Approval")}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Add Scanned Document Modal */}
      {addScannedDocModal && (
        <AddScannedDocument
          handleAddScannedDocModalClose={handleAddScannedDocModalClose}
          uploadDocuments={uploadDocuments}
          documentType={"Scanned Documents"}
        />
      )}
    </div>
  );
};

export default ScannedDocuments;
