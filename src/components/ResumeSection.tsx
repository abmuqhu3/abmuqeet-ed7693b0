import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Briefcase, label: "R&D at TiHAN, IIT Hyderabad" },
  { icon: GraduationCap, label: "M.Tech Robotics & AI — CGPA 8.21" },
  { icon: FileText, label: "2 Publications — RCAAI 2025, Taylor & Francis" },
  { icon: Award, label: "Smart India Hackathon 2024 • IEEE RAS Summit" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Resume</h2>
          <div className="h-1 w-16 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              ADAS and Autonomous Systems Engineer with experience in embedded control, sensor integration, and ROS-based autonomy for ground vehicles and production road vehicles.
            </p>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Key Highlights</p>
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{h.label}</span>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="mt-4">
              <a href="/Abdul_Muqeet_Resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-sm"
          >
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <iframe
                src="/Abdul_Muqeet_Resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
