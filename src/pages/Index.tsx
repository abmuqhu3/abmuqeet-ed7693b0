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

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
      setShowNav(scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
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
    <div className="min-h-screen bg-[#030308] text-foreground overflow-x-hidden">
      {/* Fixed 3D Arm - persists across scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RoboticArm3D
          scrollProgress={scrollProgress}
          grabTarget={grabTarget}
          grabState={grabState}
        />
      </div>

      {/* Floating nav */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030308]/80 border-b border-foreground/5"
          >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
              <button onClick={() => scrollTo("home")} className="font-orbitron text-xs tracking-[0.2em] text-[#00d4ff]/70 hover:text-[#00d4ff] transition-colors">
                KAM
              </button>
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase transition-colors rounded ${
                      activeSection === item.id
                        ? "text-[#00d4ff] bg-[#00d4ff]/5"
                        : "text-foreground/40 hover:text-foreground/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground/50 h-8 w-8">
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden border-t border-foreground/5 bg-[#030308]/95"
                >
                  <div className="p-4 space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`block w-full text-left px-4 py-2.5 text-xs font-mono tracking-wider uppercase rounded transition-colors ${
                          activeSection === item.id
                            ? "text-[#00d4ff] bg-[#00d4ff]/5"
                            : "text-foreground/40 hover:text-foreground/70"
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

      {/* Divider */}
      <div className="relative h-px z-10">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <SectionReveal direction="left"><About /></SectionReveal>
        <MechanicalDivider />
        <SectionReveal direction="right"><Skills /></SectionReveal>
        <MechanicalDivider />
        <SectionReveal direction="bottom"><Projects /></SectionReveal>
        <MechanicalDivider />
        <SectionReveal direction="top"><Publications /></SectionReveal>
        <MechanicalDivider />
        <SectionReveal direction="left"><Experience /></SectionReveal>
        <MechanicalDivider />
        <SectionReveal direction="right"><ResumeSection /></SectionReveal>
        <MechanicalDivider />
        <SectionReveal direction="bottom"><Contact /></SectionReveal>
        <Footer />
      </div>
    </div>
  );
};

const MechanicalDivider = () => (
  <div className="relative py-4 flex items-center justify-center">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
    <div className="relative flex items-center gap-3">
      <div className="w-8 h-px bg-[#00d4ff]/20" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/10" />
      <div className="w-8 h-px bg-[#00d4ff]/20" />
    </div>
  </div>
);

export default Index;
