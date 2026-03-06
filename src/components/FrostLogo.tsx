interface FrostLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

const FrostLogo = ({ size = 40, className = "", showText = true }: FrostLogoProps) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mountain peak */}
      <path d="M24 6L42 38H6L24 6Z" fill="url(#frost-mountain)" opacity="0.9" />
      {/* Snow cap / frost accent */}
      <path d="M24 6L31 20H17L24 6Z" fill="url(#frost-cap)" />
      {/* Frost crystal lines */}
      <path d="M24 2V10M20 4L24 8L28 4M18 8L24 14L30 8" stroke="hsl(213, 80%, 65%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <defs>
        <linearGradient id="frost-mountain" x1="24" y1="6" x2="24" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(213, 80%, 50%)" />
          <stop offset="1" stopColor="hsl(213, 55%, 20%)" />
        </linearGradient>
        <linearGradient id="frost-cap" x1="24" y1="6" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(210, 25%, 97%)" />
          <stop offset="1" stopColor="hsl(213, 80%, 70%)" />
        </linearGradient>
      </defs>
    </svg>
    {showText && (
      <span className="font-heading font-bold tracking-tight text-foreground" style={{ fontSize: size * 0.45 }}>
        FROST<span className="text-ice-blue"> MEDIA</span>
      </span>
    )}
  </div>
);

export default FrostLogo;
