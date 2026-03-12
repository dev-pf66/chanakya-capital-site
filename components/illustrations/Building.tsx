export default function Building({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Main building body */}
      <rect x="20" y="40" width="80" height="72" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Roof / pediment */}
      <polyline points="12,40 60,12 108,40" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
      {/* Columns */}
      <line x1="35" y1="40" x2="35" y2="112" stroke="#0A0A0A" strokeWidth="1.5"/>
      <line x1="52" y1="40" x2="52" y2="112" stroke="#0A0A0A" strokeWidth="1.5"/>
      <line x1="68" y1="40" x2="68" y2="112" stroke="#0A0A0A" strokeWidth="1.5"/>
      <line x1="85" y1="40" x2="85" y2="112" stroke="#0A0A0A" strokeWidth="1.5"/>
      {/* Door */}
      <rect x="48" y="82" width="24" height="30" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Windows */}
      <rect x="28" y="55" width="14" height="14" stroke="#0A0A0A" strokeWidth="1.2"/>
      <rect x="78" y="55" width="14" height="14" stroke="#0A0A0A" strokeWidth="1.2"/>
      {/* Base line */}
      <line x1="10" y1="112" x2="110" y2="112" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
