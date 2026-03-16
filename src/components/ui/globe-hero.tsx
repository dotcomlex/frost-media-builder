import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useState, useEffect, Component, ErrorInfo, ReactNode } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import heroMountains from "@/assets/hero-mountains.png";

interface DotGlobeHeroProps {
  rotationSpeed?: number;
  globeRadius?: number;
  className?: string;
  children?: React.ReactNode;
}

// Class-based error boundary to catch WebGL crashes
class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("WebGL not available, rendering without globe:", error.message);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Globe: React.FC<{
  rotationSpeed: number;
  radius: number;
}> = ({ rotationSpeed, radius }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
      groupRef.current.rotation.x += rotationSpeed * 0.3;
      groupRef.current.rotation.z += rotationSpeed * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <icosahedronGeometry args={[radius, 8]} />
        <pointsMaterial
          size={0.008}
          color="#E8E8E8"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const DotGlobeHero = React.forwardRef<HTMLDivElement, DotGlobeHeroProps>(
  (
    {
      rotationSpeed = 0.0015,
      globeRadius = 2.2,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [showGlobe, setShowGlobe] = useState(false);

    useEffect(() => {
      setShowGlobe(isWebGLAvailable());
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full min-h-[85vh] md:min-h-[85vh] overflow-hidden bg-alpine-black",
          className
        )}
        {...props}
      >
        {/* Mountain background */}
        <img
          src={heroMountains}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 z-[2] bg-black/50" />

        {/* Globe canvas — only if WebGL available */}
        {showGlobe && (
          <div className="absolute inset-0 z-[3]">
            <WebGLErrorBoundary>
              <Canvas
                gl={{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
              >
                <PerspectiveCamera makeDefault position={[0, 0.5, 4.5]} fov={45} />
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <Globe rotationSpeed={rotationSpeed} radius={globeRadius} />
              </Canvas>
            </WebGLErrorBoundary>
          </div>
        )}

        {/* Subtle gradient overlays for text readability */}
        <div className="absolute inset-0 z-[4] bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 z-[5] bg-gradient-to-t from-alpine-black/50 via-transparent to-alpine-black/30" />

        {/* Content overlay */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    );
  }
);

DotGlobeHero.displayName = "DotGlobeHero";

export { DotGlobeHero, type DotGlobeHeroProps };
