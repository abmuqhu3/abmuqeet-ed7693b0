import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
            Open to research collaborations, autonomous systems projects, and opportunities in robotics, ADAS, and AI. Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button asChild size="lg" className="glow-blue font-mono text-sm">
              <a href="mailto:am586288@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                am586288@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:border-primary/60 font-mono text-sm">
              <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:border-primary/60 font-mono text-sm">
              <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
            <MapPin className="h-3 w-3 text-primary" />
            <span>Hyderabad, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
