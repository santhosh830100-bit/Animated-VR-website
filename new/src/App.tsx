import { useState, useRef, useEffect, MouseEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowRight, ArrowUpRight, MessageSquare, Send, CheckCircle2, X } from "lucide-react";
import Navbar from "./components/Navbar";
import ExploreCard from "./components/ExploreCard";
import Partners from "./components/Partners";
import FooterBar from "./components/FooterBar";
import FlowingChips from "./components/FlowingChips";
import SmartFeatures from "./components/SmartFeatures";

// Interactive showcase items for the "Our Works" section below
interface WorkItem {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  color: string;
}

const PORTFOLIO_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: "Vortex Spatial Audio",
    category: "Branding & Immersive Web",
    year: "2024",
    description: "Next-gen spatial audio synthesis interface for virtual reality headsets.",
    color: "from-purple-950/40 via-purple-900/10 to-transparent",
  },
  {
    id: 2,
    title: "Aetherial Design System",
    category: "Product & Architecture",
    year: "2024",
    description: "Fluid, screen-independent tactile UI components built for hyper-performance.",
    color: "from-blue-950/40 via-blue-900/10 to-transparent",
  },
  {
    id: 3,
    title: "Chronos Ledger",
    category: "Web App & Blockchain",
    year: "2023",
    description: "High-contrast minimalist financial ledger with instant multi-sig validations.",
    color: "from-zinc-900/60 via-zinc-800/10 to-transparent",
  },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  // Track cursor spotlight position
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientEmail || !clientMessage) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setIsChatOpen(false);
      setFormSubmitted(false);
      setClientEmail("");
      setClientMessage("");
    }, 2800);
  };

  // Scroll to works list
  const scrollToWorks = () => {
    const element = document.getElementById("portfolio-showcase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative overflow-x-hidden flex flex-col justify-between"
    >
      {/* Absolute Dynamic Interactive Spotlight Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 70%)`,
        }}
      />

      {/* Grid ambient background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Top Navbar */}
      <Navbar onContactClick={() => setIsChatOpen(true)} />

      {/* Core Hero Component */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-28 flex flex-col justify-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Hero Content Section */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12 text-left">
            
            {/* Agency Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-3 text-white text-xs font-bold tracking-[0.3em] uppercase"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span>Creative Agency // Series 2026</span>
            </motion.div>

            {/* Display Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-7xl md:text-8xl font-light text-white tracking-tight leading-[1.05] max-w-[850px]"
              >
                The Future Is <br />
                Closer Than <br />
                You Think.
              </motion.h1>
            </div>

            {/* Customer Rating Component */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-3 pt-2"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-white fill-white" />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-white tracking-[0.2em] uppercase font-mono">
                3000+ Customers // Certified Standard
              </span>
            </motion.div>

            {/* Call To Action Button Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Chat Button - Square Sleek block button */}
              <button
                onClick={() => setIsChatOpen(true)}
                className="px-10 py-4 border border-white bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors duration-300"
              >
                Chat With Us
              </button>

              {/* Work Button - Sleek Underlined or border link */}
              <button
                onClick={scrollToWorks}
                className="text-xs font-bold uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors duration-200"
              >
                Our Works
              </button>
            </motion.div>
          </div>

          {/* Right Hero Interactive Panels Section */}
          <div className="lg:col-span-5 flex flex-col space-y-10 lg:space-y-16 justify-center">
            
            {/* Interactive Explore Slide Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ExploreCard />
            </motion.div>

            {/* Premium Partners Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Partners />
            </motion.div>

          </div>
        </div>
      </main>

      {/* Smart Features Cards Section */}
      <SmartFeatures />

      {/* Interactive Flowing Chips Section */}
      <FlowingChips />

      {/* Footer Bar */}
      <FooterBar />

      {/* Chat popup model trigger */}
      <AnimatePresence>
        {isChatOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-md bg-black border border-white/10 p-8 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsChatOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/35 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-3">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    We'd love to hear about your product ideas. Fill out the quick form and we'll reply shortly.
                  </p>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-white" />
                    <h4 className="text-md font-bold text-white uppercase tracking-widest text-xs">Proposal Request Sent</h4>
                    <p className="text-xs text-white/50">
                      Thank you. Our creative director will follow up within 2 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono font-bold">
                        Your Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@example.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/10 focus:border-white/30 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono font-bold">
                        How can we collaborate?
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tell us about your project requirements..."
                        value={clientMessage}
                        onChange={(e) => setClientMessage(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/10 focus:border-white/30 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white hover:border hover:border-white transition-all duration-300"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
