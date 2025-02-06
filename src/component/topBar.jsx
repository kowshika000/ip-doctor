import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const DoctorIpTopBar = () => {
  const [current, setCurrent] = useState("Referral");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          backgroundColor: "rgb(188, 208, 212)",
       
        }}
      >
        <SubMenu key="sub1" title="Subjective Data">
          <Menu.Item key="history">
            <Link to="/IpDoc/ip/subData/patientIllness">
              History of Present Illness
            </Link>
          </Menu.Item>
          <Menu.Item key="medicalHistory">
            <Link to="/IpDoc/ip/subData/medicalHistory">Medical History</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" title="Objective Data">
          <Menu.Item key="vitalSigns">
            <Link to="/IpDoc/ip/objData/vital">Vital Signs</Link>
          </Menu.Item>
          <Menu.Item key="nurseNotes">
            <Link to="/IpDoc/ip/objData/nurseNote">Nurse Notes</Link>
          </Menu.Item>
          <Menu.Item key="examination">
            <Link to="/IpDoc/ip/objData/examination">Examination</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" title="Assessment Data">
          <Menu.Item key="diagnosis">
            <Link to="/IpDoc/ip/assessmentData/diagnosis">Diagnosis</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" title="Plan">
          <Menu.Item key="investigation">
            <Link to="/IpDoc/ip/plan/investigation">Investigation</Link>
          </Menu.Item>
          <Menu.Item key="treatments">
            <Link to="/IpDoc/ip/plan/treatment">Treatments</Link>
          </Menu.Item>
          <Menu.Item key="medication">
            <Link to="/IpDoc/ip/plan/medication">Medication</Link>
          </Menu.Item>
          <Menu.Item key="orderBlood">
            <Link to="/IpDoc/ip/plan/orderBlood">Order Blood</Link>
          </Menu.Item>
          <Menu.Item key="consumables">
            <Link to="/IpDoc/ip/plan/consumable">Consumables</Link>
          </Menu.Item>
          <Menu.Item key="orderSheet">
            <Link to="/IpDoc/ip/plan/orderSheet">Order Sheet</Link>
          </Menu.Item>
          <Menu.Item key="diet">
            <Link to="/IpDoc/ip/plan/diet">Diet</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="physicianNotes">
          <Link to="/IpDoc/ip/physicianNotes">Physician Notes</Link>
        </Menu.Item>

        <Menu.Item key="progressNotes">
          <Link to="/IpDoc/ip/progressNotes">Progress Notes</Link>
        </Menu.Item>

        <Menu.Item key="documentsRemarks">
          <Link to="/IpDoc/ip/documentsRemarks">Documents & Remarks</Link>
        </Menu.Item>

        <Menu.Item key="surgeryOrder">
          <Link to="/IpDoc/ip/surgery">Surgery Order</Link>
        </Menu.Item>

        <Menu.Item key="preOperative">
          <Link to="/IpDoc/ip/preOperative">Pre-Operative Data</Link>
        </Menu.Item>

        <Menu.Item key="intraOperative">
          <Link to="/IpDoc/ip/intraOperative">Intra-Operative Data</Link>
        </Menu.Item>

        <Menu.Item key="pacuData">
          <Link to="/IpDoc/ip/pacuData">PACU Data</Link>
        </Menu.Item>

        <Menu.Item key="postOperative">
          <Link to="/IpDoc/ip/postOperative">Post-Operative Data</Link>
        </Menu.Item>

        <Menu.Item key="dischargeSummary">
          <Link to="/IpDoc/ip/dischargeSummary">Discharge Summary</Link>
        </Menu.Item>

        <Menu.Item key="followUp">
          <Link to="/IpDoc/ip/followUp">Follow Up</Link>
        </Menu.Item>

        <Menu.Item key="ucaf">
          <Link to="/IpDoc/ip/ucaf">UCAF</Link>
        </Menu.Item>

        <Menu.Item key="lifeSupportData">
          <Link to="/IpDoc/ip/lifeSupportData">Life Support Data</Link>
        </Menu.Item>

        <Menu.Item key="deliveryDetails">
          <Link to="/IpDoc/ip/deliveryDetails">Delivery Details</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DoctorIpTopBar;
