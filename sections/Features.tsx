"use client"
import { DotLottiePlayer } from "@dotlottie/react-player"
import Image from "next/image";
import prodImg from "@/assets/product-image.png"
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

export const Features = () => {
  return <section className="px-2 py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts.</h2>
      <p className="text-white/70 text-lg md:text-xl tracking-tighter text-center mt-5">From small stratups to large enterprises, our AI-driven tool has revlutionized
        the way businesses approach SEO. Discover the power of our platform.</p>
      <div className="mt-10 flex flex-col lg:flex-row  gap-3 px-2">
        {tabs.map(tab => {
          return (
            <div key={tab.title} className="border border-white/15 lg:flex-1 flex items-center p-2.5 rounded-xl gap-2.5">
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon}
                  autoplay
                  className="h-6 w-6"
                />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>}
            </div>
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
