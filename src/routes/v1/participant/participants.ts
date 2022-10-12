import express from "express";
import { getCandidates, getInterviewers, addCandidates, addInterviewers } from "../../../controllers/v1/participant/participants";

const router = express.Router();

router.get("/candidates", getCandidates);
router.get("/interviewers", getInterviewers);




// 

router.post("/candidate",addCandidates);
router.post("/interviewer",addInterviewers);





// 

export default router;
