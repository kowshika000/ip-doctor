import AddClinicalExamination from "./AddClinicalExamination";
import EditClinicalExamination from "./EditClinicalExamination";
import ClinicalExaminationHistory from "./ClinicalExaminationHistory";
import React, { useState, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Menu, MenuItem, Box } from '@mui/material';
import CustomTable from "../../../../components/Table";


function DisplayClinicalExamination() {
    const [addExaminationModal, setAddExaminationModal] = useState(false);
    const [viewHistoryModal, setViewHistoryModal] = useState(false);
    const [examinationAdded, setexaminationAdded] = useState([]);
    const [updatedExamination, setUpdatedExamination] = useState([]);
    const [editExaminationModal, setEditExaminationModal] = useState(false);
    const [selectedExamination, setSelectedExamination] = useState(null);

    const rows = [
        {
            id: 1,
            clinicalExamination: 'Headache',
        },
    ];

    const columns = [
        { field: 'clinicalExamination', headerName: 'Clinical Examination', flex: 1 },

        {
            field: 'options',
            headerName: 'Options',
            flex: 1,
            renderCell: (params) => <OptionsMenu row={params.row}
                updatedExamination={updatedExamination}
                setUpdatedExamination={setUpdatedExamination}
                setEditExaminationModal={setEditExaminationModal}
                setSelectedExamination={setSelectedExamination}
            />,
        },
    ];

    const handleAddExaminationModalOpen = () => {
        setAddExaminationModal(true);
    };

    const handleAddExaminationModalClose = () => {
        setAddExaminationModal(false);
    };

    const handleViewHistoryModalOpen = () => {
        setViewHistoryModal(true);
    };

    const handleViewHistoryModalClose = () => {
        setViewHistoryModal(false);
    };

    const Examination = (value) => {
        setexaminationAdded((prevExamination) => [...prevExamination, value]);
        setUpdatedExamination((prevExamination) => [...prevExamination, value]);
    };

    const handleEditExaminationModalClose = () => {
        setEditExaminationModal(false);
        setSelectedExamination(null);
    };

    return (
        <div>
            <Box sx={{ padding: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <h4>Clinical Examination</h4>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
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
    onClick={handleAddExaminationModalOpen}
>
    Add Clinical Examination
</Button>
<Button
    variant="contained"
    sx={{
        backgroundColor: "#f9ccac",
        color: "#000",
        "&:hover": {
            backgroundColor: "#f7b697",
        },
        marginLeft: 2,
    }}
    onClick={handleViewHistoryModalOpen}
>
    View History
</Button>

</Box>

                </Box>

                <Box sx={{ height: 400, width: '100%' }}>
                    <CustomTable rows={updatedExamination} columns={columns} onOptionClick={() => {}} />
                </Box>
            </Box>

            <Dialog open={addExaminationModal} onClose={handleAddExaminationModalClose} maxWidth="lg" fullWidth>
                <DialogTitle>Add Clinical Examination</DialogTitle>
                <DialogContent>
                    <AddClinicalExamination handleAddExaminationModalClose={handleAddExaminationModalClose} Examination={Examination} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddExaminationModalClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={viewHistoryModal} onClose={handleViewHistoryModalClose} maxWidth="md" fullWidth>
                <DialogTitle>View History</DialogTitle>
                <DialogContent>
                    <ClinicalExaminationHistory handleViewHistoryModalClose={handleViewHistoryModalClose} examinationAdded={examinationAdded} setUpdatedExamination={setUpdatedExamination} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleViewHistoryModalClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={editExaminationModal} onClose={handleEditExaminationModalClose} maxWidth="md" fullWidth>
                <DialogTitle>Edit Examination</DialogTitle>
                <DialogContent>
                    <EditClinicalExamination editSelectedComplaints={selectedExamination} setUpdatedExamination={setUpdatedExamination} handleEditExaminationModalClose={handleEditExaminationModalClose} updatedExamination={updatedExamination} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditExaminationModalClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const OptionsMenu = ({ row, updatedExamination, setUpdatedExamination, setSelectedExamination, setEditExaminationModal }) => {
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
            let deleteComplaint = updatedExamination.filter((item) => item.id !== row.id);
            setUpdatedExamination(deleteComplaint);
        }
        if (action === "edit") {
            setSelectedExamination(row);
            setEditExaminationModal(true);
        }
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuClick('edit')}>Edit Examination</MenuItem>
                <MenuItem onClick={() => handleMenuClick('delete')}>Delete Examination</MenuItem>
            </Menu>
        </div>
    );
};

export default DisplayClinicalExamination;
