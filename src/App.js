import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import DoctorIP from "./doctorIP/doctorIP";
import SurgeryOrder from "./doctorIP/SurgeryOrder/SurgeryOrder";
import PreOperative from "./doctorIP/preOperative/preOperative";
import IntraOperative from "./doctorIP/IntraOperative/intraOperative";
import PACUData from "./doctorIP/pacuData/pacuData";
import PostOperative from "./doctorIP/PostOperative/postOperative";
import DischargeSummary from "./doctorIP/DischargeSummary/DischargeSummary";
import FollowUp from "./doctorIP/FollowUp/FollowUp";
import UCAF from "./doctorIP/ucaf/ucaf";
import LifeSupportData from "./doctorIP/LifeSupportData/LifeSupportData";
import DeliveryDetails from "./doctorIP/DeliveryDetails/DeliveryDetails";
import PhysicianNotes from "./doctorIP/physicianNotes/PhysicianNotes";
import ProgressNotes from "./doctorIP/ProgressNotes/ProgressNotes";
import DocumentandRemarkIp from "./doctorIP/Document&Remark/DocumentRemark";
import HistoryOfPresentIllness from "./doctorIP/subjectiveData/historyOfPateintIllness";
import MedicalHistory from "./doctorIP/subjectiveData/medicalHistory";
import VitalSigns from "./doctorIP/objectiveData/vitalSigns";
import NurseNotes from "./doctorIP/objectiveData/nurseNotes";
import ExaminationIp from "./doctorIP/objectiveData/examination";
import DiagnosisIp from "./doctorIP/assessmentData.jsx/Diagnosis";
import Investigation from "./doctorIP/plan/Investigation";
import Treatments from "./doctorIP/plan/Treatments";
import Medication from "./doctorIP/plan/Medication";
import OrderBlood from "./doctorIP/plan/OrderBlood";
import Consumable from "./doctorIP/plan/Consumable";
import OrderSheet from "./doctorIP/plan/OrderSheet";
import Diet from "./doctorIP/plan/Diet";
import DoctorIpTopbar from "./component/topBar";

function Layout() {
  const location = useLocation();
  const showTopBar = location.pathname.startsWith("/IpDoc/ip");

  return (
    <>
      {showTopBar && <DoctorIpTopbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/IpDoc" />} />
        <Route path="/IpDoc" element={<DoctorIP />} />
        <Route path="/IpDoc/ip" element={<Navigate to="/IpDoc/ip/surgery" />} />
        <Route path="/IpDoc/ip/surgery" element={<SurgeryOrder />} />
        <Route path="/IpDoc/ip/preOperative" element={<PreOperative />} />
        <Route path="/IpDoc/ip/intraOperative" element={<IntraOperative />} />
        <Route path="/IpDoc/ip/pacuData" element={<PACUData />} />
        <Route path="/IpDoc/ip/postOperative" element={<PostOperative />} />
        <Route path="/IpDoc/ip/dischargeSummary" element={<DischargeSummary />} />
        <Route path="/IpDoc/ip/followUp" element={<FollowUp />} />
        <Route path="/IpDoc/ip/ucaf" element={<UCAF />} />
        <Route path="/IpDoc/ip/lifeSupportData" element={<LifeSupportData />} />
        <Route path="/IpDoc/ip/deliveryDetails" element={<DeliveryDetails />} />
        <Route path="/IpDoc/ip/physicianNotes" element={<PhysicianNotes />} />
        <Route path="/IpDoc/ip/progressNotes" element={<ProgressNotes />} />
        <Route path="/IpDoc/ip/documentsRemarks" element={<DocumentandRemarkIp />} />
        <Route path="/IpDoc/ip/subData/patientIllness" element={<HistoryOfPresentIllness />} />
        <Route path="/IpDoc/ip/subData/medicalHistory" element={<MedicalHistory />} />
        <Route path="/IpDoc/ip/objData/vital" element={<VitalSigns />} />
        <Route path="/IpDoc/ip/objData/nurseNote" element={<NurseNotes />} />
        <Route path="/IpDoc/ip/objData/examination" element={<ExaminationIp />} />
        <Route path="/IpDoc/ip/assessmentData/diagnosis" element={<DiagnosisIp />} />
        <Route path="/IpDoc/ip/plan/investigation" element={<Investigation />} />
        <Route path="/IpDoc/ip/plan/treatment" element={<Treatments />} />
        <Route path="/IpDoc/ip/plan/medication" element={<Medication />} />
        <Route path="/IpDoc/ip/plan/orderBlood" element={<OrderBlood />} />
        <Route path="/IpDoc/ip/plan/consumable" element={<Consumable />} />
        <Route path="/IpDoc/ip/plan/orderSheet" element={<OrderSheet />} />
        <Route path="/IpDoc/ip/plan/diet" element={<Diet />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
