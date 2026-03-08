import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
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
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#00d4ff]/30" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d4ff]/60">Connect</span>
            <div className="h-px w-12 bg-[#00d4ff]/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Get in <span className="font-serif-display italic text-foreground/70">Touch</span>
          </h2>

          <p className="text-foreground/35 mb-8 leading-relaxed text-sm">
            Open to research collaborations, autonomous systems projects, and opportunities in robotics, ADAS, and AI. Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button asChild className="bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#00d4ff]/80 border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 font-mono text-xs rounded-none h-10 px-6">
              <a href="mailto:am586288@gmail.com">
                <Mail className="h-3.5 w-3.5 mr-2" />
                am586288@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" className="border-foreground/[0.08] hover:border-[#00d4ff]/30 font-mono text-xs text-foreground/40 hover:text-foreground/70 rounded-none h-10">
              <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-3.5 w-3.5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="border-foreground/[0.08] hover:border-[#00d4ff]/30 font-mono text-xs text-foreground/40 hover:text-foreground/70 rounded-none h-10">
              <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-foreground/20 font-mono">
            <MapPin className="h-3 w-3 text-[#00d4ff]/30" />
            <span>Hyderabad, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
