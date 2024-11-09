import Button from "@/utils/Button";
import starbg from "@/assets/stars.png"

export const Hero = () => {
  return <section className="h-screen flex items-center"
    style={{
      backgroundImage: `url(${starbg.src})`
    }}>
    <div className="absolute h-64 w-64 bg-purple-500 rounded-full border-white/20 border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"></div>
    <div className="absolute h-[380px] w-[380px] rounded-full border-white/20 border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-3 w-3 left-0 bg-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-3 w-3 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-6 w-6 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
      <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>
    <div className="container relative">
      <h1 className="text-8xl text-center tracking-tighter bg-white font-semibold bg-[radial-gradient(50%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-transparent">AI SEO</h1>
      <p className="text-lg text-center text-white/70 mt-5 px-4">Elevate your site's visibility effortlessly with AI,
        where smart technology meets user-friendly SEO tools.</p>
      <div className="flex justify-center items-center mt-8">
        <Button />
      </div>
    </div>
  </section>;
};
