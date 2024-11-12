import Logo from "@/assets/logo.svg"
import XSocial from "@/assets/social-x.svg"
import InstaSocial from "@/assets/social-instagram.svg"
import YtSocial from "@/assets/social-youtube.svg"



export const Footer = () => {
  return <footer className="py-5 px-3 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-7 lg:justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <div className="mt-0.5 font-medium lg:text-sm">AI Startup Landing Page</div>
        </div>
        <nav className="flex flex-col gap-4 lg:flex-row lg:max-w-2xl">
          <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm ">Features</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm ">Developers</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm ">Company</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm ">Blog</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm ">Changelog</a>
        </nav>
        <div className="flex gap-4">
          <XSocial className="text-white/70 hover:text-white transition"/>
          <InstaSocial className="text-white/70 hover:text-white transition"/>
          <YtSocial className="text-white/70 hover:text-white transition"/>
        </div>
      </div>
    </div>
  </footer>;
};
