import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h2>
          <div className="h-1 w-16 bg-primary mb-8 mx-auto" />

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Open to research collaborations, autonomous systems projects, and opportunities in robotics and AI. Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild variant="default" size="lg">
              <a href="mailto:am586288@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                am586288@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Hyderabad, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
