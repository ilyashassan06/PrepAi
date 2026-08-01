import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#10162A]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-violet-400">PrepAI</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <button className="transition hover:text-white">
            Privacy
          </button>

          <button className="transition hover:text-white">
            Terms
          </button>

          <button className="transition hover:text-white">
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer