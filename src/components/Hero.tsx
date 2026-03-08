import { motion } from "framer-motion";
import { FileText, BookOpen, FolderOpen, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollProgress: number;
  onArmGrab?: (target: string) => void;
}

const Hero = ({ scrollProgress, onArmGrab }: HeroProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    if (onArmGrab) onArmGrab(id);
    setTimeout(() => scrollTo(id), 600);
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-[#030308]">
      {/* Vignette overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, rgba(3,3,8,0.95) 0%, rgba(3,3,8,0.4) 30%, transparent 60%),
            linear-gradient(to right, rgba(3,3,8,0.7) 0%, transparent 50%),
            radial-gradient(ellipse at center, transparent 50%, rgba(3,3,8,0.5) 100%)
          `
        }}
      />

      {/* Top nav overlay */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10 py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="font-orbitron text-xs tracking-[0.3em] text-[#00d4ff]/80">ABDUL</span>
          <span className="font-orbitron text-xs tracking-[0.3em] text-foreground/60">MUQEET</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <div className="px-4 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#00d4ff]/80 tracking-wider">ONLINE</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-[#00d4ff]/60 rounded-full"
                  animate={{ height: [4, 12, 4] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Main content - Left side: Profile + Name */}
      <div className="relative z-10 w-full px-6 md:px-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Profile section */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="relative">
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#00d4ff]/20 shadow-[0_0_40px_rgba(0,212,255,0.15)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <img
                src="/profile.jpg"
                alt="Kalaigar Abdul Muqeet"
                className="w-full h-full object-cover scale-x-[-1]"
              />
            </motion.div>
            {/* Orbit ring */}
            <motion.div
              className="absolute inset-[-8px] rounded-full border border-[#00d4ff]/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-[-4px] left-1/2 w-2 h-2 rounded-full bg-[#00d4ff]/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '0 calc(50% + 72px)' }}
            />
          </div>

          {/* Name */}
          <div className="text-center md:text-left">
            <motion.h2
              className="text-lg md:text-xl font-orbitron tracking-[0.15em] text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              KALAIGAR ABDUL MUQEET
            </motion.h2>
            <motion.div
              className="flex items-center gap-2 mt-2 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="h-px w-8 bg-[#00d4ff]/30" />
              <p className="text-xs text-[#00d4ff]/60 font-mono tracking-wider uppercase">
                ADAS & Autonomous Systems
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side: Title + CTAs */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-light italic mb-4 max-w-md">
            Building intelligent autonomous systems — Robotics, AI/ML, Perception,{" "}
            <span className="text-foreground/80 not-italic font-medium">ADAS</span> technologies, and{" "}
            <span className="text-[#00d4ff]/70 not-italic font-medium">next-gen vehicle platforms</span>.
          </p>

          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-foreground/90 whitespace-nowrap">
            <span className="italic font-serif font-light text-foreground/70">Research</span>{" "}
            <span className="font-normal not-italic">Engineer</span>
          </h1>

          {/* Action buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Button
              onClick={() => handleNavClick("projects")}
              variant="outline"
              className="border-[#00d4ff]/20 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 font-mono text-[10px] tracking-wider uppercase text-foreground/70 hover:text-foreground rounded-none px-5 h-9"
            >
              <FolderOpen className="mr-2 h-3 w-3" />
              Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("publications")}
              className="border-foreground/10 hover:border-foreground/30 font-mono text-[10px] tracking-wider uppercase text-foreground/50 hover:text-foreground rounded-none px-5 h-9"
            >
              <BookOpen className="mr-2 h-3 w-3" />
              Publications
            </Button>
            <Button variant="outline" asChild className="border-foreground/10 hover:border-foreground/30 font-mono text-[10px] tracking-wider uppercase text-foreground/50 hover:text-foreground rounded-none px-5 h-9">
              <a href="/Abdul_Muqeet_Resume.pdf" download>
                <FileText className="mr-2 h-3 w-3" />
                Resume
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("contact")}
              className="border-foreground/10 hover:border-foreground/30 font-mono text-[10px] tracking-wider uppercase text-foreground/50 hover:text-foreground rounded-none px-5 h-9"
            >
              <Mail className="mr-2 h-3 w-3" />
              Contact
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6 mt-6 font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">LinkedIn</a>
            <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">GitHub</a>
            <a href="mailto:am586288@gmail.com" className="hover:text-[#00d4ff] transition-colors">Email</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-6 md:right-10 bottom-8 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] font-mono text-foreground/20 tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <ChevronDown className="h-3 w-3 text-foreground/20" />
      </motion.div>
    </section>
  );
};

export default Hero;
