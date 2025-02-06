import React, { useState } from "react";
import NotesMdl from "../components/NotesMdl";

const Discharge = () => {
    const [notes, setNotes] = useState([]);

    const handleAddNote = (updatedNotes) => {
      setNotes(updatedNotes);
    };

  return (
    <NotesMdl
      title={"Discharge Notes"}
      rows={notes} 
      onAddNote={handleAddNote}  
      addBtnName={"Add Discharge Notes"}    
    />
  );
};

export default Discharge;
