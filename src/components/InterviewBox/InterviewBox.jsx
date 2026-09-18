import React from "react";
import { Volume2 } from "lucide-react";

function InterviewBox({ interviewData }) {
  return (
    <div className="mx-auto mt-5 flex w-full max-w-7xl flex-col ">

      {/* =========================================================
          QUESTION CARD
          Main container for the current interview question
      ========================================================= */}
      <div
        className="
          w-full
          rounded-2xl
          border
          border-[#2A3250]
          bg-[#10162A]
          px-5
          py-5
          md:px-6
          md:py-6
        "
      >

        {/* =======================================================
            TOP SECTION
            Contains:
            - Question number
            - Interview type
            - Difficulty
        ======================================================= */}
        <div className="flex items-center justify-between gap-4">

          {/* Question Number */}
          <p className="text-xs font-medium text-slate-300 md:text-sm">
            Question{" "}
            <span className="font-semibold text-white">
              2
            </span>{" "}

            <span className="text-slate-500">
              OF
            </span>{" "}

            <span className="font-semibold text-white">
              10
            </span>
          </p>


          {/* =====================================================
              INTERVIEW BADGES
          ===================================================== */}
          <div className="flex items-center gap-2">

            {/* Interview Type Badge */}
            {interviewData?.interviewType && (
              <span
                className="
                  rounded-full
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  px-3
                  py-1
                  text-[10px]
                  font-medium
                  text-violet-300
                  md:text-xs
                "
              >
                {interviewData.interviewType}
              </span>
            )}


            {/* Difficulty Badge */}
            {interviewData?.difficulty && (
              <span
                className="
                  rounded-full
                  border
                  border-yellow-500/30
                  bg-yellow-500/10
                  px-3
                  py-1
                  text-[10px]
                  font-medium
                  text-yellow-300
                  md:text-xs
                "
              >
                {interviewData.difficulty}
              </span>
            )}

          </div>
        </div>


        {/* =======================================================
            QUESTION SECTION
            Displays the actual interview question
        ======================================================= */}
        <div className="mt-5">

          <h1
            className="
              max-w-4xl
              text-xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-2xl
              md:text-3xl
            "
          >
            Explain the difference between useState and useReducer.
          </h1>

        </div>


        {/* =======================================================
            SPEAK QUESTION SECTION
            Contains:
            - Speak Question button
            - Audio waveform
            - Helper text
        ======================================================= */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-4
            border-b
            border-[#2A3250]
            pb-5
          "
        >

          {/* =====================================================
              SPEAK QUESTION BUTTON

              Later you can connect this button to Text-to-Speech
              so the AI actually speaks the question.
          ===================================================== */}
          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-linear-to-r
              from-violet-600
              to-purple-600
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-lg
              shadow-violet-600/20
              transition
              hover:scale-[1.02]
              hover:from-violet-500
              hover:to-purple-500
              md:px-5
              md:py-3
              md:text-sm
            "
          >

            {/* Speaker Icon */}
            <Volume2 size={17} />

            {/* Button Text */}
            Speak Question

          </button>


          {/* =====================================================
              AUDIO WAVEFORM + HELPER TEXT

              Currently this is only a visual waveform.
              Later you can make it animated when audio is playing.
          ===================================================== */}
          <div className="flex items-center gap-3">

            {/* Fake Audio Waveform */}
            <div className="flex h-7 items-center gap-[0.5]">

              <span className="h-3 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-5 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-7 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-4 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-6 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-3 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-5 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-7 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-4 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-6 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-3 w-[0.5] rounded-full bg-violet-500" />
              <span className="h-5 w-[0.5] rounded-full bg-violet-500" />

            </div>


            {/* Audio Helper Text */}
            <span className="text-xs text-slate-400">
              Listen to the question again
            </span>

          </div>

        </div>


        {/* =======================================================
            ANSWER SECTION

            We will build this next.

            It can contain:
            - Textarea for typing answer
            - Record Answer button
            - Save Answer button
            - Next Question button
        ======================================================= */}
        <div className="pt-5">

          {/* Answer UI will go here */}

        </div>

      </div>
    </div>
  );
}

export default InterviewBox;