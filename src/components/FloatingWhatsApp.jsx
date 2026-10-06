import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${BAKERY_INFO.whatsapp}?text=${encodeURIComponent('Hello Mamana Cakes, I want to make an inquiry!')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* Clean SVG WhatsApp Icon matching screenshots */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.106 8.106 0 0 1-1.25-4.29c0-4.49 3.65-8.14 8.14-8.14 2.17 0 4.21.85 5.75 2.38a8.077 8.077 0 0 1 2.39 5.76c0 4.49-3.66 8.15-8.14 8.15zm4.46-6.11c-.24-.12-1.45-.72-1.67-.8-.23-.09-.39-.12-.56.12-.17.24-.65.8-.8 1-.14.15-.29.17-.54.05-.24-.12-1.03-.38-1.97-1.21-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.38.11-.5.11-.11.24-.29.37-.43.12-.15.17-.24.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.24-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.11-.23-.17-.47-.29z"/>
      </svg>
    </a>
  );
}
