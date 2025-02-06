import React from "react";
import DoctorIpDashboard from "./landingPage/doctorIpDashboard";
import "./components/component.css";

const DoctorIP = () => {
  return (
    <div className="d-flex " style={{ flexDirection: "row" }}>
      <DoctorIpDashboard />
    </div>
  );
};

export default DoctorIP;
