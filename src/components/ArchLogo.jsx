import React from 'react';

export default function ArchLogo({ className = '' }) {
  return (
    <div className={`arch-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg
        viewBox="0 0 160 70"
        width="145"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Outer Red Arch Border */}
        <path
          d="M 12 62 C 12 18, 148 18, 148 62"
          stroke="#D93829"
          strokeWidth="2.5"
          fill="#FFFFFF"
        />
        {/* Bottom enclosing line */}
        <line x1="12" y1="62" x2="148" y2="62" stroke="#D93829" strokeWidth="2.5" />

        {/* Mini 3-tier stylized cake vector icon */}
        <g transform="translate(26, 32)">
          <path d="M 6 18 L 22 18 L 22 23 L 6 23 Z" fill="#D93829" />
          <path d="M 8 12 L 20 12 L 20 17 L 8 17 Z" fill="#D93829" />
          <path d="M 11 7 L 17 7 L 17 11 L 11 11 Z" fill="#D93829" />
          <circle cx="14" cy="4" r="1.5" fill="#D93829" />
        </g>

        {/* Text: Mamana */}
        <text
          x="54"
          y="42"
          fill="#1A1A1A"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="-0.5"
        >
          Mamana
        </text>

        {/* Text: Cakes n Pastries in red script style */}
        <text
          x="54"
          y="56"
          fill="#D93829"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.2"
        >
          Cakesnpastries
        </text>
      </svg>
    </div>
  );
}
