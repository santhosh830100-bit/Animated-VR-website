/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Boxes, 
  Search, 
  ArrowUpRight, 
  Eye, 
  Activity, 
  Sparkles,
  Cpu
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      
      {/* Floating Header Badge mirroring the design (Top Right) */}
      <div className="absolute top-6 right-6 hidden xl:flex flex-col border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-md max-w-[240px] z-50">
        <div className="text-2xl font-light italic text-white flex items-baseline gap-1">
          8k <span className="text-xs align-super text-white/80 font-normal">UHD</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mt-1">
          Display Resolution
        </div>
        <div className="text-[10px] text-white/40 mt-1 leading-relaxed">
          delivering ultimate visual realism per eye
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
        
        {/* TOP SECTION: Hero & Introductory text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24 md:mb-32 mt-12">
          
          {/* Main big heading */}
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-[60px] lg:text-[60px] font-normal tracking-tight leading-[1.1]"
            >
              We offer next level<br />
              <span className="italic relative inline-block font-normal pt-2">
                immersion
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-white"></span>
              </span>
            </motion.h1>
          </div>

          {/* Right column: Explanatory paragraph */}
          <div className="lg:col-span-5 lg:pt-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-white/70 text-base md:text-lg leading-relaxed font-light tracking-wide max-w-xl"
            >
              Step into the future of spatial computing. Built with lightweight carbon-fiber materials, dual micro-OLED 8K display panels, and high-fidelity dynamic surround sound. Designed for gamers, creators, and spatial professionals seeking the ultimate visual and physical comfort.
            </motion.p>
          </div>

        </div>

        {/* METRICS SECTION: Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 border-t border-white/5 pt-12 mb-36 md:mb-48">
          
          {/* Metric Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Top accent line (Teal) */}
            <div className="h-[2px] w-full bg-teal-500/80 mb-8 rounded-full"></div>
            <div className="text-6xl md:text-7xl lg:text-8xl font-light italic tracking-tight text-white flex items-baseline">
              110<span className="text-3xl lg:text-4xl align-super ml-1 font-normal not-italic text-white/90">°</span>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white mt-4 mb-2">
              Field of View
            </div>
            <div className="text-xs text-white/50 leading-relaxed font-light">
              wider lens coverage providing an fully immersive cinema-grade spatial environment
            </div>
          </motion.div>

          {/* Metric Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Top accent line (Indigo) */}
            <div className="h-[2px] w-full bg-indigo-500/80 mb-8 rounded-full"></div>
            <div className="text-6xl md:text-7xl lg:text-8xl font-light italic tracking-tight text-white flex items-baseline">
              120<span className="text-3xl lg:text-4xl align-super ml-1 font-normal not-italic text-white/90">Hz</span>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white mt-4 mb-2">
              Refresh Rate
            </div>
            <div className="text-xs text-white/50 leading-relaxed font-light">
              buttery-smooth visual fluid transitions with zero motion sickness or screen flicker
            </div>
          </motion.div>

          {/* Metric Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Top accent line (Emerald) */}
            <div className="h-[2px] w-full bg-emerald-500/80 mb-8 rounded-full"></div>
            <div className="text-6xl md:text-7xl lg:text-8xl font-light italic tracking-tight text-white flex items-baseline">
              200<span className="text-3xl lg:text-4xl align-super ml-1 font-normal not-italic text-white/90">+</span>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white mt-4 mb-2">
              Virtual Spaces
            </div>
            <div className="text-xs text-white/50 leading-relaxed font-light">
              pre-installed worlds and collaborative environments ready on initial startup
            </div>
          </motion.div>

        </div>

        {/* BOTTOM SECTION: Interactive Cards with Plane Black Background */}
        <div className="mb-24">
          
          {/* Centered Small Uppercase Motto */}
          <div className="text-center mb-16 px-4">
            <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50 max-w-2xl leading-relaxed">
              AT CG VR, DELIVERING UNPARALLELED SPATIAL COMPUTING AND IMMERSIVE VIRTUAL REALITY EXPERIENCES FOR GAMERS AND CREATORS
            </span>
          </div>

          {/* Zig-Zag Staggered Non-Colliding Layout (Fully responsive and clean, zero collision) */}
          <div className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-12 py-6">
            
            {/* Card 1: Left-aligned */}
            <div className="flex justify-start w-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className="w-72 h-72 aspect-square flex flex-col justify-between border border-white/20 rounded-xl p-6 bg-transparent shadow-xl cursor-pointer"
              >
                <div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/85 w-fit mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-light text-white leading-relaxed tracking-wide">
                  “Designed with ultralight carbon-fiber components for balanced weight distribution and endless, fatigue-free comfort.”
                </div>
              </motion.div>
            </div>

            {/* Card 2: Right-aligned */}
            <div className="flex justify-end w-full">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className="w-72 h-72 aspect-square flex flex-col justify-between border border-white/20 rounded-xl p-6 bg-transparent shadow-xl cursor-pointer"
              >
                <div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/85 w-fit mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-light text-white leading-relaxed tracking-wide">
                  “Dual high-density micro-OLED displays eliminate the screen-door effect entirely, letting you lose yourself in flawless visual realism.”
                </div>
              </motion.div>
            </div>

            {/* Card 3: Left-aligned */}
            <div className="flex justify-start w-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className="w-72 h-72 aspect-square flex flex-col justify-between border border-white/20 rounded-xl p-6 bg-transparent shadow-xl cursor-pointer"
              >
                <div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/85 w-fit mb-4">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-light text-white leading-relaxed tracking-wide">
                  “Advanced ultra-wide camera arrays and spatial depth-sensors track your hands and finger gestures with millimeter precision.”
                </div>
              </motion.div>
            </div>

            {/* Card 4: Right-aligned */}
            <div className="flex justify-end w-full">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className="w-72 h-72 aspect-square flex flex-col justify-between border border-white/20 rounded-xl p-6 bg-transparent shadow-xl cursor-pointer"
              >
                <div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/85 w-fit mb-4">
                    <Boxes className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-sm font-light text-white leading-relaxed tracking-wide">
                  “Dynamic integrated surround sound drivers adapt instantly to your head orientation, rendering rich 3D sound fields.”
                </div>
              </motion.div>
            </div>

            {/* Card 5: Left-aligned */}
            <div className="flex justify-start w-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className="w-72 h-72 aspect-square flex flex-col justify-between border border-white/20 rounded-xl p-6 bg-transparent shadow-xl cursor-pointer"
              >
                <div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/85 w-fit mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-1.5 tracking-wide leading-snug">
                    We offer complete virtual setups.
                  </div>
                </div>
                <div className="text-[11px] font-light text-white/70 leading-relaxed overflow-hidden text-ellipsis">
                  Switch seamlessly between hardcore spatial gaming, cinema screening, and immersive multi-monitor productive workspaces.
                </div>
              </motion.div>
            </div>

          </div>

        </div>

        {/* FOOTER SECTION: Minimal, Premium */}
        <footer className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>
            &copy; 2026 CG.VR. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

