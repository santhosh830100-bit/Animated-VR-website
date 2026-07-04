import React from 'react';

export default function VRHeadsetImage() {
  return (
    <div className="relative w-full aspect-[1.7] bg-[radial-gradient(circle_at_50%_40%,_#E14B00_0%,_#9E2F00_45%,_#4A0F00_80%,_#180200_100%)] rounded-2xl overflow-hidden shadow-[inset_0_1px_3px_rgba(255,255,255,0.12)] flex items-center justify-center p-4">
      {/* Heavy vignetting to match the dark outer edges of the user's reference image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />
      
      <svg
        viewBox="0 0 420 240"
        className="w-full h-full max-h-[190px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="High-end VR Headset 3D Render"
        role="img"
      >
        <defs>
          {/* Floor Shadow Blur Filter */}
          <filter id="floor-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="11" />
          </filter>

          {/* Intense Neon White Glow Filter for the Visor LED strip */}
          <filter id="neon-bloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur1" />
            <feComponentTransfer in="blur1" result="glow1">
              <feFuncA type="linear" slope="0.75"/>
            </feComponentTransfer>
            
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
            <feComponentTransfer in="blur2" result="glow2">
              <feFuncA type="linear" slope="0.95"/>
            </feComponentTransfer>

            <feMerge>
              <feMergeNode in="glow1" />
              <feMergeNode in="glow2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glossy Black Visor base gradient */}
          <linearGradient id="visor-base-grad" x1="15%" y1="0%" x2="45%" y2="100%">
            <stop offset="0%" stopColor="#353538" />
            <stop offset="20%" stopColor="#121214" />
            <stop offset="70%" stopColor="#050506" />
            <stop offset="100%" stopColor="#010101" />
          </linearGradient>

          {/* Specular glass reflection */}
          <linearGradient id="visor-specular" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
          </linearGradient>

          {/* Strap shading */}
          <linearGradient id="strap-shading" x1="0%" y1="0%" x2="100%" y2="15%">
            <stop offset="0%" stopColor="#080809" />
            <stop offset="50%" stopColor="#1F1F22" />
            <stop offset="100%" stopColor="#030304" />
          </linearGradient>
        </defs>

        {/* Dynamic drop shadow matching the floor shadow in the image */}
        <ellipse cx="210" cy="204" rx="125" ry="12" fill="#000000" opacity="0.85" filter="url(#floor-shadow)" />

        {/* --- Inner Headband Loop (Depth Layer behind) --- */}
        <path
          d="M 225 133 C 235 133, 285 135, 302 137 C 313 139, 319 144, 319 152 C 319 160, 311 164, 295 164 C 282 164, 246 160, 235 158"
          fill="none"
          stroke="#0A0A0B"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.95"
        />

        {/* --- Main Side Strap / Headband --- */}
        <path
          d="M 205 124 L 305 126 C 315 126, 321 131, 321 139 C 321 147, 315 150, 305 150 L 216 145 Z"
          fill="url(#strap-shading)"
        />
        
        {/* Strap top specular edge highlight */}
        <path
          d="M 206 124 L 305 126"
          fill="none"
          stroke="#424248"
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Strap adjustment block */}
        <path
          d="M 210 120 L 223 120 C 227 120, 229 124, 229 130 L 229 138 C 229 144, 227 148, 223 148 L 210 148 Z"
          fill="#121214"
          stroke="#050506"
          strokeWidth="1.2"
        />
        <circle cx="216" cy="134" r="3.2" fill="#2B2B2F" />

        {/* --- Visor Core Body (Angled three-quarter perspective capsule) --- */}
        <path
          d="M 98 129 C 98 96, 116 80, 153 80 C 188 80, 224 95, 229 121 C 234 147, 216 164, 178 169 C 140 174, 110 157, 98 139 Z"
          fill="url(#visor-base-grad)"
        />

        {/* Curvature highlight overlay for polished 3D finish */}
        <path
          d="M 98 129 C 98 96, 116 80, 153 80 C 188 80, 224 95, 229 121 C 234 147, 216 164, 178 169 C 140 174, 110 157, 98 139 Z"
          fill="url(#visor-specular)"
        />

        {/* Nose bridge bottom shadow recess */}
        <path d="M 182 164 C 187 154, 201 154, 206 164 Z" fill="#000000" opacity="0.95" />

        {/* --- EXACT Glowing Thick Visor White LED Band --- */}
        {/* Spans across the front visor, curved to match the 3D perspective of the headset */}
        <path
          d="M 99 129 C 107 120, 140 114, 173 120 C 203 125, 220 132, 227 136"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#neon-bloom)"
        />
        <path
          d="M 99 129 C 107 120, 140 114, 173 120 C 203 125, 220 132, 227 136"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Soft studio light reflection lines */}
        <path
          d="M 133 84 C 140 110, 140 132, 135 163"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          opacity="0.14"
          strokeLinecap="round"
        />
        <path
          d="M 123 88 C 129 110, 129 130, 125 155"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1"
          opacity="0.07"
          strokeLinecap="round"
        />

        {/* Soft crown highlight on the top-left edge */}
        <path
          d="M 104 117 C 106 101, 116 89, 136 85"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
