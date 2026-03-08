import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent"}`}>
      <div className="section-container flex h-14 items-center justify-between">
        <a href="#home" onClick={(e) => scrollTo(e, "home")} className="font-bold text-sm tracking-widest uppercase text-foreground font-orbitron">
          <span className="text-primary glow-text-blue">KAM</span>
          <span className="text-muted-foreground ml-1 hidden sm:inline text-xs font-mono">// systems.portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href.slice(1))}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 font-mono tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-2 text-muted-foreground hover:text-primary">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>

        <div className="flex md:hidden items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-muted-foreground">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)} className="text-muted-foreground">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
        >
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href.slice(1))}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
