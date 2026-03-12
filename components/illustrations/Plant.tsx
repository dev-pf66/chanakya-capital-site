export default function Plant({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Pot */}
      <path d="M42 90 L45 108 L75 108 L78 90 Z" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Pot rim */}
      <line x1="40" y1="90" x2="80" y2="90" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Soil line */}
      <path d="M46 90 Q60 86 74 90" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Main stem */}
      <path d="M60 90 L60 50" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Left branch */}
      <path d="M60 72 Q42 68 36 54" stroke="#0A0A0A" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Left leaf */}
      <path d="M36 54 Q28 42 38 36 Q44 44 36 54" stroke="#0A0A0A" strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Right branch */}
      <path d="M60 62 Q78 58 84 44" stroke="#0A0A0A" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Right leaf */}
      <path d="M84 44 Q92 32 82 26 Q76 34 84 44" stroke="#0A0A0A" strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Top bud */}
      <path d="M60 50 Q54 36 60 28 Q66 36 60 50" stroke="#0A0A0A" strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Pot detail */}
      <line x1="48" y1="96" x2="72" y2="96" stroke="#0A0A0A" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="3 3"/>
    </svg>
  );
}
