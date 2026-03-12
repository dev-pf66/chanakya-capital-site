export default function Compass({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer circle */}
      <circle cx="60" cy="60" r="48" stroke="#0A0A0A" strokeWidth="1.5"/>
      {/* Inner circle */}
      <circle cx="60" cy="60" r="40" stroke="#0A0A0A" strokeWidth="0.8"/>
      {/* Cardinal tick marks */}
      <line x1="60" y1="12" x2="60" y2="20" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="60" y1="100" x2="60" y2="108" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="60" x2="20" y2="60" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="100" y1="60" x2="108" y2="60" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Ordinal ticks */}
      <line x1="94" y1="26" x2="89" y2="31" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="26" y1="26" x2="31" y2="31" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="94" y1="94" x2="89" y2="89" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="26" y1="94" x2="31" y2="89" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round"/>
      {/* North needle (solid) */}
      <path d="M60 60 L54 72 L60 22 L66 72 Z" stroke="#0A0A0A" strokeWidth="1.2" strokeLinejoin="round" fill="#0A0A0A"/>
      {/* South needle (outline) */}
      <path d="M60 60 L54 48 L60 98 L66 48 Z" stroke="#0A0A0A" strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Center dot */}
      <circle cx="60" cy="60" r="3" fill="#0A0A0A"/>
    </svg>
  );
}
