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
    subtitle: "ATS Score Check",
    icon: FileSearch,
    button: "Analyze",
    link: "/resume-analyzer",
  },
];

export default function QuickAction() {
  return (
    <section className="w-full rounded-2xl border border-slate-800 bg-[#10162A] p-5 lg:p-6">

      {/* Heading */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white md:text-2xl">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Jump into your interview preparation.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.link}
              className="group flex min-h-[210px] flex-col justify-between rounded-2xl border border-slate-700 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-white lg:text-lg">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {action.subtitle}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white transition group-hover:bg-violet-700">
                <span>{action.button}</span>

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}