import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const navLinks = [
    { name: "Socials", sub: ["Instagram", "Tiktok", "Facebook", "YouTube"] },
    { name: "Community", path: "/Roll Call" },
    { name: "About", sub: ["Gallery", "Awards", "Features"] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY || currentY < 80);
      setLastScrollY(currentY);
      setIsAtTop(currentY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      aria-label="global"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isAtTop ? "bg-transparent" : "bg-black shadow-md"
      } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Top Nav Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="logo" className="w-8" />
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          className="md:hidden flex items-center gap-2 text-white text-sm font-medium"
          onClick={() => setMenuOpen(true)}
        >
          <span>Menu</span>
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              {link.sub ? (
                <button
                  className="flex items-center gap-1 text-sm font-medium text-white"
                  onClick={() =>
                    setSubmenuOpen(submenuOpen === index ? null : index)
                  }
                >
                  {link.name}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <NavLink
                  to={link.path}
                  className="text-sm font-medium text-white"
                >
                  {link.name}
                </NavLink>
              )}

              {link.sub && submenuOpen === index && (
                <ul className="absolute top-full left-0 mt-2 bg-white border text-sm w-48 shadow-lg z-50">
                  {link.sub.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex items-center justify-between py-4">
            <span className="font-medium text-[#0a0a0a]">Menu</span>
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col pt-4 space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.sub ? (
                  <button
                    className="w-full flex justify-between items-center py-2"
                    onClick={() =>
                      setSubmenuOpen(submenuOpen === index ? null : index)
                    }
                  >
                    <span>{link.name}</span>
                    {submenuOpen === index ? (
                      <ChevronLeft size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className="block py-2 text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}

                {link.sub && submenuOpen === index && (
                  <ul className="pl-4 border-l border-gray-200 mt-1 space-y-2">
                    {link.sub.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="block text-sm py-1 hover:text-[#A100FF]"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
