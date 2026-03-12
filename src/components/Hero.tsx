import { motion } from "framer-motion";
import { FileText, BookOpen, FolderOpen, ChevronDown, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RoboticArm3D from "@/components/RoboticArm3D";

interface HeroProps {
  scrollProgress: number;
  onArmGrab?: (target: string) => void;
}

const DrawingText = ({ text, className, delay = 0 }: {text: string;className?: string;delay?: number;}) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) =>
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          delay: delay + i * 0.08,
          duration: 0.4,
          ease: "easeOut"
        }}
        style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : undefined }}>
        
          {char}
        </motion.span>
      )}
    </span>);

};

const Hero = ({ scrollProgress, onArmGrab }: HeroProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    if (onArmGrab) onArmGrab(id);
    setTimeout(() => scrollTo(id), 600);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* 3D Robotic Arm Background */}
      <div className="absolute inset-0 z-0">
        <RoboticArm3D scrollProgress={scrollProgress} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
      style={{
        background: `
            linear-gradient(to top, hsl(220 30% 4% / 0.95) 0%, hsl(220 30% 4% / 0.5) 25%, transparent 55%),
            linear-gradient(to right, hsl(220 30% 4% / 0.9) 0%, hsl(220 30% 4% / 0.4) 35%, transparent 65%),
            radial-gradient(ellipse at 70% 50%, transparent 40%, hsl(220 30% 4% / 0.7) 100%)
          `
      }} />
      

      {/* Scanline overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none scanline opacity-30" />

      {/* Top HUD bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary/30" />
          <span className="font-orbitron text-[10px] tracking-[0.4em] text-primary font-semibold">AB</span>
          <span className="font-mono-code text-[9px] tracking-wider text-muted-foreground/60">​ </span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="section-label">
            <div className="status-dot !w-1.5 !h-1.5" />
            <span>ONLINE</span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) =>
            <motion.div
              key={i}
              className="w-0.5 bg-primary/50 rounded-full"
              animate={{ height: [4, 14, 4] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }} />

            )}
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-20 md:pt-0">
        {/* Profile section */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}>
          
          {/* Profile Image */}
          <div className="relative group">
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_40px_hsl(var(--neon-blue)/0.1)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}>
              
              <img
                src="/profile.jpg"
                alt="Kalaigar Abdul Muqeet"
                className="w-full h-full object-cover scale-x-[-1]" />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
            {/* HUD corners */}
            <div className="absolute -inset-2 hud-corner rounded-2xl pointer-events-none" />
            {/* Orbit ring */}
            <motion.div
              className="absolute inset-[-10px] rounded-2xl border border-primary/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
            
          </div>

          {/* Name */}
          <div className="text-center md:text-left">
            <motion.h2
              className="text-lg md:text-xl tracking-[0.15em] text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}>
              
              <span className="font-rajdhani font-light text-foreground/70 tracking-[0.25em] text-sm">KALAIGAR </span>
              <span className="font-rajdhani font-light text-foreground/70 tracking-[0.25em] text-sm">ABDUL </span>
              <br />
              <span className="font-orbitron font-bold text-primary text-2xl md:text-3xl glow-text-blue tracking-[0.1em]">MUQEET</span>
            </motion.h2>
            <motion.div
              className="flex items-center gap-2 mt-3 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}>
              
              <div className="h-px w-8 bg-primary/30" />
              <p className="text-[10px] text-primary/80 font-orbitron tracking-[0.2em] uppercase">
                ADAS & Autonomous Systems
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side: Title + CTAs */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}>
          
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed font-light mb-4 max-w-md font-space">
            Building intelligent autonomous systems — Robotics, AI/ML, Perception,{" "}
            <span className="text-foreground font-medium">ADAS</span> technologies, and{" "}
            <span className="text-primary font-medium">next-gen vehicle platforms</span>.
          </p>

          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] tracking-tight text-foreground/90 whitespace-nowrap">
            <DrawingText
              text="Research"
              className="italic font-serif-display font-light text-foreground/70"
              delay={1.2} />
            {" "}
            <DrawingText
              text="Engineer"
              className="font-rajdhani font-bold not-italic"
              delay={1.9} />
            
          </h1>

          {/* Animated underline */}
          <motion.div
            className="h-[2px] mt-3"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3, duration: 1.2, ease: "easeOut" }}
            style={{
              maxWidth: "400px",
              background: "linear-gradient(90deg, hsl(var(--neon-blue) / 0.7), hsl(var(--neon-purple) / 0.4), transparent)"
            }} />
          

          {/* Action buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.6 }}>
            
            <Button
              onClick={() => handleNavClick("projects")}
              className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 hover:border-primary/50 font-orbitron text-[10px] tracking-[0.15em] uppercase rounded-xl px-5 h-10 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.2)]">
              
              <FolderOpen className="mr-2 h-3.5 w-3.5" />
              Projects
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("publications")}
              className="border-border/50 hover:border-primary/40 font-exo text-[10px] tracking-wider uppercase text-foreground/80 hover:text-foreground rounded-xl px-5 h-10 transition-all duration-300">
              
              <BookOpen className="mr-2 h-3.5 w-3.5" />
              Publications
            </Button>
            <Button variant="outline" asChild className="border-border/50 hover:border-primary/40 font-exo text-[10px] tracking-wider uppercase text-foreground/80 hover:text-foreground rounded-xl px-5 h-10 transition-all duration-300">
              <a href="/Abdul_Muqeet_Resume.pdf" download>
                <FileText className="mr-2 h-3.5 w-3.5" />
                Resume
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("contact")}
              className="border-border/50 hover:border-primary/40 font-exo text-[10px] tracking-wider uppercase text-foreground/80 hover:text-foreground rounded-xl px-5 h-10 transition-all duration-300">
              
              <Mail className="mr-2 h-3.5 w-3.5" />
              Contact
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6 mt-6 font-mono-code text-[10px] tracking-[0.2em] uppercase text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.6 }}>
            
            <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">LinkedIn</a>
            <span className="text-border">|</span>
            <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">GitHub</a>
            <span className="text-border">|</span>
            <a href="mailto:am586288@gmail.com" className="hover:text-primary transition-colors duration-300">Email</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-6 md:right-12 bottom-8 flex flex-col items-center gap-3 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
        
        <span className="text-[8px] font-orbitron text-muted-foreground/50 tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
        <ChevronDown className="h-3 w-3 text-primary/40" />
      </motion.div>
    </section>);

};

export default Hero;