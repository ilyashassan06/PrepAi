import React from "react";
import { Volume2 } from "lucide-react";
import {
  ArrowRight,
  Bookmark,
  Mic,
  PenLine,
} from "lucide-react";

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
            Question <span className="font-semibold text-white">2</span>{" "}
            <span className="text-slate-500">OF</span>{" "}
            <span className="font-semibold text-white">10</span>
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
        {/* ================================
    ANSWER SECTION
================================ */}

        <div className="rounded-xl border border-[#263654] bg-[#09162d] p-3 sm:p-4">
          {/* Heading */}
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Your Answer</h2>

            <span className="text-xs text-slate-400">0 / 2000</span>
          </div>

          {/* Textarea */}
          <div className="relative">
            <textarea
              placeholder="Type your answer here..."
              className="
        h-24
        w-full
        resize-none
        rounded-lg
        border
        border-[#263654]
        bg-[#0a172f]
        px-3
        py-3
        text-sm
        text-white
        outline-none
        placeholder:text-slate-500
        focus:border-violet-500
      "
            />

            <p className="absolute left-3 top-[43px] text-xs text-slate-500 pointer-events-none">
              You can write your answer or use voice recording.
            </p>
          </div>

          {/* ================================
      MODE BUTTONS
  ================================ */}

          <div className="mx-auto mt-4 grid max-w-[390px] grid-cols-2 gap-2">
            {/* Write Answer */}
            <button
              type="button"
              className="
        flex
        h-12
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        border-violet-500
        bg-violet-500/10
        text-white
      "
            >
              <PenLine size={18} />

              <div className="text-left">
                <p className="text-xs font-semibold">Write Answer</p>

                <p className="text-[10px] text-slate-500">Type your response</p>
              </div>
            </button>

            {/* Record Answer */}
            <button
              type="button"
              className="
        flex
        h-12
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        border-[#1b2a46]
        bg-[#0c1932]
        text-slate-300
        transition
        hover:border-slate-600
      "
            >
              <Mic size={18} />

              <div className="text-left">
                <p className="text-xs font-semibold">Record Answer</p>

                <p className="text-[10px] text-slate-500">
                  Click to start recording
                </p>
              </div>
            </button>
          </div>

          {/* ================================
      RECORDING AREA
  ================================ */}

          <div className="flex flex-col items-center py-6">
            {/* Microphone Circle */}
            <button
              type="button"
              className="
        relative
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-violet-500
        to-purple-600
        shadow-[0_0_0_12px_rgba(139,92,246,0.10)]
      "
            >
              {/* Outer ring */}
              <span
                className="
          absolute
          inset-[-10px]
          rounded-full
          border
          border-violet-500/10
        "
              />

              <Mic size={32} strokeWidth={2} className="text-white" />
            </button>

            {/* Timer + Waveform */}
            <div className="mt-5 flex items-center gap-5">
              <span className="text-sm font-medium text-slate-300">00:00</span>

              {/* Waveform */}
              <div className="flex h-8 items-center gap-[3px]">
                {[
                  8, 14, 20, 11, 25, 15, 28, 12, 22, 30, 17, 25, 13, 21, 10, 18,
                  24, 14, 28, 16, 10, 22, 14,
                ].map((height, index) => (
                  <span
                    key={index}
                    className="w-[2px] rounded-full bg-blue-500"
                    style={{
                      height: `${height}px`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Recording text */}
            <div className="mt-4 text-center">
              <p className="text-xs font-medium text-slate-300">
                Click to start recording
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Your answer will be transcribed automatically
              </p>
            </div>
          </div>

          {/* ================================
      BOTTOM BUTTONS
  ================================ */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Save Answer */}
            <div>
              <button
                type="button"
                className="
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-[#40506c]
          bg-transparent
          text-sm
          font-semibold
          text-slate-200
          transition
          hover:bg-slate-800/40
        "
              >
                <Bookmark size={18} />
                Save Answer
              </button>

              <p className="mt-2 text-center text-[10px] text-slate-500">
                Save your answer and continue later
              </p>
            </div>

            {/* Next Question */}
            <div>
              <button
                type="button"
                className="
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-gradient-to-r
          from-violet-600
          to-purple-600
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-violet-900/20
          transition
          hover:from-violet-500
          hover:to-purple-500
        "
              >
                Next Question
                <ArrowRight size={18} />
              </button>

              <p className="mt-2 text-center text-[10px] text-slate-500">
                Save and go to the next question
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewBox;
