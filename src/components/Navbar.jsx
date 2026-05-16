import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Home Lab", href: "#homelab" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "py-4" : "py-6",
        isScrolled && !isMenuOpen 
          ? "bg-background/80 backdrop-blur-xl border-border shadow-sm" 
          : "bg-transparent border-transparent"
      )}
    >
      {/* Main Navbar Content (Added relative z-50 so it sits above the mobile overlay) */}
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl relative z-50">
        
        {/* Logo */}
        <a className="text-xl font-bold text-primary flex items-center tracking-tight" href="/">
          <span className="relative z-10 tracking-tighter">
            <span className="text-foreground">D</span>W
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="pl-4 border-l border-border/50">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen((prev) => !prev)} className="p-2 text-foreground focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Overlay (Moved OUTSIDE the flex container) */}
      <div
        className={cn(
          // Using 100dvh prevents iOS Safari address bar jumps
          "fixed top-0 left-0 w-full h-[100dvh] bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Added a subtle slide-up animation to the links for a smoother feel */}
        <div 
          className={cn(
            "flex flex-col space-y-8 text-xl text-center transition-all duration-500",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};