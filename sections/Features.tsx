"use client"
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player"
import prodImg from "@/assets/product-image.png"
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "motion/react";
import { animate } from "motion";
import { option } from "motion/react-client";
const tabs = [
  {
    icon: "lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const LottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1]

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: "loop"
    }
    animate(
      xPercentage, [0, 100, 100, 0, 0], options);

    animate(
      yPercentage, [0, 0, 100, 100, 0], options);
  }, []);


  const handleMouse = () => {
    if (!LottieRef.current) return;
    LottieRef.current.seek(0);
    LottieRef.current.play();
  }

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleMouse}
      className="border border-white/15 lg:flex-1 flex items-center p-2.5 rounded-xl gap-2.5 relative"
    >
      <motion.div
        style={{
          maskImage,
        }}
        className="absolute inset-0 -mx-px border border-[#A369ff] rounded-xl "></motion.div>
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={LottieRef}
          src={tab.icon}
          className="h-5 w-5"
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-[600]">
          new
        </div>
      )}
    </div>
  )
}
// 317


export const Features = () => {
  return <section className="px-2 py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter ">Elevate your SEO efforts.</h2>
      <p className="text-white/70 text-lg md:text-xl tracking-tighter text-center mt-5 lg:max-w-2xl lg:mx-auto">From small stratups to large enterprises, our AI-driven tool has revlutionized
        the way businesses approach SEO. Discover the power of our platform.</p>
      <div className="mt-10 flex flex-col lg:flex-row  gap-3 px-2">
        {tabs.map(tab => {
          return (
            <FeatureTab {...tab} key={tab.title} />
          )
        })}
      </div>
      <div className="border border-white/20 p-2.5 rounded-xl mt-3">
        <div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{
          backgroundImage: `url(${prodImg.src})`,
        }}></div>
      </div>
    </div>
  </section>;
};
