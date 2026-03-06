import frostmediaLogo from "@/assets/frostmedia-logo.webp";

interface FrostLogoProps {
  size?: number;
  className?: string;
}

const FrostLogo = ({ size = 40, className = "" }: FrostLogoProps) => (
  <img
    src={frostmediaLogo}
    alt="Frost Media"
    className={className}
    style={{ height: size, width: "auto" }}
  />
);

export default FrostLogo;
