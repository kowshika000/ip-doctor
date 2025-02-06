import React from "react";
import { Vital } from "./vital/Vital";
import Fluid from "./vital/fluid";
import IpCrud from "../components/IpCRUD";

const VitalSigns = () => {
  return (
    <div className="full-screen-scrollable">
      <Vital />
      <Fluid />
      <IpCrud type={"Pain Rate"} />
    </div>
  );
};

export default VitalSigns;
