import { useState } from "react";
import { motion } from "motion/react";

interface ChipItem {
  label: string;
  delay: number;
}

const CHIPS: ChipItem[] = [
  { label: "Market research", delay: 0.1 },
  { label: "Product design", delay: 0.15 },
  { label: "Beta launch", delay: 0.2 },
  { label: "User needs analysis", delay: 0.25 },
  { label: "System development", delay: 0.3 },
  { label: "User feedback", delay: 0.35 },
  { label: "System development", delay: 0.4 },
  { label: "Performance optimization", delay: 0.45 },
];

export default function FlowingChips() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedChips, setClickedChips] = useState<Record<number, boolean>>({});

  const toggleChip = (index: number) => {
    setClickedChips((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 relative z-20 border-t border-white/5">
      <div className="mb-6">
        <span className="text-[10px] text-white uppercase tracking-[0.25em] font-mono font-bold block">
          Development Framework // Operational Milestones
        </span>
      </div>

      {/* Staggered organic flowing cloud of chips */}
      <div className="flex flex-wrap gap-x-4 gap-y-5 justify-start items-center py-6">
        {CHIPS.map((chip, index) => {
          const isClicked = clickedChips[index];
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: chip.delay }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => toggleChip(index)}
              className={`flex items-center space-x-3 px-6 py-3.5 border transition-all duration-300 cursor-pointer rounded-full ${
                isClicked
                  ? "bg-white border-white text-black"
                  : "bg-neutral-950/40 border-white/10 hover:border-white/30 text-white"
              }`}
            >
              {/* White/Black indicator dot with dynamic pulse/glow */}
              <div className="relative flex items-center justify-center">
                <span
                  className={`w-2 h-2 rounded-full transition-colors duration-350 ${
                    isClicked ? "bg-black" : "bg-white"
                  }`}
                />
                {!isClicked && hoveredIndex === index && (
                  <span className="absolute w-2 h-2 rounded-full bg-white animate-ping opacity-60" />
                )}
              </div>

              {/* Text label */}
              <span className="text-xs font-medium tracking-wide uppercase font-sans">
                {chip.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
