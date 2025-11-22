import { useState } from "react";
export function Homepage() {
  const [HoveredButton, setHoveredButton] = useState<string | null>(null);
  return (
    <div className="bg-[#050505] w-screen h-[90vh] relative flex flex-col items-center">
      {/* System Status tag */}
      <div className="absolute top-14 flex items-center gap-2 p-1.5 px-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
        </div>
        <span className="text-gray-400 font-mono text-sm">
          System Status: <span className="text-green-400">Autonomous</span>
        </span>
      </div>
      {/* Body */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-y-8 text-6xl md:text-7xl lg:text-8xl ">
          <p className="font-bold text-white">The AI Copilot That</p>
          <p className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent py-2">
            Works while you're away
          </p>
        </div>
        <div className="w-[50%] flex justify-center items-center text-xl md:text-2xl mt-4">
          <p className="text-gray-300">
            ContextKeeper analyzes your codebase, identifies bugs, and creates
            fixes autonomously when you go idle. It even speaks to you.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          {/* Download Extension Button*/}
          <button
            onMouseEnter={() => setHoveredButton("download")}
            onMouseLeave={() => setHoveredButton(null)}
            className="group cursor-pointer relative bg-[#007acc] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(0,122,204,0.3)] hover:shadow-[0_0_60px_rgba(0,122,204,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              Download Extension
            </span>
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          {/* NPM Run Demo Button */}
          <button
            onMouseEnter={() => setHoveredButton("demo")}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative px-8 py-4 cursor-pointer hover:text-white px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <span className="text-white group-hover:text-blue-400 transition-colors duration-300">
                &gt;_
              </span>
              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                npm run demo
              </p>
            </div>
          </button>
        </div>
      </div>
      {/* Buttons */}
    </div>
  );
}
