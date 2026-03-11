import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-label">
              <Signal className="h-3 w-3" />
              Connect
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            Get in <span className="text-primary glow-text-blue">Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-8" />

          <p className="text-muted-foreground mb-10 leading-relaxed text-sm font-space">
            Open to research collaborations, autonomous systems projects, and opportunities in robotics, ADAS, and AI. Let's connect.
          </p>

          <div className="floating-card-glow p-8 md:p-10 max-w-lg mx-auto">
            <div className="flex flex-col gap-4">
              <Button asChild className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 hover:border-primary/50 font-orbitron text-[10px] tracking-[0.15em] uppercase rounded-xl h-12 px-6 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.2)] w-full justify-start">
                <a href="mailto:am586288@gmail.com">
                  <Mail className="h-4 w-4 mr-3" />
                  am586288@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border/40 hover:border-primary/40 font-exo text-[10px] tracking-wider uppercase text-foreground/80 hover:text-foreground rounded-xl h-12 transition-all duration-300 w-full justify-start">
                <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-3" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border/40 hover:border-primary/40 font-exo text-[10px] tracking-wider uppercase text-foreground/80 hover:text-foreground rounded-xl h-12 transition-all duration-300 w-full justify-start">
                <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-3" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/70 font-mono-code mt-6 pt-6 border-t border-border/20">
              <MapPin className="h-3.5 w-3.5 text-primary/60" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
