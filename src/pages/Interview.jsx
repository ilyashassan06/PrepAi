import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import InterviewHeader from "../components/InterviewHeader/InterviewHeader";
import InterviewBox from "../components/InterviewBox/InterviewBox";
import { useInterview } from "../Context/InterviewContext";

function Interview() {
  const location = useLocation();
  const interviewData = location.state;
  const{
     interviewQuestions,setinterviewQuestions,
            currentQuestion,setcurrentQuestion,
            answer,setanswer,fetchInterviewQuestions
  } = useInterview();




  useEffect(() => {
    if(!interviewData) return;
  fetchInterviewQuestions(interviewData)
    
  }, [])
  

  return (
    <div className="min-h-screen w-full bg-[#080B18] px-4 py-5 text-white md:px-6">

      {/* ================= Interview Header ================= */}

      <InterviewHeader interviewData={interviewData} />

      {/* ================= Interview Content ================= */}
      <InterviewBox interviewData={interviewData}/>

    </div>
  );
}

export default Interview;