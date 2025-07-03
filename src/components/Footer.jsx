import React from "react";
import MissWaltersEffect from "./MissWaltersEffect";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 text-sm">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-10">
          {/* Left: Brand, Links, and Copyright */}
          <div className="md:w-1/2 flex flex-col gap-10">
            {/* Logo */}
            <div>
              <h4 className="text-[28px] md:text-[36px] font-semibold lowercase tracking-tight relative font-[Verdana] leading-none">
                miss walters
              </h4>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-10 text-sm">
              <ul className="space-y-2 min-w-[180px]">
                <li>
                  <a href="#" className="hover:underline transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Contact
                  </a>
                </li>
              </ul>

              <ul className="space-y-2 min-w-[200px]">
                <li>
                  <a href="#" className="hover:underline transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-400">
              Crafted by{" "}
              <a
                href="https://agsoftware.vercel.app/" // Replace with your actual URL
                className="underline hover:text-gray-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                agsoftware
              </a>{" "}
              © {new Date().getFullYear()} Miss Walters.
            </div>
          </div>

          {/* Right: Animated Miss Walters Effect */}
          <div className="md:w-1/2 flex justify-center md:justify-end md:pt-0">
            <MissWaltersEffect />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
