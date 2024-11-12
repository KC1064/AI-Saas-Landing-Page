"use client"
import Button from "@/sections/Button";
import starbg from "@/assets/stars.png"
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return <motion.section
    ref={sectionRef}
    animate={{
      backgroundPositionX: starbg.width,
    }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 120
    }}
    className="h-[700px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
    style={{
      backgroundImage: `url(${starbg.src})`,
      backgroundPositionY,
    }}>
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_14%,rgb(14,0,36,.5)_78%,transparent)]"></div>
    <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border-white/20 border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"></div>
    <motion.div
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        rotate: "1turn"
      }}
      transition={{
        repeat: Infinity,
        duration: 45,
        ease: "linear"
      }}
      className="absolute h-[380px] w-[380px] md:h-[580px] md:w-[580px] rounded-full border-white/20 border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-3 w-3 left-0 bg-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-3 w-3 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-6 w-6 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </motion.div>
    <motion.div
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        rotate: "-1turn"
      }}
      transition={{
        repeat: Infinity,
        duration: 45,
        ease: "linear"
      }}
      className="absolute h-[450px] w-[450px] md:h-[650px] md:w-[650px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>
    <motion.div
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        rotate: "-1turn"
      }}
      transition={{
        repeat: Infinity,
        duration: 45,
        ease: "linear"
      }}
      className="absolute h-[544px] w-[544px] md:h-[900px] md:w-[900px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-3 w-3 left-0 bg-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-3 w-3 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-6 w-6 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </motion.div>
    <div className="container relative">
      <h1 className="text-8xl md:text-[160px] md:leading-none text-center tracking-tighter bg-white font-semibold bg-[radial-gradient(50%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-transparent">AI SEO</h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto text-center text-white/70 mt-5 px-4">Elevate your site's visibility effortlessly with AI,
        where smart technology meets user-friendly SEO tools.</p>
      <div className="flex justify-center items-center mt-8">
        <Button />
      </div>
    </div>
  </motion.section>;
};
