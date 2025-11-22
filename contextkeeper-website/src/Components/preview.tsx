import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export function Preview() {
  return (
    <section className="w-screen h-[50vh] flex flex-col item-center justify-top">
      <div className="w-full h-full max-w-6xl mx-auto px-6 animate-fade-in-up">
        <div className="bg-[#1e1e1e]/60 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 transform transition-transform hover:scale-[1.01] duration-500">
          {/* Window Controls */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition-all cursor-pointer"></div>
            </div>
            <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              src/extension.ts — ContextKeeper
            </div>
            <div className="w-10"></div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="bg-[#1e1e1e] p-6 font-mono text-sm overflow-x-auto">
          <div className="flex">
            {/* Line Numbers */}
            <div className="text-gray-600 mr-4 select-none text-right">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
            </div>

            {/* Code Content */}
            <div className="w-full">
              {/* Import statements */}
              <div>
                <span className="text-[#569cd6]">import</span>{" "}
                <span className="text-gray-300">{"{"}</span>{" "}
                <span className="text-[#4ec9b0]">AIService</span>{" "}
                <span className="text-gray-300">{"}"}</span>{" "}
                <span className="text-[#569cd6]">from</span>{" "}
                <span className="text-[#ce9178]">
                  './services/real/AIService'
                </span>
                <span className="text-gray-300">;</span>
              </div>

              <div>
                <span className="text-[#569cd6]">import</span>{" "}
                <span className="text-gray-300">{"{"}</span>{" "}
                <span className="text-[#4ec9b0]">ElevenLabs</span>{" "}
                <span className="text-gray-300">{"}"}</span>{" "}
                <span className="text-[#569cd6]">from</span>{" "}
                <span className="text-[#ce9178]">
                  '@elevenlabs/elevenlabs-js'
                </span>
                <span className="text-gray-300">;</span>
              </div>

              <div className="h-4"></div>

              {/* Comment */}
              <div className="text-[#6a9955]">
                // Initialize Autonomous Agent
              </div>

              {/* Function declaration */}
              <div>
                <span className="text-[#569cd6]">const</span>{" "}
                <span className="text-[#dcdcaa]">initCopilot</span>{" "}
                <span className="text-gray-300">=</span>{" "}
                <span className="text-[#569cd6]">async</span>{" "}
                <span className="text-gray-300">{"() => {"}</span>
              </div>

              {/* Function body */}
              <div className="pl-4">
                <span className="text-[#569cd6]">const</span>{" "}
                <span className="text-gray-300">status =</span>{" "}
                <span className="text-[#569cd6]">await</span>{" "}
                <span className="text-[#dcdcaa]">detectIdleState</span>
                <span className="text-gray-300">();</span>
              </div>

              <div className="pl-4">
                <span className="text-[#569cd6]">if</span>{" "}
                <span className="text-gray-300">(status ===</span>{" "}
                <span className="text-[#ce9178]">'IDLE'</span>
                <span className="text-gray-300">) {"{"}</span>
              </div>

              {/* Typewriter line with react-type-animation */}
              <div className="pl-8">
                <TypeAnimation
                  sequence={[1000, "await analyzeCodebase();", 2000, "", 500]}
                  wrapper="span"
                  speed={50}
                  className="text-[#569cd6]"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: "inline-block" }}
                />
              </div>

              <div className="pl-4">
                <span className="text-gray-300">{"}"}</span>
              </div>

              <div>
                <span className="text-gray-300">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Status Bar */}
        <div className="bg-[#007acc] text-white text-xs px-3 py-1 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z" />
              </svg>
              main
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              0 Errors
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="animate-pulse">●</span>
            <span>Analysing...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
