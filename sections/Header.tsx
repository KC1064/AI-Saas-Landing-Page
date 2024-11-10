import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg"
import Button from "@/sections/Button"

export const Header = () => {
  return <header className="flex py-4 w-full border-b border-white/15 justify-between px-4 md:border-none md:justify-center sticky top-0 z-10 ">
    <div className="flex justify-between items-center w-full md:border md:border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur-xl">
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
        <Button />
        <MenuIcon className="md:hidden" />
      </div>
    </div>
  </header>;
};
