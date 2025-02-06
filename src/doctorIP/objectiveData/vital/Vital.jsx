import React, { useState } from "react";
import { AddVital } from "./addVital";

export const Vital = () => {
  const [addVital, setAddVital] = useState(false);
  const handleCloseAddVital = () => {
    setAddVital(false);
  };
  return (
    <div>
      <div className="header-container my-4">
        <h6>Vital Signs</h6>
        <div className="custom-btn" onClick={() => setAddVital(true)}>
          Add Vital Signs
        </div>
      </div>
      <div className="box-style"></div>
      {addVital && <AddVital handleCloseAddVital={handleCloseAddVital} />}
    </div>
  );
};
