"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="z-50"
      style={{
        position: "fixed",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(81,163,163,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        transform: "translate(-50%, -50%)",
        transition: "left 0.12s ease, top 0.12s ease",
      }}
    />
  );
}
