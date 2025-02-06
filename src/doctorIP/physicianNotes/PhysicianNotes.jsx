import React from "react";
import Consultation from "./Consultation";
import Progress from "./ProgressNotes";
import Discharge from "./Discharge";

const PhysicianNotes = () => {
  return (
    <div className="full-screen-scrollable">
      <h5>Admission Notes</h5>
      <Consultation />
      <Progress />
      <Discharge />
    </div>
  );
};

export default PhysicianNotes;
