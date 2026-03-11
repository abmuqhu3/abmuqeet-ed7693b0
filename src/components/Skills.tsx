import { motion } from "framer-motion";
import { Code, Brain, Cpu, Wrench, Bot, Users, Car, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Programming",
    icon: Code,
    skills: ["Python", "C++ (Basics)", "SQL", "MATLAB"],
    color: "from-neon-blue/20 to-neon-cyan/10",
  },
  {
    category: "AI / Computer Vision",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "YOLO", "OpenCV", "Deep Learning", "CNNs", "NLP", "OCR", "Pandas", "NumPy", "Scikit-Learn"],
    color: "from-neon-purple/20 to-neon-blue/10",
  },
  {
    category: "Robotics / Autonomous Systems",
    icon: Bot,
    skills: ["ROS / ROS2", "SLAM", "Navigation Stack", "Sensor Fusion", "Path Planning", "LLMs", "Multi-Agent Systems"],
    color: "from-neon-cyan/20 to-accent/10",
  },
  {
    category: "Automotive / Embedded",
    icon: Car,
    skills: ["TI Jacinto", "OpenVX", "Vision Apps", "TIDL", "Embedded Linux", "ESP32", "STM32", "Arduino", "NVIDIA Jetson", "PLCs"],
    color: "from-neon-orange/20 to-neon-blue/10",
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git / GitHub", "Linux", "Docker", "Fusion 360", "Ansys", "UiPath RPA"],
    color: "from-neon-blue/15 to-neon-purple/10",
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Research & Innovation", "Adaptability", "Communication", "Team Work"],
    color: "from-accent/15 to-neon-cyan/10",
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
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              <Zap className="h-3 w-3" />
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            Skills & <span className="text-primary glow-text-blue">Tools</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="floating-card-glow p-6 group cursor-default"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_12px_hsl(var(--neon-blue)/0.15)] transition-all duration-300">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-rajdhani font-semibold text-foreground text-sm tracking-wide">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
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
