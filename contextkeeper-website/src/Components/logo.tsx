import React from "react";

interface LogoProps {
  className?: string;
  variant?: "sentinel" | "link" | "shield";
}

export const Logo: React.FC<LogoProps> = ({
  className = "w-8 h-8",
  variant = "sentinel",
}) => {
  const colors = {
    primary: "#FFFFFF",
    accent: "#22c55e",
    highlight: "#3b82f6",
  };

  if (variant === "sentinel") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. The Eye Outline (Sharp, Angular Hexagon/Eye hybrid) */}
        <path
          d="M10 50 L30 20 L70 20 L90 50 L70 80 L30 80 Z"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        />

        {/* 2. Internal Shutter Blades (The "Iris") */}
        <path
          d="M50 20 L50 50 L80 35"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M90 50 L50 50 L65 80"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M50 80 L50 50 L20 65"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M10 50 L50 50 L35 20"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 3. The Core Pupil (Hexagon) */}
        <path
          d="M45 42 L55 42 L60 50 L55 58 L45 58 L40 50 Z"
          fill={colors.primary}
          filter="url(#glow-soft)"
        />

        {/* 4. Technical Details (Status Indicators) */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={colors.primary}
          strokeWidth="0.5"
          strokeDasharray="2 4"
          opacity="0.3"
        />
        <circle
          cx="85"
          cy="25"
          r="3"
          fill={colors.accent}
          className="animate-pulse"
        />
      </svg>
    );
  }

  // ... (Other variants 'link' and 'shield' remain unchanged)
  if (variant === "link") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70 30C65 20 55 15 45 15C25.67 15 10 30.67 10 50C10 69.33 25.67 85 45 85C55 85 65 80 70 70"
          stroke={colors.primary}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M90 15L60 50L90 85"
          stroke={colors.primary}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="50" r="8" fill={colors.accent} />
      </svg>
    );
  }

  if (variant === "shield") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10L15 25V50C15 70 30 90 50 100C70 90 85 70 85 50V25L50 10Z"
          stroke={colors.primary}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 35L40 75"
          stroke={colors.primary}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="35" cy="45" r="5" fill={colors.primary} />
        <circle cx="65" cy="65" r="5" fill={colors.accent} />
      </svg>
    );
  }

  return null;
};
