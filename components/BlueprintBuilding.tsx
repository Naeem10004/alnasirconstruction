export default function BlueprintBuilding() {
  return (
    <svg
      viewBox="0 0 560 520"
      fill="none"
      className="w-full h-auto max-w-xl mx-auto"
      aria-hidden="true"
    >
      {/* grid backdrop */}
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#faf8f4" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="560" height="520" fill="url(#grid)" />

      {/* ground line */}
      <line x1="40" y1="470" x2="520" y2="470" stroke="#e2971f" strokeWidth="1.5" />
      {/* hatching under ground */}
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={45 + i * 20}
          y1="470"
          x2={35 + i * 20}
          y2="482"
          stroke="#e2971f"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      ))}

      {/* main tower block */}
      <rect x="150" y="120" width="180" height="350" stroke="#faf8f4" strokeWidth="2" />
      {/* floor lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="150"
          y1={160 + i * 40}
          x2="330"
          y2={160 + i * 40}
          stroke="#faf8f4"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {/* windows grid */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={165 + col * 38}
            y={135 + row * 40}
            width="20"
            height="24"
            stroke="#4d7999"
            strokeWidth="1"
            fill="#2f5573"
            fillOpacity={row % 3 === 0 && col % 2 === 0 ? "0.55" : "0.2"}
          />
        ))
      )}

      {/* side annex block */}
      <rect x="330" y="260" width="110" height="210" stroke="#faf8f4" strokeWidth="2" />
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 2 }).map((_, col) => (
          <rect
            key={`a-${row}-${col}`}
            x={347 + col * 42}
            y={278 + row * 42}
            width="24"
            height="26"
            stroke="#e2971f"
            strokeWidth="1"
            fill="#e2971f"
            fillOpacity="0.18"
          />
        ))
      )}

      {/* crane */}
      <line x1="90" y1="470" x2="90" y2="90" stroke="#faf8f4" strokeWidth="2" />
      <line x1="90" y1="90" x2="230" y2="90" stroke="#faf8f4" strokeWidth="2" />
      <line x1="90" y1="90" x2="55" y2="105" stroke="#faf8f4" strokeWidth="2" />
      <line x1="150" y1="90" x2="150" y2="130" stroke="#e2971f" strokeWidth="1.5" />
      <line x1="90" y1="115" x2="115" y2="90" stroke="#faf8f4" strokeWidth="1" />

      {/* dimension line - height */}
      <line x1="470" y1="120" x2="470" y2="470" stroke="#e2971f" strokeWidth="1" />
      <line x1="463" y1="120" x2="477" y2="120" stroke="#e2971f" strokeWidth="1" />
      <line x1="463" y1="470" x2="477" y2="470" stroke="#e2971f" strokeWidth="1" />
      <text
        x="486"
        y="300"
        fill="#e2971f"
        fontSize="11"
        fontFamily="monospace"
        transform="rotate(90 486 300)"
      >
        38.0 M
      </text>

      {/* dimension line - width */}
      <line x1="150" y1="495" x2="330" y2="495" stroke="#e2971f" strokeWidth="1" />
      <line x1="150" y1="489" x2="150" y2="501" stroke="#e2971f" strokeWidth="1" />
      <line x1="330" y1="489" x2="330" y2="501" stroke="#e2971f" strokeWidth="1" />
      <text x="205" y="512" fill="#e2971f" fontSize="11" fontFamily="monospace">
        22.5 M
      </text>
    </svg>
  );
}
