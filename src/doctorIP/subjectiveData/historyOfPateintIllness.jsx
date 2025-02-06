import { Box } from "@mui/material";
import ChiefComplaint from "./hopi/chiefComplaint";
import ReviewSystem from "./hopi/reviewSystem";

const HistoryOfPresentIllness = () => {
  return (
    <>
      <Box className="full-screen-scrollable">
        <h5>History Of Present Illness</h5>
       <ChiefComplaint/>
       <ReviewSystem/>
      </Box>
    </>
  );
};
export default HistoryOfPresentIllness;
