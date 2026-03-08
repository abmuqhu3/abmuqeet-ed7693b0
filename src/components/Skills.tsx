import { motion } from "framer-motion";
import { Code, Brain, Cpu, Wrench, Bot, Users, Car } from "lucide-react";

const skillCategories = [
  {
    category: "Programming",
    icon: Code,
    color: "neon-blue",
    skills: ["Python", "C++ (Basics)", "SQL", "MATLAB"],
  },
  {
    category: "AI / Computer Vision",
    icon: Brain,
    color: "neon-purple",
    skills: ["PyTorch", "TensorFlow", "YOLO", "OpenCV", "Deep Learning", "CNNs", "NLP", "OCR", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    category: "Robotics / Autonomous Systems",
    icon: Bot,
    color: "neon-cyan",
    skills: ["ROS / ROS2", "SLAM", "Navigation Stack", "Sensor Fusion", "Path Planning", "LLMs", "Multi-Agent Systems"],
  },
  {
    category: "Automotive / Embedded",
    icon: Car,
    color: "neon-orange",
    skills: ["TI Jacinto", "OpenVX", "Vision Apps", "TIDL", "Embedded Linux", "ESP32", "STM32", "Arduino", "NVIDIA Jetson", "PLCs"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "neon-blue",
    skills: ["Git / GitHub", "Linux", "Docker", "Fusion 360", "Ansys", "UiPath RPA"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    color: "neon-purple",
    skills: ["Problem Solving", "Research & Innovation", "Adaptability", "Communication", "Team Work"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & <span className="text-primary">Tools</span>
            </h2>
          </div>
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
                className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 hover:border-primary/30 transition-all group hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-secondary/80 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20"
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
