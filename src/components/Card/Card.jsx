import React from "react";
import { BriefcaseBusiness } from "lucide-react";

function Card() {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-[#2A3250]
        bg-[#10162A]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:shadow-lg
        hover:shadow-violet-600/10
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-violet-600/15
          transition-all
          duration-300
          group-hover:bg-violet-600/20
        "
      >
        <BriefcaseBusiness
          size={23}
          strokeWidth={2}
          className="text-violet-400"
        />
      </div>

      {/* Content */}
      <div className="mt-4">

        {/* Label */}
        <p className="text-sm font-medium text-slate-400">
          Mock Interviews
        </p>

        {/* Number */}
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
          12
        </h2>

        {/* Growth */}
        <p className="mt-3 text-sm font-medium text-emerald-400">
          ↑ 3 this week
        </p>

      </div>
    </div>
  );
}

export default Card;