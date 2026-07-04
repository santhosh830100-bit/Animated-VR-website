import { motion } from "motion/react";
import { Globe, ArrowDown, Award } from "lucide-react";

export default function FooterBar() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-md py-6 px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 z-30">
      {/* Experience tag */}
      <div className="flex items-center space-x-2.5">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-xs font-semibold text-white/80 tracking-[0.2em] uppercase font-mono">
          10+ Years Exp
        </span>
        <span className="text-[10px] text-white/30 hidden md:inline">
          // GLOBAL DELIVERY
        </span>
      </div>

      {/* Location tag */}
      <div className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors cursor-pointer group">
        <Globe className="w-4 h-4 text-white/40 group-hover:rotate-45 transition-transform duration-700" />
        <span className="text-xs font-medium font-mono">Based in Warsaw, PL</span>
      </div>

      {/* Scroll indicator button */}
      <button
        onClick={handleScrollDown}
        className="flex items-center space-x-2 text-white/40 hover:text-white transition-all duration-300 group"
      >
        <span className="text-xs font-semibold uppercase tracking-widest font-mono">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
        </motion.div>
      </button>
    </footer>
  );
}
