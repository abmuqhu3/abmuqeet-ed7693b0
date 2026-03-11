import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, ExternalLink, FolderOpen, Rocket } from "lucide-react";

const projects = [
  {
    title: "Software Defined Vehicle (SDV) Perception System",
    description:
      "Working on Automotive ADAS perception stack development using Texas Instruments Jacinto Zonal Controller boards for real-time sensor processing and perception pipelines.",
    details:
      "Developing perception modules for ADAS using TI Jacinto platform with OpenVX and TIDL frameworks. Building sensor processing pipelines for camera, radar, and lidar data. Implementing object detection, lane detection, and free-space estimation models optimized for embedded deployment on automotive-grade hardware.",
    tech: ["TI Jacinto", "OpenVX", "Vision Apps", "TIDL", "Embedded Linux", "Sensor Processing", "ADAS"],
    achievements: ["Automotive-grade perception pipeline", "Real-time embedded deployment", "Multi-sensor fusion architecture"],
    featured: true,
    github: "",
  },
  {
    title: "Decentralized Navigation & Obstacle Avoidance for Swarm Robots",
    description:
      "Developed a decentralized multi-robot navigation system with a master–slave framework, where follower robots autonomously tracked and followed a teleoperated master robot in real time.",
    details:
      "Implemented autonomous obstacle avoidance, localization, and path coordination using ROS navigation stack, TF transforms, and sensor fusion. Optimized swarm behavior to achieve reliable real-time following, cooperative movement, and scalability in multi-robot setups.",
    tech: ["ROS", "SLAM", "Sensor Fusion", "Python", "Multi-Agent Systems"],
    achievements: ["Real-time multi-robot coordination", "Decentralized obstacle avoidance", "Scalable swarm architecture"],
    featured: false,
    github: "https://github.com/abmuqhu3/Swarm-Robots",
  },
  {
    title: "Driver Drowsiness & Attention Warning System (DDAWS)",
    description:
      "Lightweight camera-only framework fusing per-driver adaptive calibration with six concurrent physiological cues under a two-tier hierarchical alert scheme.",
    details:
      "Fuses EAR, MAR, PERCLOS, KSS, and 3D head-pose yaw/pitch. Runs on standard CPU at under 5ms per frame with no GPU. Tested on 23 participants across 63,544 frames achieving 79.09% Detection Rate and 72.09% Alert Precision.",
    tech: ["MediaPipe", "OpenCV", "Python", "Computer Vision", "Real-time Systems"],
    achievements: ["79.09% Detection Rate", "< 5ms per frame on CPU", "23-participant validation study"],
    featured: false,
    github: "",
  },
  {
    title: "OCR-Assisted Automated Medication Prescription Reader",
    description:
      "Full-stack web application to automatically extract structured medicine data from printed prescriptions using Google Vision API.",
    details:
      "Integrated Google Vision API for initial text detection and trained ML models to improve accuracy of handwritten and printed text recognition. Features a pharmaceutical reminder system that alerts users about scheduled dosages and monitors medication supply.",
    tech: ["Google Vision API", "React.js", "OpenCV", "NLP", "Python"],
    achievements: ["Automated medicine extraction", "Pharmaceutical reminder system", "Published at RCAAI 2025"],
    featured: false,
    github: "https://github.com/abmuqhu3/MedAI",
  },
  {
    title: "Pneumonia Classification & Segmentation using U-Net",
    description:
      "Deep learning diagnostic system to classify chest X-ray images into normal and pneumonia-affected categories with 89% classification accuracy.",
    details:
      "Trained and fine-tuned CNN architectures for medical image classification. Implemented U-Net segmentation to isolate infected lung regions with Dice coefficient of 0.76 and IoU of 0.62.",
    tech: ["U-Net", "CNN", "TensorFlow", "Medical Imaging", "Python"],
    achievements: ["89% classification accuracy", "U-Net pixel-wise segmentation", "Published at RCAAI 2025"],
    featured: false,
    github: "https://github.com/abmuqhu3/Pneumonia_Detection",
  },
  {
    title: "Zomato Restaurant Data Analysis",
    description:
      "Exploratory data analysis on 12,000+ restaurants in Bengaluru to identify key factors influencing ratings, popularity, and customer preferences.",
    details:
      "Analyzed cuisine type, location, average cost, delivery options, and online presence to determine impact on customer engagement. Generated actionable insights through comprehensive statistical analysis and visualization.",
    tech: ["Python", "Pandas", "NumPy", "Data Visualization", "SQL"],
    achievements: ["12,000+ restaurants analyzed", "Multi-factor correlation analysis", "Customer behavior insights"],
    featured: false,
    github: "",
  },
  {
    title: "Air Pollution Monitoring System with SMS Alerts",
    description:
      "Real-time air quality monitoring system using gas sensors to measure pollutants like CO₂ and CO with automated SMS alert notifications.",
    details:
      "Developed embedded software for continuous data acquisition and sensor calibration using microcontrollers. System triggers SMS alerts when pollution levels exceed defined thresholds.",
    tech: ["Embedded C", "IoT", "Gas Sensors", "SMS API", "Microcontrollers"],
    achievements: ["Real-time monitoring", "Automated threshold alerts", "Embedded sensor calibration"],
    featured: false,
    github: "",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`floating-card-glow overflow-hidden transition-all duration-500 group ${
        project.featured ? "md:col-span-2 border-primary/20" : ""
      }`}
    >
      <div className="p-6 md:p-7">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {project.featured && (
            <span className="section-label !py-1 !px-3 !text-[9px]">
              <Star className="h-2.5 w-2.5" /> Featured
            </span>
          )}
        </div>
        <h3 className="text-lg font-rajdhani font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wide">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-space">
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
              <div className="bg-secondary/30 rounded-xl p-5 mb-4 border border-border/30">
                <p className="text-sm text-foreground/75 leading-relaxed font-space">
                  {project.details}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-[10px] font-orbitron font-semibold text-primary mb-3 uppercase tracking-[0.2em]">Key Achievements</p>
                <ul className="space-y-2">
                  {project.achievements.map((a) => (
                    <li key={a} className="text-sm text-foreground/75 flex gap-2 font-space">
                      <Rocket className="h-3.5 w-3.5 text-primary/70 flex-shrink-0 mt-0.5" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm font-orbitron text-primary/80 hover:text-primary transition-colors duration-300 text-[11px] tracking-wider"
          >
            {expanded ? "COLLAPSE" : "EXPAND"}
            <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-exo text-primary/70 hover:text-primary transition-colors duration-300 text-[11px] tracking-wider underline-offset-4 hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              <FolderOpen className="h-3 w-3" />
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            <span className="text-primary glow-text-blue">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl text-sm font-space">
            Research and engineering projects spanning robotics, autonomous systems, automotive perception, medical AI, and embedded systems.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
