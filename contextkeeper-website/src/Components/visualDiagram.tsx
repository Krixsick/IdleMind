import React from "react";
import {
  Activity,
  PauseCircle,
  BrainCircuit,
  Save,
  ArrowDown,
  Database,
  FileCode,
  Sparkles,
} from "lucide-react";

const FlowNode = ({
  icon: Icon,
  title,
  subtitle,
  details,
  isLast = false,
}: {
  icon: any;
  title: string;
  subtitle: string;
  details: string[];
  isLast?: boolean;
}) => (
  <div className="relative flex flex-col items-center text-center group">
    {/* Card Container */}
    <div
      className="
      relative z-10 w-72 p-6 
      bg-[#1e1e1e]/80 backdrop-blur-md 
      border border-white/10 rounded-2xl 
      shadow-xl transition-all duration-500
      group-hover:scale-105 group-hover:border-[#007acc]/50 group-hover:shadow-[0_0_30px_rgba(0,122,204,0.2)]
    "
    >
      {/* Icon Badge */}
      <div
        className="
        w-12 h-12 mx-auto mb-4 rounded-xl 
        bg-[#2d2d2d] flex items-center justify-center 
        group-hover:bg-[#007acc]/20 transition-colors
      "
      >
        <Icon className="w-6 h-6 text-[#007acc] group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-lg font-bold text-[#d4d4d4] mb-1 group-hover:text-white">
        {title}
      </h3>
      <p className="text-xs font-mono text-[#007acc] mb-4">{subtitle}</p>

      {/* Technical Details (Simplified) */}
      <div className="space-y-2">
        {details.map((detail, idx) => (
          <div
            key={idx}
            className="text-xs text-gray-500 bg-black/20 py-1 px-2 rounded border border-white/5"
          >
            {detail}
          </div>
        ))}
      </div>
    </div>

    {/* Connector Line */}
    {!isLast && (
      <div className="h-16 w-0.5 bg-gradient-to-b from-[#007acc]/50 to-transparent my-2 relative">
        <div className="absolute -bottom-1 -left-1.5 text-[#007acc]/50 animate-bounce">
          <ArrowDown size={16} />
        </div>
      </div>
    )}
  </div>
);

const WorkflowFlow = () => {
  return (
    <div className="w-full py-16 bg-[#050505] flex flex-col items-center justify-center font-sans">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          System Architecture
        </h2>
        <p className="text-gray-400">
          How ContextKeeper thinks while you sleep.
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* Step 1: Ingestion */}
        <FlowNode
          icon={Activity}
          title="1. Data Collection"
          subtitle="Ingestion Service"
          details={[
            "VS Code Events Listener",
            "Ingestion Queue Processing",
            "LanceDB (Vector Embeddings)",
          ]}
        />

        {/* Step 2: Idle Detection */}
        <FlowNode
          icon={PauseCircle}
          title="2. Idle Detection"
          subtitle="Idle Service"
          details={[
            "Detects User Inactivity",
            "Triggers Autonomous Agent",
            "Creates/Switches Git Branch",
          ]}
        />

        {/* Step 3: Orchestration & Analysis */}
        <FlowNode
          icon={BrainCircuit}
          title="3. AI Analysis"
          subtitle="Orchestrator & Gemini"
          details={[
            "Context Builder (RAG)",
            "Cloudflare Worker (Linting)",
            "Gemini 1.5 Pro (Test Generation)",
          ]}
        />

        {/* Step 4: Action */}
        <FlowNode
          icon={Save}
          title="4. Safe Commit"
          subtitle="Autonomous Agent"
          details={[
            "Stores Artifacts",
            "Commits Tests Only",
            "Notifies User via Voice",
          ]}
          isLast={true}
        />
      </div>
    </div>
  );
};

export default WorkflowFlow;
