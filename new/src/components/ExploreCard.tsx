import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Zap, Target, Flame, Layers } from "lucide-react";

interface SlideData {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: number;
}

const SLIDES: SlideData[] = [
  {
    title: "Design to explore.",
    subtitle: "Creating immersive, beautiful, and tactile design systems from scratch.",
    icon: <Layers className="w-6 h-6 text-white" />,
    progress: 75,
  },
  {
    title: "Build to scale.",
    subtitle: "High performance applications engineered for global enterprise demands.",
    icon: <Zap className="w-6 h-6 text-white" />,
    progress: 92,
  },
  {
    title: "Create to inspire.",
    subtitle: "Designing strategic interactions that drive conversions and delight.",
    icon: <Flame className="w-6 h-6 text-white" />,
    progress: 60,
  },
  {
    title: "Focus on essence.",
    subtitle: "Removing all clutter to deliver only what truly matters to your users.",
    icon: <Target className="w-6 h-6 text-white" />,
    progress: 88,
  },
];

export default function ExploreCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto rotate slides every 8 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full max-w-md bg-neutral-950/30 border border-white/10 p-8 relative overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-neutral-950/50"
    >
      {/* Top micro elements for branding look */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">
          System Module // 0{currentIndex + 1}
        </span>
        <div className="flex space-x-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-[2px] transition-all duration-300 ${
                idx === currentIndex ? "bg-white w-5" : "bg-white/20 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {currentSlide.title}
            </h3>
            <p className="text-sm text-white leading-relaxed">
              {currentSlide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/10">
        <span className="text-[10px] text-white uppercase tracking-[0.2em] font-mono">
          Interactive UI
        </span>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 border border-white/15 flex items-center justify-center hover:bg-white/5 hover:border-white text-white transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 border border-white/15 flex items-center justify-center hover:bg-white/5 hover:border-white text-white transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
