import { motion } from "framer-motion";
import { FileText, BookOpen, FolderOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import RoboticArm3D from "./RoboticArm3D";

interface HeroProps {
  scrollProgress: number;
}

const Hero = ({ scrollProgress }: HeroProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-end overflow-hidden bg-[#030308]">
      {/* 3D Arm Scene */}
      <div className="absolute inset-0 z-0">
        <RoboticArm3D scrollProgress={scrollProgress} />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, rgba(3,3,8,0.95) 0%, rgba(3,3,8,0.4) 30%, transparent 60%),
            linear-gradient(to right, rgba(3,3,8,0.6) 0%, transparent 40%),
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

      {/* Small tagline - left side */}
      <motion.div
        className="absolute left-6 md:left-10 bottom-[30%] md:bottom-[35%] z-10 max-w-[240px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-light italic">
          AI-Driven Autonomous Systems for Precision, Intelligence, and <span className="text-foreground/80 not-italic font-medium">Adaptability</span>
        </p>
      </motion.div>

      {/* Main title - bottom */}
      <div className="relative z-10 w-full px-6 md:px-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-foreground/90">
            <span className="italic font-serif font-light text-foreground/70">Research</span>{" "}
            <span className="font-normal">Engineer</span>
          </h1>
        </motion.div>

        {/* Action buttons & social */}
        <motion.div
          className="flex items-center justify-between mt-6 flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className="flex gap-3">
            <Button 
              onClick={() => scrollTo("projects")} 
              variant="outline"
              className="border-[#00d4ff]/20 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 font-mono text-[10px] tracking-wider uppercase text-foreground/70 hover:text-foreground rounded-none px-5 h-9"
            >
              <FolderOpen className="mr-2 h-3 w-3" />
              Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollTo("publications")}
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
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/30">
            <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">LinkedIn</a>
            <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">GitHub</a>
            <a href="mailto:am586288@gmail.com" className="hover:text-[#00d4ff] transition-colors">Email</a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute right-6 md:right-10 bottom-0 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[9px] font-mono text-foreground/20 tracking-widest uppercase writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <ChevronDown className="h-3 w-3 text-foreground/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
