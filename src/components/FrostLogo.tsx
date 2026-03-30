interface FrostLogoProps {
  size?: number;
  className?: string;
}

const FrostLogo = ({ size = 40, className = "" }: FrostLogoProps) => (
  <span
    className={`font-heading font-black tracking-tight text-text-on-dark ${className}`}
    style={{ fontSize: size * 0.55, lineHeight: 1 }}
  >
    BrainBrite<sup className="text-[0.5em] align-super">®</sup>
  </span>
);

export default FrostLogo;
