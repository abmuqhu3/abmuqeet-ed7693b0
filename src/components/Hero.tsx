import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section-padding min-h-[90vh] flex items-center">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Research Engineer
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Kalaigar Abdul Muqeet
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              ADAS & Autonomous Systems Engineer specializing in embedded control, sensor integration, and ROS-based autonomy. Research focus in AI, robotics, perception systems, and autonomous navigation.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Autonomous Systems", "Computer Vision", "SLAM", "ROS", "Deep Learning"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button onClick={() => scrollTo("publications")} className="group">
                View Publications
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
              <Button variant="outline" onClick={() => scrollTo("contact")}>
                Get in Touch
              </Button>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:am586288@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/5 blur-2xl" />
              <Avatar className="w-48 h-48 lg:w-56 lg:h-56 border-4 border-background shadow-2xl relative">
                <AvatarImage src="/placeholder.svg" alt="Kalaigar Abdul Muqeet" />
                <AvatarFallback className="bg-secondary text-3xl font-semibold text-muted-foreground">
                  KAM
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
