import React from "react";
import { useLocation } from "react-router-dom";

import InterviewHeader from "../components/InterviewHeader/InterviewHeader";
import InterviewBox from "../components/InterviewBox/InterviewBox";

function Interview() {
  const location = useLocation();
  const interviewData = location.state;

  console.log(interviewData);

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