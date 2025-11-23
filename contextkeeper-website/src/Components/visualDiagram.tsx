import { useState, useEffect } from "react";

export function HowItWorksAnimated() {
  const [animateFlow, setAnimateFlow] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => setAnimateFlow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-screen min-h-screen bg-[#050505] py-20 px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-gray-400 text-lg">
          Seamless integration from your editor to the cloud
        </p>
      </div>

      {/* Feature Badges */}
      <div className="max-w-7xl mx-auto mb-16 space-y-4">
        {/* Badge 1: Demo Ready */}
        <div
          className={`group bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-500 flex items-center gap-4 ${
            animateFlow
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-mono text-lg">
              <span className="text-gray-400">src/services/mock/*</span>
              <span className="text-gray-600 mx-3">//</span>
              <span className="text-green-400">Demo Ready</span>
            </p>
          </div>
        </div>

        {/* Badge 2: Zero-Config Swap */}
        <div
          className={`group bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex items-center gap-4 ${
            animateFlow
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-mono text-lg">
              Zero-Config Swap to Real Services
            </p>
          </div>
        </div>

        {/* Badge 3: Firestore & Cloudflare Ready */}
        <div
          className={`group bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex items-center gap-4 ${
            animateFlow
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-mono text-lg">
              Firestore & Cloudflare Ready
            </p>
          </div>
        </div>
      </div>

      {/* Flow Diagram */}
      <div
        className={`max-w-7xl mx-auto bg-[#1a1a1a]/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/5 transition-all duration-700 ${
          animateFlow ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* VSCode Box */}
          <div
            className={`flex flex-col items-center group transition-all duration-500 ${
              animateFlow
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#2d2d2d] rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-gray-400 group-hover:text-white transition-colors"
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
            </div>
            <p className="mt-4 text-gray-400 font-mono text-sm md:text-base group-hover:text-white transition-colors">
              VSCode
            </p>
          </div>

          {/* Connection Line 1 */}
          <div className="hidden md:block flex-shrink-0">
            <svg className="w-16 h-2" viewBox="0 0 60 8" fill="none">
              <line
                x1="0"
                y1="4"
                x2="60"
                y2="4"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className={animateFlow ? "animate-dash" : ""}
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4B5563" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Arrow for mobile */}
          <div className="md:hidden">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* ContextKeeper Box (Center - Highlighted) */}
          <div
            className={`flex flex-col items-center group relative transition-all duration-500 ${
              animateFlow ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center border-2 border-blue-400/50 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:scale-110">
              {/* CPU/Chip Icon */}
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <p className="mt-4 text-blue-400 font-mono text-sm md:text-base font-bold">
              ContextKeeper
            </p>
          </div>

          {/* Connection Line 2 */}
          <div className="hidden md:block flex-shrink-0">
            <svg className="w-16 h-2" viewBox="0 0 60 8" fill="none">
              <line
                x1="0"
                y1="4"
                x2="60"
                y2="4"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className={animateFlow ? "animate-dash" : ""}
              />
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Arrow for mobile */}
          <div className="md:hidden">
            <svg
              className="w-8 h-8 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Cloudflare/Gemini Box */}
          <div
            className={`flex flex-col items-center group transition-all duration-500 ${
              animateFlow
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#2d2d2d] rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-110">
              {/* Cloud Icon */}
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-gray-400 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <p className="mt-4 text-gray-400 font-mono text-sm md:text-base group-hover:text-white transition-colors">
              Cloudflare/Gemini
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -16;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
