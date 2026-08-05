"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Plate from "@/components/ui/Plate";

/**
 * Hero plate with a gentle entrance and a very small pointer parallax.
 * Parallax only reacts to mouse pointers (not touch) and is disabled
 * entirely when the user prefers reduced motion.
 */
export default function PlateVisual({ alt }: { alt: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 18 });
  const y = useSpring(rawY, { stiffness: 60, damping: 18 });

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(dx * 14);
    rawY.set(dy * 14);
  }

  function onPointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative mx-auto w-[86vw] max-w-105 lg:w-full lg:max-w-none"
    >
      {/* Warm radial glow behind the plate */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-125 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,154,61,0.28) 0%, rgba(201,154,61,0.08) 45%, transparent 70%)",
        }}
      />
      <motion.div
        style={reduceMotion ? undefined : { x, y }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative"
      >
        <Plate title={alt} className="h-auto w-full drop-shadow-2xl" />
      </motion.div>
    </div>
  );
}
