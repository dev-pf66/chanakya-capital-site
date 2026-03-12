export default function Handshake({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Left arm */}
      <path d="M10 75 L38 60" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Right arm */}
      <path d="M110 75 L82 60" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Left hand base */}
      <path d="M38 60 C42 56 48 55 52 58 L60 62" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Right hand base */}
      <path d="M82 60 C78 56 72 55 68 58 L60 62" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Clasped hands */}
      <path d="M50 58 C54 52 62 50 66 56" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M54 62 C58 56 66 54 70 60" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Left fingers */}
      <path d="M44 54 C46 48 52 47 54 52" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M48 52 C50 46 56 45 58 50" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Right fingers */}
      <path d="M76 54 C74 48 68 47 66 52" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M72 52 C70 46 64 45 62 50" stroke="#0A0A0A" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Grip lines */}
      <line x1="55" y1="63" x2="65" y2="63" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="53" y1="67" x2="67" y2="67" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
