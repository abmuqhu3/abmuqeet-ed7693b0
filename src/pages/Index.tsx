import { useState, useEffect } from "react";
import PortfolioSidebar from "@/components/PortfolioSidebar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Track active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "publications", "experience", "resume", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen page-gradient-bg">
      {/* Mobile nav */}
      <MobileNav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main floating card container */}
      <div className="lg:p-6 lg:min-h-screen lg:flex lg:items-stretch">
        <div className="floating-card lg:flex lg:w-full lg:max-w-[1400px] lg:mx-auto overflow-hidden lg:min-h-[calc(100vh-48px)] relative">
          {/* Left sidebar */}
          <PortfolioSidebar activeSection={activeSection} />

          {/* Right main content */}
          <div id="main-scroll-container" className="flex-1 overflow-y-auto relative">
            {/* Top bar with dark mode toggle (desktop) */}
            <div className="hidden lg:flex items-center justify-between px-6 py-3 border-b border-border/30 sticky top-0 z-20 bg-card/90 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="font-orbitron text-sm font-bold text-primary">Abdul</span>
                <span className="font-orbitron text-sm font-bold text-foreground">Muqeet</span>
              </div>
              <div className="flex items-center gap-4">
                {["Home", "About", "Projects", "Publications", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`text-xs font-mono tracking-wide transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-muted-foreground hover:text-primary h-8 w-8">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Content sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Publications />
            <Experience />
            <ResumeSection />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
