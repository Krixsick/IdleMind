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
        gradient: "from-blue-500 to-blue-600",
        gradientOverlay: "from-blue-500/5",
        hover: "group-hover:text-blue-400",
        tag: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      },
      purple: {
        border: "hover:border-purple-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
        gradient: "from-purple-500 to-purple-600",
        gradientOverlay: "from-purple-500/5",
        hover: "group-hover:text-purple-400",
        tag: "bg-purple-500/10 border-purple-500/30 text-purple-400",
      },
      orange: {
        border: "hover:border-orange-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]",
        gradient: "from-orange-500 to-orange-600",
        gradientOverlay: "from-orange-500/5",
        hover: "group-hover:text-orange-400",
        tag: "bg-orange-500/10 border-orange-500/30 text-orange-400",
      },
      green: {
        border: "hover:border-green-500/50",
        shadow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]",
        gradient: "from-green-500 to-green-600",
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
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main sparkle shape */}
          <path
            d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
            fill="currentColor"
          />
          {/* Secondary sparkle */}
          <path
            d="M19 14L19.8 16.8L22 17.5L19.8 18.2L19 21L18.2 18.2L16 17.5L18.2 16.8L19 14Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* Tertiary sparkle */}
          <path
            d="M6 3L6.5 5L8.5 5.5L6.5 6L6 8L5.5 6L3.5 5.5L5.5 5L6 3Z"
            fill="currentColor"
            opacity="0.7"
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
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
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
          className="w-8 h-8 text-white"
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
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
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
