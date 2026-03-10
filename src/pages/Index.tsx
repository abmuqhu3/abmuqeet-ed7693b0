import { useState, useEffect, useCallback } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import RoboticArm3D from "@/components/RoboticArm3D";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Publications", id: "publications" },
  { label: "Experience", id: "experience" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

type GrabState = 'idle' | 'reaching' | 'grabbing' | 'pulling' | 'releasing';

const GRAB_SEQUENCE_TIMING = {
  reaching: 800,
  grabbing: 600,
  pulling: 700,
  releasing: 500,
};

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [grabTarget, setGrabTarget] = useState<string | null>(null);
  const [grabState, setGrabState] = useState<GrabState>('idle');

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
      setShowNav(scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const triggerArmGrab = useCallback((target: string) => {
    if (grabState !== 'idle') return;
    setGrabTarget(target);
    setGrabState('reaching');
    setTimeout(() => setGrabState('grabbing'), GRAB_SEQUENCE_TIMING.reaching);
    setTimeout(() => setGrabState('pulling'), GRAB_SEQUENCE_TIMING.reaching + GRAB_SEQUENCE_TIMING.grabbing);
    setTimeout(() => setGrabState('releasing'), GRAB_SEQUENCE_TIMING.reaching + GRAB_SEQUENCE_TIMING.grabbing + GRAB_SEQUENCE_TIMING.pulling);
    setTimeout(() => {
      setGrabState('idle');
      setGrabTarget(null);
    }, GRAB_SEQUENCE_TIMING.reaching + GRAB_SEQUENCE_TIMING.grabbing + GRAB_SEQUENCE_TIMING.pulling + GRAB_SEQUENCE_TIMING.releasing);
  }, [grabState]);

  const scrollTo = (id: string) => {
    triggerArmGrab(id);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 600);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed 3D Arm */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RoboticArm3D
          scrollProgress={scrollProgress}
          grabTarget={grabTarget}
          grabState={grabState}
        />
      </div>

      {/* Floating navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto"
          >
            <div className="floating-card px-2 py-1.5 flex items-center gap-1 rounded-full border border-border/30">
              <button
                onClick={() => scrollTo("home")}
                className="font-orbitron text-[10px] tracking-[0.2em] text-primary/80 hover:text-primary transition-colors px-3 py-1.5"
              >
                KAM
              </button>
              <div className="hidden md:flex items-center gap-0.5">
                {navItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1.5 text-[10px] font-exo font-medium tracking-wider uppercase transition-all duration-300 rounded-full ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 shadow-[0_0_12px_hsl(var(--neon-blue)/0.15)]"
                        : "text-muted-foreground hover:text-foreground/80 hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1 ml-1">
                <div className="status-dot" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-muted-foreground h-7 w-7 rounded-full"
                >
                  {mobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden floating-card mt-2 rounded-2xl overflow-hidden"
                >
                  <div className="p-3 space-y-0.5">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`block w-full text-left px-4 py-2.5 text-xs font-exo font-medium tracking-wider uppercase rounded-xl transition-all ${
                          activeSection === item.id
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground/80 hover:bg-secondary/50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero */}
      <Hero scrollProgress={scrollProgress} onArmGrab={triggerArmGrab} />

      {/* Content sections */}
      <div className="relative z-10">
        {/* Subtle grid overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02] grid-bg" />

        <SectionDivider />
        <SectionReveal direction="left"><About /></SectionReveal>
        <SectionDivider />
        <SectionReveal direction="right"><Skills /></SectionReveal>
        <SectionDivider />
        <SectionReveal direction="bottom"><Projects /></SectionReveal>
        <SectionDivider />
        <SectionReveal direction="top"><Publications /></SectionReveal>
        <SectionDivider />
        <SectionReveal direction="left"><Experience /></SectionReveal>
        <SectionDivider />
        <SectionReveal direction="right"><ResumeSection /></SectionReveal>
        <SectionDivider />
        <SectionReveal direction="bottom"><Contact /></SectionReveal>
        <Footer />
      </div>
    </div>
  );
};

const SectionDivider = () => (
  <div className="relative py-8 flex items-center justify-center">
    <div className="accent-line w-full absolute" />
    <div className="relative flex items-center gap-4 bg-background px-6">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shadow-[0_0_6px_hsl(var(--neon-blue)/0.4)]" />
      <div className="w-6 h-px bg-primary/20" />
      <div className="w-2 h-2 rotate-45 border border-primary/20" />
      <div className="w-6 h-px bg-primary/20" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shadow-[0_0_6px_hsl(var(--neon-blue)/0.4)]" />
    </div>
  </div>
);

export default Index;
