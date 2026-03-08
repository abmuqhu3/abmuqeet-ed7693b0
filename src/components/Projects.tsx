import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Decentralized Navigation & Obstacle Avoidance for Swarm Robots",
    description:
      "Developed a decentralized multi-robot navigation system with a master–slave framework, where follower robots autonomously tracked and followed a teleoperated master robot in real time.",
    details:
      "Implemented autonomous obstacle avoidance, localization, and path coordination using ROS navigation stack, TF transforms, and sensor fusion. Optimized swarm behavior to achieve reliable real-time following, cooperative movement, and scalability in multi-robot setups.",
    tech: ["ROS", "SLAM", "Sensor Fusion", "Python", "Multi-Agent Systems"],
    achievements: ["Real-time multi-robot coordination", "Decentralized obstacle avoidance", "Scalable swarm architecture"],
  },
  {
    title: "OCR-Assisted Automated Medication Prescription Reader",
    description:
      "Full-stack web application to automatically extract structured medicine data from printed prescriptions using Google Vision API.",
    details:
      "Integrated Google Vision API for initial text detection and trained ML models to improve accuracy of handwritten and printed text recognition. Features a pharmaceutical reminder system that alerts users about scheduled dosages and monitors medication supply.",
    tech: ["Google Vision API", "React.js", "OpenCV", "NLP", "Python"],
    achievements: ["Automated medicine extraction", "Pharmaceutical reminder system", "Published at RCAAI 2025"],
  },
  {
    title: "Pneumonia Classification & Segmentation using U-Net",
    description:
      "Deep learning diagnostic system to classify chest X-ray images into normal and pneumonia-affected categories with 89% classification accuracy.",
    details:
      "Trained and fine-tuned CNN architectures for medical image classification. Implemented U-Net segmentation to isolate infected lung regions with Dice coefficient of 0.76 and IoU of 0.62.",
    tech: ["U-Net", "CNN", "TensorFlow", "Medical Imaging", "Python"],
    achievements: ["89% classification accuracy", "U-Net pixel-wise segmentation", "Published at RCAAI 2025"],
  },
  {
    title: "Zomato Restaurant Data Analysis",
    description:
      "Exploratory data analysis on 12,000+ restaurants in Bengaluru to identify key factors influencing ratings, popularity, and customer preferences.",
    details:
      "Analyzed cuisine type, location, average cost, delivery options, and online presence to determine impact on customer engagement. Generated actionable insights through comprehensive statistical analysis and visualization.",
    tech: ["Python", "Pandas", "NumPy", "Data Visualization", "SQL"],
    achievements: ["12,000+ restaurants analyzed", "Multi-factor correlation analysis", "Customer behavior insights"],
  },
  {
    title: "Air Pollution Monitoring System with SMS Alerts",
    description:
      "Real-time air quality monitoring system using gas sensors to measure pollutants like CO₂ and CO with automated SMS alert notifications.",
    details:
      "Developed embedded software for continuous data acquisition and sensor calibration using microcontrollers. System triggers SMS alerts when pollution levels exceed defined thresholds.",
    tech: ["Embedded C", "IoT", "Gas Sensors", "SMS API", "Microcontrollers"],
    achievements: ["Real-time monitoring", "Automated threshold alerts", "Embedded sensor calibration"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all group"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.details}
              </p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Key Achievements</p>
                <ul className="space-y-1">
                  {project.achievements.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent">✓</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs font-medium rounded border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          {expanded ? "Show less" : "View details"}
          <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-16 bg-primary mb-4" />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Research and engineering projects spanning robotics, autonomous systems, medical AI, and embedded systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
