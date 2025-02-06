import React, { useState } from "react";
import NotesMdl from "../components/NotesMdl";

const Consultation = () => {
    const [notes, setNotes] = useState([]);

    const handleAddNote = (updatedNotes) => {
      setNotes(updatedNotes);
    };

  return (
    <NotesMdl
      title={"Consultation Notes"}
      rows={notes} 
      onAddNote={handleAddNote}  
      addBtnName={"Add Consultation Notes"}
    />
  );
};

export default Consultation;
