import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface DotGlobeHeroProps {
  rotationSpeed?: number;
  globeRadius?: number;
  className?: string;
  children?: React.ReactNode;
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
          size={0.025}
          color="#D4A843"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

const DotGlobeHero = React.forwardRef<HTMLDivElement, DotGlobeHeroProps>(
  (
    {
      rotationSpeed = 0.003,
      globeRadius = 1.8,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full min-h-[85vh] md:min-h-[85vh] overflow-hidden bg-alpine-black",
          className
        )}
        {...props}
      >
        {/* Content overlay */}
        <div className="relative z-10 h-full w-full">{children}</div>

        {/* Globe canvas — positioned to the right */}
        <div className="absolute inset-0 z-[1]">
          <Canvas
            gl={{ alpha: true, antialias: true }}
            style={{ background: "transparent" }}
          >
            <PerspectiveCamera makeDefault position={[2, 0.3, 3]} fov={45} />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <Globe rotationSpeed={rotationSpeed} radius={globeRadius} />
          </Canvas>
        </div>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>
    );
  }
);

DotGlobeHero.displayName = "DotGlobeHero";

export { DotGlobeHero, type DotGlobeHeroProps };
