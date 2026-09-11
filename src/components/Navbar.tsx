import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                  <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="rounded-lg p-2 text-xl text-slate-700 hover:bg-slate-100 md:hidden"
  aria-label="Toggle menu"
>
  {isMenuOpen ? "✕" : "☰"}
</button>
        
        <a href="#" className="flex items-center gap-2">
          <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-lg text-lg font-bold text-white">
            DS
          </div>

          <span className="text-xl font-bold">
            <span className="text-slate-900">Dev</span>{" "}
            <span className="brand-gradient">Stack</span>
          </span>
        </a>

       
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeLink === link.name
                  ? "text-pink-500"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

       
        <div className="flex items-center gap-2">

          
          <button className=" px-3 py-2 text-sm font-medium text-slate-700 sm:block">
            Sign In
          </button>

          <button className="gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  activeLink === link.name
                    ? "text-pink-500"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;