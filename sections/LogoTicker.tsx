"use client"
import acme from "@/assets/logo-acme.png"
import apex from "@/assets/logo-apex.png" 
import celestial from "@/assets/logo-celestial.png"
import echo from "@/assets/logo-echo.png"
import pulse from "@/assets/logo-pulse.png"
import quantum from "@/assets/logo-quantum.png"
import {motion} from "motion/react"


export const LogoTicker = () => {

  return <section className="py-20 md:py-24 w-full justify-center">
    <div className="container">
      <div className="flex items-center gap-3">
        <div className="flex-1 md:flex-none">
          <h2 className="text-sm px-2 text-white/80 md:text-lg md:px-5">Trusted by top innovative teams</h2>
        </div>
        <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
          initial={{translateX:"-50%"}}
          animate={{translateX:"0"}}
          transition={{
            repeat: Infinity,
            duration:45,
            ease:"linear"
          }}
          className="flex flex-none gap-14 pr-12 -translate-x-1/2">
            {[
              acme,
              pulse,
              echo,
              celestial,
              apex,
              quantum,
              acme,
              pulse,
              echo,
              celestial,
              apex,
              quantum,
            ].map((logo,idx)=>{
              return <img src={logo.src} alt="Logo" key={idx} className="h-6 w-auto" />
            })}
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};
