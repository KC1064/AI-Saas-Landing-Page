"use client"
import Button from "./Button";
import starbg from "@/assets/stars.png"
import gridLines from "@/assets/grid-lines.png"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "motion/react"
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const rect = to.current.getBoundingClientRect();
    mouseX.set(event.x - rect.left);
    mouseY.set(event.y - rect.top);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }
  })

  return [mouseX, mouseY]
}

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black,transparent)`
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])
  return <section ref={sectionRef} className="py-20 md:py-24 px-2">
    <div className="container">
      <motion.div
        animate={{ backgroundPositionX: starbg.width }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="border border-white/15 py-24 rounded-xl overflow-hidden relative " style={{
          backgroundImage: `url(${starbg.src})`,
          backgroundPositionY
        }}>
        <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay -z-10 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
          backgroundImage: `url(${gridLines.src})`
        }}></div>
        <h1 className="text-5xl md:text-6xl mx-auto tracking-tighter text-center font-medium ">AI Driven SEO for everyone.</h1>
        <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-3 tracking-tight">Achieve clear, impactful results without the complexity.</p>
        <div className="flex justify-center mt-8"><Button />
        </div>
      </motion.div>
    </div>
  </section>;
};
