import Button from "./Button";
import starbg from "@/assets/stars.png"
import gridLines from "@/assets/grid-lines.png"

export const CallToAction = () => {
  return <section className="py-20 md:py-24 px-2">
    <div className="container">
      <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" style={{
        backgroundImage: `url(${starbg.src})`,
        backgroundSize: "cover",
      }}>
        <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] -z-10 " style={{
          backgroundImage:`url(${gridLines.src})`
        }}></div>
        <h1 className="text-5xl md:text-6xl mx-auto tracking-tighter text-center font-medium">AI Driven SEO for everyone.</h1>
        <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-3 tracking-tight">Achieve clear, impactful results without the complexity.</p>
        <div className="flex justify-center mt-8"><Button />
        </div>
      </div>
    </div>
  </section>;
};
