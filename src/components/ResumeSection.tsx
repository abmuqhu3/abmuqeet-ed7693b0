import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
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
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#00d4ff]/30" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d4ff]/60">Document</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            <span className="font-serif-display italic text-foreground/70">Resume</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-foreground/40 leading-relaxed text-sm">
              ADAS and Autonomous Systems Engineer with experience in embedded control, sensor integration, and ROS-based autonomy for ground vehicles and production road vehicles.
            </p>

            <div className="space-y-4">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00d4ff]/50">Key Highlights</p>
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded border border-[#00d4ff]/15 bg-[#00d4ff]/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#00d4ff]/30 transition-colors">
                      <Icon className="h-3.5 w-3.5 text-[#00d4ff]/60" />
                    </div>
                    <span className="text-sm text-foreground/40">{h.label}</span>
                  </div>
                );
              })}
            </div>

            <Button asChild className="mt-4 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#00d4ff]/80 border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 font-mono text-xs rounded-none h-10 px-6">
              <a href="/Abdul_Muqeet_Resume.pdf" download>
                <Download className="h-3.5 w-3.5 mr-2" />
                download_resume.pdf
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-foreground/[0.02] border border-foreground/[0.06] rounded overflow-hidden hover:border-[#00d4ff]/15 transition-all"
          >
            <div className="flex items-center px-4 py-2 bg-foreground/[0.03] border-b border-foreground/[0.05]">
              <span className="text-[10px] font-mono font-bold text-[#00d4ff]/50 uppercase tracking-widest">Resume Preview</span>
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
