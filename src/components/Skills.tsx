import { motion } from "framer-motion";
import { Code, Brain, Cpu, Wrench, Bot, Users } from "lucide-react";

const skillCategories = [
  {
    category: "Programming",
    icon: Code,
    skills: ["Python", "C++ (Basics)", "SQL"],
  },
  {
    category: "AI / Machine Learning",
    icon: Brain,
    skills: ["OpenCV", "OCR", "Deep Learning (CNNs)", "NLP", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch"],
  },
  {
    category: "Robotics / Autonomous Systems",
    icon: Bot,
    skills: ["ROS / ROS2", "SLAM", "Navigation Stack", "LLMs", "Sensor Fusion", "Path Planning"],
  },
  {
    category: "Embedded Systems",
    icon: Cpu,
    skills: ["ESP32", "STM32", "Arduino", "NVIDIA Jetson", "PLCs", "Microcontrollers"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git / GitHub", "Linux", "Docker", "Fusion 360", "Ansys", "UiPath RPA", "MATLAB"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Research & Innovation", "Adaptability", "Communication", "Team Work"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Tools</h2>
          <div className="h-1 w-16 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground hover:text-foreground transition-colors"
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
