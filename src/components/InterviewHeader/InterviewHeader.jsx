import React from 'react'
import {
  BrainCircuit,
  Clock3,
  CircleHelp,
} from "lucide-react";
function InterviewHeader({interviewData}) {
  return (
   <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          gap-5
          rounded-2xl
          border
          border-[#2A3250]
          bg-[#10162A]
          px-4
          py-4
          shadow-lg
          shadow-black/10
          md:flex-row
          md:items-center
          md:justify-between
          md:px-5
        "
      >

        {/* ================= Left Side ================= */}
        <div className="flex min-w-0 items-center gap-3 md:gap-4">

          {/* Interview Icon */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-linear-to-br
              from-violet-600
              to-purple-700
              text-white
              shadow-lg
              shadow-violet-600/20
              md:h-14
              md:w-14
            "
          >
            <BrainCircuit
              size={24}
              strokeWidth={2}
            />
          </div>

          {/* Interview Information */}
          <div className="min-w-0">

            {/* Title */}
            <h1
              className="
                truncate
                text-lg
                font-bold
                tracking-tight
                text-white
                md:text-xl
              "
            >
              {interviewData?.role || "Frontend Developer"} Interview
            </h1>

            {/* Badges */}
            <div className="mt-2 flex flex-wrap gap-1.5 md:gap-2">

              {/* Company */}
              {interviewData?.company && (
                <span
                  className="
                    rounded-full
                    border
                    border-[#38415F]
                    bg-[#181D30]
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-slate-300
                    md:px-3
                    md:text-xs
                  "
                >
                  {interviewData.company}
                </span>
              )}

              {/* Interview Type */}
              {interviewData?.interviewType && (
                <span
                  className="
                    rounded-full
                    border
                    border-violet-500/30
                    bg-violet-500/10
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-violet-300
                    md:px-3
                    md:text-xs
                  "
                >
                  {interviewData.interviewType}
                </span>
              )}

              {/* Difficulty */}
              {interviewData?.difficulty && (
                <span
                  className="
                    rounded-full
                    border
                    border-yellow-500/30
                    bg-yellow-500/10
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-yellow-300
                    md:px-3
                    md:text-xs
                  "
                >
                  {interviewData.difficulty}
                </span>
              )}

            </div>

          </div>
        </div>

        {/* ================= Right Side ================= */}
        <div className="flex items-center justify-between gap-4 md:justify-end">

          {/* Question Progress */}
          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-violet-500/10
                text-violet-400
              "
            >
              <CircleHelp size={18} />
            </div>

            <div>
              <p className="text-[11px] text-slate-500">
                Question
              </p>

              <p className="text-sm font-semibold text-white">
                1 <span className="text-slate-500">/ 10</span>
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-[#2A3250] md:block" />

          {/* Timer */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-violet-500/20
              bg-violet-500/10
              px-3
              py-2
            "
          >
            <Clock3
              size={17}
              className="text-violet-400"
            />

            <span className="text-sm font-semibold text-white">
              09:42
            </span>
          </div>

        </div>

      </div>

  )
}

export default InterviewHeader
