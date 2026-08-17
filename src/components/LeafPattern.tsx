type LeafPatternProps = {
  opacity?: number;
  variant?: 'dark' | 'light';
  className?: string;
};

/** Tiled backdrop using the brand's leaf line-art asset (public/leaf-pattern*.svg). */
export default function LeafPattern({ opacity = 0.1, variant = 'dark', className }: LeafPatternProps) {
  const src = variant === 'light' ? '/leaf-pattern-light.svg' : '/leaf-pattern.svg';

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '520px auto',
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
}
