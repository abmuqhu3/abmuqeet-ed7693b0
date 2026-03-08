import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = [
    "Autonomous Systems",
    "Computer Vision",
    "SLAM & Perception",
    "ADAS Engineering",
    "Deep Learning",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-blue)), transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-purple)), transparent)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">
                R&D @ TiHAN, IIT Hyderabad
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Kalaigar{" "}
              <span className="text-primary glow-text-blue">Abdul Muqeet</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
              AI / Robotics / Autonomous Systems Research Engineer working on perception systems, ADAS technologies, and intelligent vehicle platforms.
            </p>

            {/* Animated role tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {roles.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-3 py-1 text-xs font-mono font-medium rounded border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button onClick={() => scrollTo("projects")} className="group glow-blue">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
              <Button variant="outline" onClick={() => scrollTo("contact")} className="border-primary/30 hover:border-primary/60">
                Let's Connect
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-1 pt-2">
              {[
                { icon: Mail, href: "mailto:am586288@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://linkedin.com/in/abdulmuqeet343", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/abmuqhu3", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                  <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary glow-blue" />
              </motion.div>
              <motion.div
                className="absolute -inset-8 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
              </motion.div>

              <div className="absolute -inset-6 rounded-full bg-primary/5 blur-2xl" />
              <Avatar className="w-52 h-52 lg:w-60 lg:h-60 border-2 border-primary/30 shadow-2xl relative glow-blue">
                <AvatarImage src="/profile.jpg" alt="Kalaigar Abdul Muqeet" />
                <AvatarFallback className="bg-card text-3xl font-bold text-primary font-mono">
                  KAM
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom circuit line */}
      <div className="absolute bottom-0 left-0 right-0 circuit-line" />
    </section>
  );
};

export default Hero;
