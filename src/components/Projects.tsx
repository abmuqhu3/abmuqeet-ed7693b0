import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, ExternalLink } from "lucide-react";

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
      className={`bg-foreground/[0.02] border rounded overflow-hidden transition-all group ${
        project.featured
          ? "border-[#00d4ff]/20 hover:border-[#00d4ff]/40 md:col-span-2"
          : "border-foreground/[0.06] hover:border-[#00d4ff]/20"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          {project.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded bg-[#00d4ff]/5 text-[#00d4ff]/70 border border-[#00d4ff]/15">
              <Star className="h-3 w-3" /> Featured
            </span>
          )}
        </div>
        <h3 className="text-lg font-medium text-foreground/80 mb-2 group-hover:text-foreground transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-foreground/40 mb-4 leading-relaxed">
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
              <p className="text-sm text-foreground/40 mb-4 leading-relaxed">
                {project.details}
              </p>
              <div className="mb-4">
                <p className="text-[10px] font-mono font-bold text-[#00d4ff]/60 mb-2 uppercase tracking-widest">Key Achievements</p>
                <ul className="space-y-1">
                  {project.achievements.map((a) => (
                    <li key={a} className="text-sm text-foreground/40 flex gap-2">
                      <span className="text-[#00d4ff]/50 font-mono">→</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[11px] font-mono rounded border border-foreground/[0.06] text-foreground/35 hover:text-[#00d4ff]/70 hover:border-[#00d4ff]/20 transition-colors">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm font-mono text-[#00d4ff]/60 hover:text-[#00d4ff] transition-colors"
          >
            {expanded ? "collapse()" : "expand()"}
            <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-mono text-foreground/30 hover:text-[#00d4ff]/70 transition-colors"
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
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#00d4ff]/30" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d4ff]/60">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            <span className="font-serif-display italic text-foreground/70">Projects</span>
          </h2>
          <p className="text-foreground/35 mb-12 max-w-2xl text-sm">
            Research and engineering projects spanning robotics, autonomous systems, automotive perception, medical AI, and embedded systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
