'use client';

import { motion } from 'framer-motion';

const FallingSticker = ({ children, left, duration, delay }: { children: React.ReactNode; left: string; duration: number; delay: number }) => (
  <motion.div
    style={{ left, top: '-120px', zIndex: 0, opacity: 0.05, color: '#0f9f90' }}
    className="fixed pointer-events-none select-none"
    initial={{ y: -120, rotate: 0 }}
    animate={{ 
      y: '115vh', 
      rotate: 360 
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default function FallingStickers() {
  const stickersList = [
    // 1. Car with sensor radar waves
    { el: (
        <svg width="110" height="80" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M25 40 C25 35, 30 25, 40 22 C45 20, 60 20, 70 24 C75 26, 80 32, 82 38 C84 42, 83 48, 80 52 C75 56, 35 56, 25 48 Z" />
          <path d="M40 22 C42 16, 55 12, 68 15 C70 16, 75 20, 77 25" />
          <circle cx="38" cy="50" r="5" />
          <circle cx="68" cy="50" r="5" />
          <path d="M12 35 A 25 25 0 0 1 20 20" strokeDasharray="2 2" />
          <path d="M8 35 A 30 30 0 0 1 18 15" strokeDasharray="2 2" />
          <path d="M80 20 A 25 25 0 0 1 88 35" strokeDasharray="2 2" />
          <path d="M82 15 A 30 30 0 0 1 92 35" strokeDasharray="2 2" />
          <path d="M12 45 A 25 25 0 0 0 20 60" strokeDasharray="2 2" />
          <path d="M80 60 A 25 25 0 0 0 88 45" strokeDasharray="2 2" />
        </svg>
      ), left: '4%', duration: 24, delay: 0 },
    // 2. LIDAR unit
    { el: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="6" y="12" width="12" height="8" rx="1" />
          <path d="M8 8h8v4H8z" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <path d="M12 2v6" />
          <path d="M10 4h4" />
          <text x="12" y="18" fontSize="3.5" textAnchor="middle" fontWeight="bold" fill="currentColor" stroke="none">LIDAR</text>
          <path d="M4 10a8 8 0 0 1 16 0" strokeDasharray="2 2" />
        </svg>
      ), left: '14%', duration: 28, delay: 4 },
    // 3. Steering wheel turn arrow
    { el: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v7" />
          <path d="M5 16l5-3" />
          <path d="M19 16l-5-3" />
          <path d="M8 6a5 5 0 0 1 8 0" strokeWidth="1.5" />
          <path d="M14 4l2-2l-2 2" />
        </svg>
      ), left: '24%', duration: 20, delay: 1 },
    // 4. Receding lane cameras
    { el: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <line x1="6" y1="22" x2="10" y2="6" />
          <line x1="18" y1="22" x2="14" y2="6" />
          <line x1="12" y1="22" x2="12" y2="18" strokeDasharray="2 2" />
          <line x1="12" y1="15" x2="12" y2="11" strokeDasharray="2 2" />
          <line x1="12" y1="8" x2="12" y2="6" strokeDasharray="2 2" />
          <path d="M4 8V4h4" />
          <path d="M20 8V4h-4" />
          <path d="M4 16v4h4" />
          <path d="M20 16v4h-4" />
        </svg>
      ), left: '35%', duration: 25, delay: 6 },
    // 5. Brain AI chip car
    { el: (
        <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 5a4 4 0 0 0-4 4 3 3 0 0 0 1 3c-.5.5-1 1-1 2a3 3 0 0 0 3 3h1" />
          <path d="M8 9a2 2 0 0 0-2 2 2 2 0 0 0 2 2" />
          <rect x="13" y="6" width="6" height="6" rx="1" />
          <path d="M16 4v2M16 12v2M13 9h-1M21 9h-2" />
          <path d="M12 16h6a2 2 0 0 1 2 2v2H12z" />
          <circle cx="15" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
        </svg>
      ), left: '45%', duration: 22, delay: 2 },
    // 6. Map with GPS pin
    { el: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3z" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
          <path d="M12 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" fill="currentColor" />
          <path d="M12 3a3.5 3.5 0 0 0-3.5 3.5c0 2.5 3.5 6 3.5 6s3.5-3.5 3.5-6a3.5 3.5 0 0 0-3.5-3.5z" />
        </svg>
      ), left: '56%', duration: 27, delay: 8 },
    // 7. STOP sign with radar ring
    { el: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z" />
          <text x="12" y="14" fontSize="4" textAnchor="middle" fontWeight="bold" fill="currentColor" stroke="none">STOP</text>
          <circle cx="12" cy="12" r="11.5" strokeDasharray="3 3" />
        </svg>
      ), left: '66%', duration: 18, delay: 3 },
    // 8. Top-down view of car
    { el: (
        <svg width="55" height="70" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="7" y="4" width="10" height="20" rx="2" />
          <rect x="5" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
          <rect x="17" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
          <rect x="5" y="18" width="2" height="4" rx="0.5" fill="currentColor" />
          <rect x="17" y="18" width="2" height="4" rx="0.5" fill="currentColor" />
          <path d="M12 2v2" />
          <path d="M9 2a3 3 0 0 0 6 0" />
          <path d="M12 24v2" />
        </svg>
      ), left: '76%', duration: 23, delay: 7 },
    // 9. ∫ Integral symbol
    { el: <div className="font-serif text-6xl font-bold">∫</div>, left: '85%', duration: 26, delay: 1.5 },
    // 10. P(A|B) Probability
    { el: <div className="font-serif text-3xl font-bold">P(A|B)</div>, left: '92%', duration: 30, delay: 5 },
    // 11. ∑ Sigma symbol
    { el: <div className="font-serif text-8xl font-bold">∑</div>, left: '9%', duration: 21, delay: 9 }
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden select-none"
      style={{ zIndex: 0 }}
    >
      {stickersList.map((st, idx) => (
        <FallingSticker key={idx} left={st.left} duration={st.duration} delay={st.delay}>
          <div>
            {st.el}
          </div>
        </FallingSticker>
      ))}
    </div>
  );
}
