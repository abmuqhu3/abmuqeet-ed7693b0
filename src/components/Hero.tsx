import { motion } from "framer-motion";
import { FileText, BookOpen, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-10 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-blue)), transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-56 h-56 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-purple)), transparent)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base font-mono text-muted-foreground tracking-widest uppercase"
            >
              Hi, I am
            </motion.p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Kalaigar Abdul{" "}
              <span className="text-primary glow-text-blue">Muqeet</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl font-semibold text-primary/80 tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-3" />
              Research Engineer
            </motion.p>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
              Building intelligent autonomous systems — Robotics, AI/ML, Perception, ADAS technologies, and next-gen vehicle platforms.
            </p>
              Building intelligent autonomous systems — perception, ADAS technologies, and next-gen vehicle platforms.
            </p>

            {/* Glowing accent line */}
            <div className="w-32 h-px bg-gradient-to-r from-primary via-accent to-transparent" />

            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={() => scrollTo("projects")} className="group glow-blue font-mono text-xs">
                <FolderOpen className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button variant="outline" onClick={() => scrollTo("publications")} className="border-primary/30 hover:border-primary/60 font-mono text-xs">
                <BookOpen className="mr-2 h-4 w-4" />
                Publications
              </Button>
              <Button variant="outline" asChild className="border-primary/30 hover:border-primary/60 font-mono text-xs">
                <a href="/Abdul_Muqeet_Resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Circular profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-5 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary glow-blue" />
              </motion.div>
              <motion.div
                className="absolute -inset-10 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
              </motion.div>

              <div className="absolute -inset-6 rounded-full bg-primary/5 blur-2xl" />
              <Avatar className="w-44 h-44 lg:w-56 lg:h-56 border-2 border-primary/30 shadow-2xl relative glow-blue">
                <AvatarImage src="/profile.jpg" alt="Kalaigar Abdul Muqeet" />
                <AvatarFallback className="bg-card text-3xl font-bold text-primary font-mono">AM</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 circuit-line" />
    </section>
  );
};

export default Hero;
