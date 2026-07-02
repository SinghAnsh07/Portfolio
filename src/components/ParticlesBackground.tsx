"use client";

import { useTheme } from "next-themes";
import Particles from "@/components/magicui/Particles";

export default function ParticlesBackground() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -2,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <Particles
        particleColors={
          theme === "dark"
            ? ["#ffffff", "#8888ff"]
            : ["#00000033", "#ffffff33"]
        }
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
