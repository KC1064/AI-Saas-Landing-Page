import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg"
export const Header = () => {
  return <header className="flex py-4 w-full border-b border-white/15 justify-between px-4 md:border-none md:justify-center">
    <div className="flex justify-between items-center w-full md:border md:border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
    <div className="h-10 w-10 flex justify-center items-center border-white/20 rounded-lg border">
      <LogoIcon className="h-8 w-8" />
    </div>
    <div className="md:block hidden items-center">
      <nav className="flex items-center gap-8">
        <a href="#" className="text-white/70 hover:text-white transition duration-200 ">Features</a>
        <a href="#" className="text-white/70 hover:text-white transition duration-200 ">Developers</a>
        <a href="#" className="text-white/70 hover:text-white transition duration-200 ">Pricing</a>
        <a href="#" className="text-white/70 hover:text-white transition duration-200 ">Changelog</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <button className="relative px-3 py-2 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
        <div className="absolute inset-0">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(top,black,transparent)]"></div>
          <div className="inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
        </div>
        <span className="text-sm font-medium">
          Join Waitlist
        </span>
      </button>
      <MenuIcon className="md:hidden"/>
    </div>
    </div>
  </header>;
};
