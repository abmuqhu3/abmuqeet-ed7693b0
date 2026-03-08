import { motion } from "framer-motion";
import { Code, Brain, Cpu, Wrench, Bot, Users, Car } from "lucide-react";

const skillCategories = [
  {
    category: "Programming",
    icon: Code,
    skills: ["Python", "C++ (Basics)", "SQL", "MATLAB"],
  },
  {
    category: "AI / Computer Vision",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "YOLO", "OpenCV", "Deep Learning", "CNNs", "NLP", "OCR", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    category: "Robotics / Autonomous Systems",
    icon: Bot,
    skills: ["ROS / ROS2", "SLAM", "Navigation Stack", "Sensor Fusion", "Path Planning", "LLMs", "Multi-Agent Systems"],
  },
  {
    category: "Automotive / Embedded",
    icon: Car,
    skills: ["TI Jacinto", "OpenVX", "Vision Apps", "TIDL", "Embedded Linux", "ESP32", "STM32", "Arduino", "NVIDIA Jetson", "PLCs"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git / GitHub", "Linux", "Docker", "Fusion 360", "Ansys", "UiPath RPA"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Research & Innovation", "Adaptability", "Communication", "Team Work"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#00d4ff]/30" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d4ff]/60">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            Skills & <span className="font-serif-display italic text-foreground/70">Tools</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-foreground/[0.02] border border-foreground/[0.06] rounded p-5 hover:border-[#00d4ff]/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded border border-[#00d4ff]/15 bg-[#00d4ff]/5 flex items-center justify-center group-hover:border-[#00d4ff]/30 transition-colors">
                    <Icon className="h-3.5 w-3.5 text-[#00d4ff]/70" />
                  </div>
                  <h3 className="font-medium text-foreground/70 text-sm">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-foreground/[0.03] text-foreground/40 hover:text-[#00d4ff]/80 hover:bg-[#00d4ff]/5 transition-colors border border-transparent hover:border-[#00d4ff]/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
