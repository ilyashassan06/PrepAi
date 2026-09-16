import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import {
  User,
  Mail,
  BriefcaseBusiness,
  Building2,
  ArrowRight,
  UploadCloud,
  FileText,
  BrainCircuit,
  Clock3,
  GraduationCap,
  MessageSquareText,
} from "lucide-react";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import { useForm } from "react-hook-form";
import AiTipCard from "../components/InterviewSetup/AiTipCard";
import FormFooter from "../components/InterviewSetup/FormFooter";

function InterviewSetup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [resumeFile, setresumeFile] = useState(null)
  const [resumeName, setResumeName] = useState("");
const [resumeText,setResumeText] = useState("")
  
  // function to extract resume text
const extractResumeText =async (file)=>{
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    const pageText = content.items
      .map((item) => item.str)
      .join(" ");

    text += pageText + "\n";
  }

  return text;
}

  // form submit function 
  const onSubmit = (data) => {
    console.log(data);
    console.log(resumeText);
    console.log(resumeName);
  };

  return (
    <div className="relative flex w-full  overflow-hidden justifu-center min-h-screen bg-slate-950 text-white">

      {/* ================= Background Blur ================= */}

      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />

      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* ================= Main Layout ================= */}

      <div className="relative z-10 flex flex-col lg:flex-row">

        {/* ======================================================
                    LEFT SIDE
        ======================================================= */}

        

        {/* ======================================================
                    RIGHT SIDE
        ======================================================= */}

        <div className="flex w-full justify-center py-8 px-4">

          <div className="w-full  lg:w-[68%]  rounded-3xl border border-[#2C3556] bg-[#111827]/80 backdrop-blur-xl p-6 md:p-10">

            {/* Mobile Logo */}

            <div className="flex lg:hidden justify-center items-center gap-3 mb-10">

              <div className="h-12 w-12 rounded-xl bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center font-bold">
                PA
              </div>

              <h2 className="text-3xl font-bold">
                Prep
                <span className="text-violet-500">AI</span>
              </h2>

            </div>

            {/* Heading */}

            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Interview Setup
            </h1>

            <p className="text-gray-400 text-center mt-3">
              Tell us a little about your interview so our AI can
              personalize the experience.
            </p>

         

            {/* ================= Form ================= */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-7"
            >

              {/* Name + Email */}

              <div className="grid md:grid-cols-2 gap-6">

                {/* Name */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Your Name
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <User size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />

                  </div>

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}

                </div>

                  <div>

                  <label className="block mb-2 text-gray-300">
                    Interview Role
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <BriefcaseBusiness
                      size={18}
                      className="text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Frontend Developer"
                      {...register("role", {
                        required: "Role is required",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />

                  </div>

                  {errors.role && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.role.message}
                    </p>
                  )}

                </div>
                

              </div>

              {/* Job Role + Company */}

              <div className="grid md:grid-cols-2 gap-6">

                {/* Job Role */}

                

                {/* Company */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Company Name
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <Building2
                      size={18}
                      className="text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Google"
                      {...register("company")}
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />

                  </div>

                </div>

                {/* Experience */}

                <div>
                  <label className="block mb-2 text-gray-300">
                    Experience Level
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <GraduationCap
                      size={18}
                      className="text-gray-400"
                    />

                    <select
                      {...register("experience", {
                        required: "Experience is required",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none text-white"
                    >
                      <option className="bg-[#181D30]" value="">
                        Select Experience
                      </option>

                      <option className="bg-[#181D30]">
                        Fresher
                      </option>

                      <option className="bg-[#181D30]">
                        0 - 1 Years
                      </option>

                      <option className="bg-[#181D30]">
                        1 - 3 Years
                      </option>

                      <option className="bg-[#181D30]">
                        3 - 5 Years
                      </option>

                      <option className="bg-[#181D30]">
                        5+ Years
                      </option>

                    </select>

                  </div>

                  {errors.experience && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.experience.message}
                    </p>
                  )}

                </div>

              </div>
                            {/* ================= Interview mode + Interview Type ================= */}

              <div className="grid md:grid-cols-2 gap-6">

                

                {/* Interview Type */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Interview Type
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <BrainCircuit
                      size={18}
                      className="text-gray-400"
                    />

                    <select
                      {...register("interviewType", {
                        required: "Select interview type",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none text-white"
                    >
                      <option className="bg-[#181D30]" value="">
                        Select Type
                      </option>

                      <option className="bg-[#181D30]">
                        Technical
                      </option>

                      <option className="bg-[#181D30]">
                        HR
                      </option>

                      <option className="bg-[#181D30]">
                        Behavioral
                      </option>

                      <option className="bg-[#181D30]">
                        System Design
                      </option>

                      <option className="bg-[#181D30]">
                        Mixed
                      </option>

                    </select>

                  </div>

                  {errors.interviewType && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.interviewType.message}
                    </p>
                  )}

                </div>
                <div>

                  <label className="block mb-2 text-gray-300">
                    Interview Mode
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <BrainCircuit
                      size={18}
                      className="text-gray-400"
                    />

                    <select
                      {...register("interviewMode", {
                        required: "Select interview Mode",
                      })}
                      className="w-full bg-transparent px-3 py-4 outline-none text-white"
                    >
                      <option className="bg-[#181D30]" value="">
                        Select Type
                      </option>

                     

                      <option className="bg-[#181D30]">
                        Typing
                      </option>

                      <option className="bg-[#181D30]">
                        Voice
                      </option>

                      <option className="bg-[#181D30]">
                        Mixed
                      </option>

                    </select>

                  </div>

                  {errors.interviewMode && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.interviewMode.message}
                    </p>
                  )}

                </div>

              </div>

              {/* ================= Difficulty + Duration ================= */}

              <div className="grid md:grid-cols-2 gap-6">

                {/* Difficulty */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Difficulty
                  </label>

                  <div className="grid grid-cols-3 gap-3">

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        value="Easy"
                        {...register("difficulty")}
                        className="hidden peer"
                      />

                      <div className="rounded-xl border border-green-500/30 bg-green-500/10 py-3 text-center transition-all peer-checked:bg-green-500 peer-checked:text-white">
                        Easy
                      </div>

                    </label>

                    <label className="cursor-pointer">

                      <input
                        type="radio"
                        value="Medium"
                        defaultChecked
                        {...register("difficulty")}
                        className="hidden peer"
                      />

                      <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 py-3 text-center transition-all peer-checked:bg-yellow-500 peer-checked:text-black">
                        Medium
                      </div>

                    </label>

                    <label className="cursor-pointer">

                      <input
                        type="radio"
                        value="Hard"
                        {...register("difficulty")}
                        className="hidden peer"
                      />

                      <div className="rounded-xl border border-red-500/30 bg-red-500/10 py-3 text-center transition-all peer-checked:bg-red-500 peer-checked:text-white">
                        Hard
                      </div>

                    </label>

                  </div>

                </div>

                {/* Duration */}

                <div>

                  <label className="block mb-2 text-gray-300">
                    Interview Duration
                  </label>

                  <div className="flex items-center rounded-xl border border-[#2C3556] bg-[#181D30] px-4">

                    <Clock3
                      size={18}
                      className="text-gray-400"
                    />

                    <select
                      {...register("duration")}
                      className="w-full bg-transparent px-3 py-4 outline-none text-white"
                    >
                      <option className="bg-[#181D30]">
                        10 Minutes
                      </option>

                      <option className="bg-[#181D30]">
                        20 Minutes
                      </option>

                      <option className="bg-[#181D30]">
                        30 Minutes
                      </option>

                      <option className="bg-[#181D30]">
                        45 Minutes
                      </option>

                      <option className="bg-[#181D30]">
                        60 Minutes
                      </option>

                    </select>

                  </div>

                </div>

              </div>

              {/* ================= Resume Upload ================= */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="text-gray-300">
                    Resume
                  </label>

                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-400">
                    Optional
                  </span>

                </div>

                <label
                  htmlFor="resume"
                  className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#38415f] bg-[#181D30] py-10 transition hover:border-violet-500 hover:bg-[#20263d]"
                >

                  <UploadCloud
                    size={45}
                    className="text-violet-400 group-hover:scale-110 transition"
                  />

                  <h3 className="mt-4 font-semibold">
                    Upload Resume
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Drag & Drop or Click to Upload
                  </p>

                  <p className="text-xs text-gray-500 mt-2">
                    PDF • DOC • DOCX
                  </p>

                  {resumeName && (

                    <div className="mt-5 flex items-center gap-2 rounded-lg bg-violet-500/15 px-4 py-2">

                      <FileText
                        size={18}
                        className="text-violet-400"
                      />

                      <span className="text-sm">
                        {resumeName}
                      </span>

                    </div>

                  )}

                </label>

                <input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={async (e) =>{
                      const file = e.target.files?.[0];

                      if(!file) return;
                    setResumeName(
                     file.name || ""
                    )
                  setresumeFile(file)
                  const text = await extractResumeText(file)
                  setResumeText(text)
                  }
                    
                  }
                />

              </div>

              {/* ================= Instructions ================= */}

              <div>

                <label className="mb-2 block text-gray-300">
                  Additional Instructions
                </label>

                <div className="rounded-xl border border-[#2C3556] bg-[#181D30] p-4">

                  <div className="flex items-start gap-3">

                    <MessageSquareText
                      size={18}
                      className="text-gray-400 mt-1"
                    />

                    <textarea
                      rows={5}
                      maxLength={300}
                      placeholder="Example: Focus more on React Hooks, JavaScript, REST APIs and state management..."
                      {...register("instructions")}
                      className="w-full resize-none bg-transparent outline-none"
                    />

                  </div>

                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Optional notes for AI to personalize your interview.
                </p>

              </div>

              {/* ================= AI Tip Card ================= */}
                  <AiTipCard/>
                            {/* ================= Footer ================= */}

              <FormFooter/>

              {/* ================= Buttons ================= */}

              <div className="flex flex-col-reverse md:flex-row gap-4 pt-2">

                <button
                  type="button"
                  className="w-full md:w-auto rounded-xl border border-[#2C3556] bg-[#181D30] px-8 py-4 font-semibold transition hover:bg-[#222b42]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="group w-full flex-1 rounded-xl bg-linear-to-r from-violet-600 to-purple-700 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-700/30"
                >
                  <span className="flex items-center justify-center gap-2">

                    Start AI Interview

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </span>

                </button>

              </div>

              {/* ================= Bottom Text ================= */}

              <p className="text-center text-sm text-gray-500 pt-4 leading-6">
                By starting this interview, you agree that your responses
                may be analyzed by AI to generate personalized feedback and
                improve your interview performance.
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default InterviewSetup;