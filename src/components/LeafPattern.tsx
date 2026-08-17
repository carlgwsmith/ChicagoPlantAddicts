type LeafPatternProps = {
  id: string;
  opacity?: number;
  className?: string;
};

/**
 * Tiled single-line leaf motif used as a decorative section backdrop.
 * Hand-drawn-style path, not traced from any reference asset.
 */
export default function LeafPattern({ id, opacity = 0.08, className }: LeafPatternProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        color: 'var(--ink)',
        opacity,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <pattern id={id} width="180" height="220" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
          <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
            <path d="M90 20 C 60 45, 50 90, 90 130 C 130 90, 120 45, 90 20 Z" />
            <path d="M90 20 L90 130" />
            <path d="M90 45 C 78 55, 72 68, 78 82" />
            <path d="M90 45 C 102 55, 108 68, 102 82" />
            <path d="M90 70 C 76 82, 70 96, 78 110" />
            <path d="M90 70 C 104 82, 110 96, 102 110" />
            <path d="M90 130 C 90 150, 84 168, 90 190" />
            <path d="M90 160 C 76 168, 66 180, 68 196" />
            <path d="M90 160 C 104 168, 114 180, 112 196" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
