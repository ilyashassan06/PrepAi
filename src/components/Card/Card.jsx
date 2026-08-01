import React from 'react'


import { BriefcaseBusiness } from "lucide-react";

function Card() {
  return (
    <div className="group rounded-2xl border border-[#2A3250] bg-[#10162A] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-600/10">

      {/* Icon */}
      <div className="flex h-4 w-4 items-center justify-center rounded-2xl bg-violet-600/20">
        <BriefcaseBusiness size={26} className="text-violet-400" />
      </div>

      {/* Content */}
      <div className="mt-5">

        <p className="text-sm text-slate-400">
          Mock Interviews
        </p>

        <h2 className="mt-1 text-4xl font-bold text-white">
          12
        </h2>

        <p className="mt-4 text-sm font-medium text-emerald-400">
          ↑ 3 this week
        </p>

      </div>

    </div>
  );
}



export default Card
