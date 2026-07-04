import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Cpu, Layers, Eye, UserCheck, Zap, Activity, Globe } from "lucide-react";

interface FeatureCardProps {
  key?: React.Key;
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="w-full max-w-[320px] aspect-square bg-neutral-950/40 border border-white/10 rounded-none p-8 relative flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-neutral-950/60 group"
    >
      <div>
        {/* Icon Circle */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 text-black transition-transform duration-350 group-hover:scale-105">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white tracking-tight mb-2">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs text-white/60 leading-relaxed font-sans">
        {description}
      </p>
    </motion.div>
  );
}

export default function SmartFeatures() {
  const cards = [
    {
      title: "Advanced secure system",
      description: "Advanced protection to keep transactions safe and reliable.",
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
    },
    {
      title: "Seamless user access",
      description: "Seamless experience for managing finances anytime, anywhere.",
      icon: <UserCheck className="w-6 h-6 text-black" />,
    },
    {
      title: "Edge computing core",
      description: "Sub-millisecond processing speeds powered by modern serverless hardware.",
      icon: <Cpu className="w-6 h-6 text-black" />,
    },
    {
      title: "Instant synchronization",
      description: "Zero latency state distribution updates across all network nodes.",
      icon: <Zap className="w-6 h-6 text-black" />,
    },
    {
      title: "Modular infrastructure",
      description: "Adaptable container blocks designed for instant scaling and zero downtime.",
      icon: <Layers className="w-6 h-6 text-black" />,
    },
    {
      title: "Predictive analytics",
      description: "Smart forecasting engines anticipating user requirements with deep neural models.",
      icon: <Activity className="w-6 h-6 text-black" />,
    },
    {
      title: "Real-time auditing",
      description: "Continuous automated scanning for full compliance, visibility, and peace of mind.",
      icon: <Eye className="w-6 h-6 text-black" />,
    },
    {
      title: "Global reach network",
      description: "Unified distribution gateways connecting global partners with absolute speed.",
      icon: <Globe className="w-6 h-6 text-black" />,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 relative z-20 border-t border-white/5 bg-black">
      <div className="mb-16">
        <span className="text-[11px] text-white uppercase tracking-[0.2em] font-mono font-bold block">
          ARCHITECTURE CAPABILITIES
        </span>
      </div>

      {/* Alternating layout: Left, then Right, staggered vertically with space in middle */}
      <div className="flex flex-col space-y-12 md:space-y-6 relative">
        {cards.map((card, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={`w-full flex ${
                isLeft ? "justify-start" : "justify-end"
              } md:-mt-12 first:mt-0`}
            >
              <FeatureCard
                title={card.title}
                description={card.description}
                icon={card.icon}
                delay={i * 0.08}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

