import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, ExternalLink, FolderOpen, Rocket } from "lucide-react";

const projects = [
  {
    title: "PixKit Software-Defined Vehicle — Dual-Board Autonomy Stack",
    description:
      "The autonomy stack for our research vehicle at TiHAN. Two boards work together: an NXP S32G owns the VCU CAN loop and RTK-GPS pipeline, and a TI Jacinto TDA4VM streams radar objects over a 500 kbps CAN bridge. Every safety-critical decision lives in this codebase.",
    details:
      "The VCU expects 50 Hz on three CAN IDs (0x130 drive, 0x131 brake, 0x132 steer) with rolling life counters and XOR checksums. Miss a beat and it fault-triggers. We were sitting at ~45 Hz with sleep() pacing — moved to monotonic-clock deadlines and the drift disappeared. Two hard bugs I'm proud of: (1) The parking brake would engage 1.5 s after arming — took a while to realize two Python processes were racing for the same CAN counter, which the VCU watchdog reads as non-monotonic. O_EXCL PID-file singleton + stale-PID takeover + 200 ms post-arm settle. Verified 15 s clean 0→6 km/h at 0% brake. (2) Single-frame radar noise was tripping the chassis-err-estop latch — the unrecoverable one, needs a physical power cycle. Added an N-frame threat-hold before we engage hard-brake state. Also tuned the DBC steering-angle-speed cap from ~100 °/s to the actual 500 °/s max, which fixed a 'why is steering so sluggish' bug that had bothered me for weeks. On the Jacinto side: AWR2944 mmWave radar, TLV point-cloud parsing, DBSCAN clustering (eps=0.70, min_samples=1), 8-class hierarchy (WALL, TRUCK, CAR, BUGGY, MOTORCYCLE, CYCLIST, PEDESTRIAN, STATIC), lateral gate at 1700 mm (body half-width), range [1.0 m, 45.0 m], height window [-1.0, 3.5] m, static-echo rejection at 1.87 m and 4.61 m ± 20 cm (EVM + chassis reflectors). ~9.8 fps steady-state.",
    tech: ["NXP S32G", "TI Jacinto TDA4VM", "TI AWR2944 mmWave", "CAN / DBC", "socket-CAN", "Fixposition RTK", "DBSCAN", "Python", "C", "Embedded Linux", "ISO 26262"],
    achievements: [
      "50 Hz safety-critical VCU control loop with rolling life counters + XOR checksums",
      "Eliminated chassis-err-estop latch on single-frame AEB triggers via N-frame debounce",
      "9.8 fps radar classifier, 8 object classes, static-echo rejection at 1.87 m + 4.61 m",
      "Raised steering-rate authority 5× (100 °/s → 500 °/s DBC max)",
    ],
    featured: true,
    github: "",
  },
  {
    title: "TIHAN Autonomous Navigation on Jetson AGX Orin",
    description:
      "The Jetson-side autonomy stack that runs on top of PixKit. ROS Noetic, ALOAM SLAM for mapping, NDT for localization, an MPC path follower that talks to the vehicle PLC over Modbus TCP. Shipped as a locked-down fleet installer that a non-technical operator can double-click to install.",
    details:
      "Sensor stack: Livox HAP + Velodyne VLP-16 fused with IMU and RTK-GPS through an EKF. Runtime rates: Livox IMU at 200 Hz, /ndt_pose at 10 Hz, state_est at 100 Hz, /vehicle/mpc_path at 50 Hz, control loop at 15 Hz. MPC config: N=12, DT=0.7 s, Q=[300,350,650,550], R=[100,3000] — the R weight on steering is roughly 30× the accel weight, which is a big reason left-to-right response feels sluggish (haven't retuned yet, needs road validation). Talks to the PLC at 192.168.140.5:502 — steering reg 400, throttle reg 500, brake coils 3/4, direction coil 20. Two fixes I want to call out: (1) The localization watchdog used to false-fail on tight corners at >8 km/h because it only checked pose yaw delta. Added a cross-check against Livox IMU angular velocity over 0.5 s — if the two agree within tolerance, it's a real corner, not a localization dropout. (2) On FAILED→OK recovery, upvel used to jump straight back to the pre-failure target, which re-tripped the watchdog because we were still mid-corner. Now it caps velocity at progress × acc_value for the next 5 waypoints. Fleet installer is 124 MB, self-extracting, AES-256-CBC payload (PBKDF2 100k), 5 core Python modules Cython-locked. Every Jetson gets its own device fingerprint from SHA-256(board_serial | eth0_MAC) — turns out /etc/machine-id is cloned across boards flashed from the same image, so it can't be used for fleet auth. Runs as tihan_svc under systemd at /opt/.acs_svc/ mode 0750. Shipped fixes for 25 real-world deployment bugs — pymodbus 3.6 dropped the unit= kwarg, ROS_PACKAGE_PATH chain across 8 workspaces was overwriting itself, stale /tmp/transformed_map.pcd from a previous run was blocking map_loader, and pkexec doesn't set SUDO_USER during uninstall.",
    tech: ["Jetson AGX Orin", "ROS Noetic", "ALOAM SLAM", "NDT Localization", "MPC", "Livox HAP", "Velodyne VLP-16", "Modbus TCP", "FastAPI", "MongoDB", "Firebase", "Cython", "AES-256", "systemd"],
    achievements: [
      "Full L2+ autonomy stack deployed across multi-Jetson fleet",
      "124 MB self-extracting installer with AES-256-CBC + Cython IP protection",
      "Solved cloneable /etc/machine-id problem via board-serial + MAC fingerprint",
      "25 real-world deployment bugs root-caused and shipped as installer patches",
    ],
    featured: true,
    github: "",
  },
  {
    title: "Native OSRM Waypoint Planning UI on Embedded S32G",
    description:
      "Leaflet + native-OSRM waypoint planner running directly on the NXP S32G autonomy board. Multi-waypoint routing resampled at 5 m, served by a bash + nc HTTP layer on port 8080 — no Node, no external server, no cloud dependency.",
    details:
      "Ported OSRM native to aarch64 embedded target — fixed 5 build errors specific to the NXP S32G toolchain. Leaflet-based UI with numbered click markers, waypoint undo, zoom-22 support, and crosshair. Multi-waypoint OSRM routing chained across every clicked waypoint, then re-sampled at 5 m for smooth vehicle following. Bash + netcat HTTP server on port 8080 — ~200 lines of shell, zero external dependencies, runs on the constrained embedded board.",
    tech: ["NXP S32G aarch64", "Leaflet", "OSRM", "Bash", "netcat HTTP"],
    achievements: [
      "OSRM native ported to aarch64 (5 build errors fixed)",
      "Zero-dependency HTTP server in ~200 lines of Bash + netcat",
      "Multi-waypoint routing with 5 m resampling for smooth path following",
    ],
    featured: false,
    github: "",
  },
  {
    title: "Indoor UAV Navigation with Vision-based SLAM",
    description:
      "Personal project — autonomous indoor UAV navigation in GPS-denied environments using RGB-D and visual-inertial cameras with real-time obstacle avoidance.",
    details:
      "Built indoor maps using vision-based SLAM; enabled real-time localization and navigation for stable autonomous flight without GPS. Integrated perception and odometry pipelines for real-time obstacle avoidance during indoor UAV operations. Validated on physical quadrotor platform with onboard compute.",
    tech: ["RGB-D Cameras", "Visual-Inertial SLAM", "ROS", "UAV Autonomy", "Computer Vision"],
    achievements: [
      "Autonomous flight in GPS-denied indoor environments",
      "Real-time SLAM-based localization for stable UAV control",
      "Onboard obstacle avoidance with vision + IMU fusion",
    ],
    featured: false,
    github: "",
  },
  {
    title: "Decentralized Navigation & Obstacle Avoidance for Swarm Robots",
    description:
      "My M.Tech thesis — a master–slave multi-robot navigation stack where follower robots autonomously tracked and followed a teleoperated master robot in real time, with decentralized obstacle avoidance and no central planner.",
    details:
      "Implemented autonomous obstacle avoidance, localization, and path coordination using ROS navigation stack, TF transforms, and sensor fusion. Optimized swarm behavior for reliable real-time following, cooperative movement, and scalability across multi-robot setups. Validated in Gazebo simulation and on physical mobile robots.",
    tech: ["ROS Nav2", "SLAM", "Sensor Fusion", "Python", "Gazebo", "Multi-Agent Systems"],
    achievements: ["Real-time multi-robot coordination", "Decentralized obstacle avoidance", "Scalable swarm architecture"],
    featured: false,
    github: "https://github.com/abmuqhu3/Swarm-Robots",
  },
  {
    title: "Driver Drowsiness & Attention Warning System (DDAWS)",
    description:
      "Lightweight camera-only framework fusing per-driver adaptive calibration with six concurrent physiological cues under a two-tier hierarchical alert scheme. Published at IEEE VTC 2026.",
    details:
      "Fuses EAR, MAR, PERCLOS, Karolinska Sleepiness Scale (KSS), and 3D head-pose yaw/pitch. Runs on standard CPU at under 5 ms per frame with no GPU. Tested on 23 participants across 63,544 frames achieving 79.09% Detection Rate, 72.09% Alert Precision, 85.83% Gaze Consistency, and 69.67% Composite System Score.",
    tech: ["MediaPipe FaceMesh", "OpenCV", "Python", "Computer Vision", "Real-time Systems"],
    achievements: ["79.09% Detection Rate", "< 5 ms per frame on CPU (no GPU)", "23-participant validation, 63,544 frames"],
    featured: false,
    github: "",
  },
  {
    title: "OCR-Assisted Automated Medication Prescription Reader",
    description:
      "Full-stack web app that extracts structured medicine data from printed and handwritten prescriptions using Google Vision API + custom-trained recognition models. Published at RCAAI 2025.",
    details:
      "Integrated Google Vision API for initial text detection and trained ML models to improve accuracy on handwritten and printed prescriptions. Features a pharmaceutical reminder system that alerts users about scheduled dosages and monitors medication supply.",
    tech: ["Google Vision API", "React.js", "OpenCV", "NLP", "Python"],
    achievements: ["Automated medicine extraction from printed + handwritten input", "Pharmaceutical reminder scheduling", "Published at RCAAI 2025 (Taylor & Francis)"],
    featured: false,
    github: "https://github.com/abmuqhu3/MedAI",
  },
  {
    title: "Pneumonia Classification & Segmentation using U-Net",
    description:
      "Deep-learning diagnostic system to classify chest X-ray images and segment infected lung regions. 89% classification accuracy. Published at RCAAI 2025.",
    details:
      "Trained and fine-tuned CNN architectures for medical image classification. Implemented U-Net segmentation for pixel-wise isolation of infected lung regions — Dice coefficient 0.76, IoU 0.62.",
    tech: ["U-Net", "CNN", "TensorFlow", "Medical Imaging", "Python"],
    achievements: ["89% classification accuracy", "U-Net pixel-wise segmentation (Dice 0.76, IoU 0.62)", "Published at RCAAI 2025 (Taylor & Francis)"],
    featured: false,
    github: "https://github.com/abmuqhu3/Pneumonia_Detection",
  },
  {
    title: "Zomato Restaurant Data Analysis",
    description:
      "Exploratory data analysis on 12,000+ Bengaluru restaurants to identify key factors influencing ratings, popularity, and customer preferences.",
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
      "Real-time air quality monitoring system using gas sensors (CO₂, CO) with automated SMS alert notifications when pollution levels exceed defined thresholds.",
    details:
      "Developed embedded software for continuous data acquisition and sensor calibration on microcontrollers. System triggers SMS alerts when pollution levels exceed defined thresholds — deployed as B.E. capstone.",
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
            Research and engineering projects spanning Software-Defined Vehicles, autonomous navigation on Jetson, indoor UAV SLAM, medical AI, and embedded systems.
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
