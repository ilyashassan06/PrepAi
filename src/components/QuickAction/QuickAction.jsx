import React from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  BrainCircuit,
  MessageSquareText,
  FileSearch,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Mock Interview",
    subtitle: "Practice with AI",
    icon: BriefcaseBusiness,
    button: "Start",
    link: "/InterviewSetup",
  },
  {
    title: "Practice Questions",
    subtitle: "Improve your skills",
    icon: BrainCircuit,
    button: "Practice",
    link: "/practice",
  },
  {
    title: "AI Feedback",
    subtitle: "Detailed analysis",
    icon: MessageSquareText,
    button: "View",
    link: "/feedback",
  },
  {
    title: "Resume Analyzer",
    subtitle: "ATS score check",
    icon: FileSearch,
    button: "Analyze",
    link: "/resume-analyzer",
  },
];

export default function QuickAction() {
  return (
    <section className="w-full rounded-2xl border border-[#2C3556] bg-[#10162A] p-5 lg:p-6">

      {/* ================= Heading ================= */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Jump into your interview preparation.
        </p>
      </div>

      {/* ================= Cards ================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.link}
              className="
                group
                flex
                min-h-[190px]
                flex-col
                justify-between
                rounded-2xl
                border
                border-[#2C3556]
                bg-[#181D30]
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/50
                hover:bg-[#1B2137]
                hover:shadow-xl
                hover:shadow-violet-500/10
              "
            >

              {/* ================= Card Content ================= */}
              <div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-violet-600
                    to-purple-600
                    shadow-lg
                    shadow-violet-600/20
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-[18px]
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {action.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1.5 text-sm text-slate-400">
                  {action.subtitle}
                </p>

              </div>

              {/* ================= Button ================= */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-violet-600
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-violet-700
                  group-hover:shadow-lg
                  group-hover:shadow-violet-600/20
                "
              >
                <span>{action.button}</span>

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>

            </Link>
          );
        })}

      </div>
    </section>
  );
}