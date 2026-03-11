import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Briefcase, label: "Research Engineer at TiHAN, IIT Hyderabad" },
  { icon: GraduationCap, label: "M.Tech Robotics & AI — CGPA 8.21" },
  { icon: FileText, label: "3 Publications — RCAAI 2025 & DDAWS Conference" },
  { icon: Award, label: "Smart India Hackathon 2024 • IEEE RAS Summit" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              <ScrollText className="h-3 w-3" />
              Document
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            <span className="text-primary glow-text-blue">Resume</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="floating-card p-7">
              <p className="text-foreground/75 leading-relaxed text-sm font-space mb-6">
                ADAS and Autonomous Systems Engineer with experience in embedded control, sensor integration, and ROS-based autonomy for ground vehicles and production road vehicles.
              </p>

              <div className="space-y-4">
                <p className="text-[10px] font-orbitron font-semibold uppercase tracking-[0.2em] text-primary">Key Highlights</p>
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div key={h.label} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_10px_hsl(var(--neon-blue)/0.12)] transition-all duration-300">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/75 font-space">{h.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button asChild className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 hover:border-primary/50 font-orbitron text-[10px] tracking-[0.15em] uppercase rounded-xl h-11 px-7 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.2)]">
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
            className="floating-card-glow overflow-hidden"
          >
            <div className="flex items-center px-5 py-3 bg-secondary/30 border-b border-border/30">
              <span className="text-[10px] font-orbitron font-semibold text-primary/80 uppercase tracking-[0.2em]">Resume Preview</span>
            </div>
            <div className="aspect-[3/4]">
              <iframe
                src={"/Abdul_Muqeet_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"}
                className="w-full h-full"
                title="Resume Preview"
                style={{ border: "none" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
