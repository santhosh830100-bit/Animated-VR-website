import { ReactNode } from "react";
import { motion } from "motion/react";
import { BookOpen, Shield, HelpCircle, Shuffle, Landmark, Hexagon } from "lucide-react";

interface Partner {
  name: string;
  icon: ReactNode;
}

const PARTNERS: Partner[] = [
  { name: "zantic", icon: <Hexagon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" /> },
  { name: "BookStore", icon: <BookOpen className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" /> },
  { name: "Wager", icon: <Shield className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" /> },
  { name: "Clone", icon: <Shuffle className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" /> },
  { name: "Mercury", icon: <Landmark className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" /> },
  { name: "Crona", icon: <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" /> },
];

export default function Partners() {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold block">
          Our Partners
        </span>
        <div className="h-[1px] flex-grow bg-white/10 ml-4" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="group flex items-center space-x-2.5 px-4 py-3 bg-neutral-950/20 border border-white/5 hover:bg-neutral-950/50 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex-shrink-0">
              {partner.icon}
            </div>
            <span className="text-xs font-medium text-white/60 group-hover:text-white transition-colors duration-300 font-mono tracking-wider">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
