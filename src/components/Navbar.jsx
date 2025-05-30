import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextMode);
  };

  return (
      <nav
          className={cn(
              "fixed w-full z-40 transition-all duration-300",
              isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow" : "py-5"
          )}
      >
        <div className="container flex items-center justify-between">
          {/* LEFT: Brand */}
          <a
              href="#hero"
              className="text-xl font-bold text-primary flex items-center"
          >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Srun</span> Veng
          </span>
          </a>

          {/* CENTER: Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
            ))}
          </div>

          {/* RIGHT: Hamburger + Toggle on mobile | Toggle on desktop */}
          <div className="flex items-center space-x-2 z-50">
            {/* Hamburger for mobile only */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-foreground"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors duration-300"
            >
              {isDarkMode ? (
                  <Sun className="h-6 w-6 text-yellow-300" />
              ) : (
                  <Moon className="h-6 w-6 text-blue-900" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
            className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
