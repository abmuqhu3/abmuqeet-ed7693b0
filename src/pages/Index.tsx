import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import ProfileImage from "@/components/ProfileImage";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    setIsVisible(true);

    // Simulate loading state
    const timeout = setTimeout(() => {
      toast({
        title: "Welcome to my portfolio",
        description: "Feel free to explore my work and get in touch!"
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [toast]);
  return <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-12 md:pt-24 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <div className={`w-full lg:w-1/2 space-y-6 transition-all duration-700 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 md:text-6xl font-bold text-justify">ABDUL MUQEET. K</h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Postgraduate in Robotics & AI | Embedded Systems & Autonomous Navigation Specialist
            </h2>
            
            <p className="text-lg text-muted-foreground/90 max-w-xl">
              Passionate about creating intelligent robotic systems with expertise in embedded systems, 
              autonomous navigation, and AI-powered solutions for real-world challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link to="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="#contact">
                  Let's Connect
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:am586288@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/abdulmuqeet343" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/abmuqhu3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Contact Section */}
      <Contact />
    </div>;
};
export default Index;