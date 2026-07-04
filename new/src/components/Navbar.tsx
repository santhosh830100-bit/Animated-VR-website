import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onContactClick?: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: 6:30:15pm • 23 June, 2024
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      
      const day = now.getDate();
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      setTime(`${hours}:${minutes}:${seconds}${ampm} • ${day} ${month}, ${year}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = ["Home", "Product", "About", "Brands", "Careers", "Partners"];

  return (
    <header className="w-full relative py-6 px-6 md:px-12 lg:px-20 flex items-center justify-between border-b border-white/[0.06] bg-black/40 backdrop-blur-md z-40">
      {/* Brand Logo */}
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-white rotate-45 transition-transform duration-300 group-hover:rotate-90" />
          <div className="absolute w-3 h-3 bg-black rotate-45" />
        </div>
        <span className="text-xl font-bold text-white tracking-wide font-sans">
          Zenrixa
        </span>
      </div>

      {/* Navigation Desktop */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className="relative py-2 text-[14px] font-medium text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-1 group"
          >
            {item}
            {item === "Product" && (
              <ChevronDown className="w-4 h-4 text-white group-hover:text-white/80 transition-colors" />
            )}
            
            {activeTab === item && (
              <motion.div
                layoutId="activeDot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Right Toolbar */}
      <div className="flex items-center space-x-6">
        {/* Menu Toggle Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/20 hover:bg-white/10 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300"
        >
          <Menu className="w-3.5 h-3.5" />
          Menu
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex flex-col p-6 md:p-12 lg:p-20 overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between w-full mb-16">
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white rotate-45" />
                  <div className="absolute w-3 h-3 bg-black rotate-45" />
                </div>
                <span className="text-xl font-bold text-white tracking-wide">
                  Zenrixa
                </span>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 border border-white/10 hover:border-white/40 hover:bg-white/5 text-white transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overlay Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full my-auto">
              <div className="flex flex-col space-y-4">
                <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">
                  Navigation
                </span>
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item);
                      setIsMenuOpen(false);
                    }}
                    className="text-4xl md:text-5xl font-bold text-white/85 hover:text-white transition-colors flex items-center group"
                  >
                    {item}
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-white/60 ml-3" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col justify-between space-y-8 md:space-y-0 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4 block">
                    Our HQ
                  </span>
                  <p className="text-white/80 font-medium leading-relaxed">
                    Zenrixa Agency Sp. z o.o.<br />
                    Krakowskie Przedmieście 12<br />
                    00-325 Warsaw, Poland
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4 block">
                    Get in Touch
                  </span>
                  <a
                    href="mailto:hello@zenrixa.com"
                    className="text-xl font-medium text-white hover:underline block"
                  >
                    hello@zenrixa.com
                  </a>
                  <p className="text-white/40 text-sm mt-1">
                    Response time usually within 2 hours
                  </p>
                </div>

                <div className="flex gap-4">
                  {["Instagram", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-xs text-white/40 hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
