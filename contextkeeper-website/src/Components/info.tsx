export function Info() {
  interface CardInfo {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string; // 'blue', 'purple', 'orange', 'green'
    tags: string[];
  }

  const cardMaker = (props: CardInfo) => {
    const colorClasses = {
      blue: {
        border: "hover:border-blue-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(0,122,204,0.2)]",
        gradient: "from-gray-800 to-gray-900",
        gradientOverlay: "from-blue-500/5",
        hover: "group-hover:text-blue-400",
        tag: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      },
      purple: {
        border: "hover:border-purple-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
        gradient: "from-gray-800 to-gray-900",
        gradientOverlay: "from-purple-500/5",
        hover: "group-hover:text-purple-400",
        tag: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      },
      orange: {
        border: "hover:border-orange-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]",
        gradient: "from-gray-800 to-gray-900",
        gradientOverlay: "from-orange-500/5",
        hover: "group-hover:text-orange-400",
        tag: "bg-orange-500/10 border-orange-500/30 text-orange-400",
      },
      green: {
        border: "hover:border-green-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]",
        gradient: "from-gray-800 to-gray-900",
        gradientOverlay: "from-green-500/5",
        hover: "group-hover:text-green-400",
        tag: "bg-green-500/10 border-green-500/30 text-green-400",
      },
    };
    const colors = colorClasses[props.color as keyof typeof colorClasses];
    return (
      <>
        <div
          className={`group relative bg-[#1e1e1e]/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 ${colors.border} transition-all duration-500 hover:scale-[1.02] ${colors.shadow}`}
        >
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${colors.gradientOverlay} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>

          <div className="relative z-10">
            {/* Icon */}
            <div
              className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {props.icon}
            </div>

            {/* Title */}
            <h3
              className={`text-2xl font-bold text-white mb-4 ${colors.hover} transition-colors duration-300`}
            >
              {props.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              {props.description}
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 ${colors.tag} border rounded-full text-sm font-mono`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  const cards: CardInfo[] = [
    {
      title: "Google Gemini",
      description:
        "Using Gemini API, the extension detects when you stop typing and automatically scans your recent changes for bugs and optimizations.",
      color: "blue",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gemini-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#4285F4", stopOpacity: 1 }}
              />
              <stop
                offset="25%"
                style={{ stopColor: "#9B72F2", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#D96570", stopOpacity: 1 }}
              />
              <stop
                offset="75%"
                style={{ stopColor: "#F2A25C", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#34A853", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          {/* Main sparkle shape */}
          <path
            d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
            fill="url(#gemini-gradient)"
          />
          {/* Secondary sparkle */}
          <path
            d="M19 14L19.8 16.8L22 17.5L19.8 18.2L19 21L18.2 18.2L16 17.5L18.2 16.8L19 14Z"
            fill="url(#gemini-gradient)"
            opacity="0.8"
          />
          {/* Tertiary sparkle */}
          <path
            d="M6 3L6.5 5L8.5 5.5L6.5 6L6 8L5.5 6L3.5 5.5L5.5 5L6 3Z"
            fill="url(#gemini-gradient)"
            opacity="0.8"
          />
        </svg>
      ),
      tags: ["AI Analysis", "Auto-scan"],
    },
    {
      title: "ElevenLabs Voice",
      description:
        "Integrated with ElevenLabs. Instead of just red squiggly lines, your editor talks to you, explaining complex issues out loud.",
      color: "purple",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Two parallel vertical lines - ElevenLabs logo */}
          <rect x="7" y="4" width="3" height="16" rx="1.5" fill="white" />
          <rect x="14" y="4" width="3" height="16" rx="1.5" fill="white" />
        </svg>
      ),
      tags: ["Voice Synthesis", "Audio Feedback"],
    },
    {
      title: "Cloudflare Edge",
      description:
        "Powered by Cloudflare Workers for lightning-fast response times. Your code analysis happens at the edge, ensuring minimal latency.",
      color: "orange",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cloudflare logo */}
          <path
            d="M17.6 14.6c.1-.3.1-.6 0-.9-.1-.4-.4-.7-.8-.8l-10.5-2c-.2 0-.3-.1-.5-.1-.5 0-.9.2-1.2.6-.3.3-.4.8-.3 1.2l.6 2.3c.1.4.4.7.8.8l10.5 2c.2 0 .3.1.5.1.5 0 .9-.2 1.2-.6.1-.2.2-.4.2-.6z"
            fill="#F6821F"
          />
          <path
            d="M20.9 13.6c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.2-.6-.2l-2.3-.4c-.1-.3-.2-.5-.4-.7-.4-.5-1-.8-1.7-.8H6.9c-2.8 0-5.3 1.9-6 4.7-.1.3 0 .7.2 1 .2.3.5.4.8.4h17.4c.3 0 .6-.2.8-.4.2-.3.3-.6.2-.9-.1-.5-.3-.9-.4-1.2z"
            fill="#F6821F"
          />
        </svg>
      ),
      tags: ["Edge Computing", "Low Latency"],
    },
    {
      title: "Native VS Code",
      description:
        "Seamlessly integrated into VS Code. No context switching, no external tools. Everything happens right in your editor.",
      color: "green",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
            fill="#007ACC"
          />
        </svg>
      ),
      tags: ["Native Extension", "Zero Setup"],
    },
  ];
  return (
    <section className="w-screen min-h-screen bg-[#050505] py-20 px-6 cursor-pointer">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Powered By Industry Leaders
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          ContextKeeper leverages cutting-edge AI and infrastructure to deliver
          autonomous code analysis
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {cards.map((card, index) => (
          <div key={index}>{cardMaker(card)}</div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <p className="text-gray-400 text-sm font-mono">
          All integrations work together seamlessly • No configuration required
        </p>
      </div>
    </section>
  );
}
