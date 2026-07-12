import { motion } from "framer-motion";
import { Briefcase, Rocket } from "lucide-react";

const experiences = [
  {
    org: "TiHAN, IIT Hyderabad",
    role: "Junior Research Fellow — Robotics / ADAS R&D",
    period: "Oct 2025 – Present",
    points: [
      "The vehicle runs on two boards: an NXP S32G for autonomy and VCU CAN control, and a TI Jacinto TDA4VM/J721E for the mmWave radar classifier. I look after both — S32G control loop, Jacinto perception pipeline, and the 500 kbps CAN bridge between them.",
      "The VCU wants a 50 Hz stream of drive, brake, and steer frames (CAN IDs 0x130 / 0x131 / 0x132) with rolling life counters (0–15) and XOR checksums. Anything less clean and it fault-trips. Early on the rate was drifting to ~45 Hz because we were pacing with time.sleep() — moved to a monotonic-clock deadline scheduler and the drift went to zero.",
      "Chased a bug where the parking brake would engage about 1.5 s after we armed. Turned out two Python processes were both running the cyclic CAN sender and their life counters were interleaving — the VCU watchdog reads that as non-monotonic and hard-safes on the EPB. Fixed it with an O_EXCL PID-file singleton (with stale-PID takeover) plus a 200 ms post-arm settle window. Verified 15 s of clean 0→6 km/h at 0% brake before I called it done.",
      "The AEB pipeline was tripping the chassis-err-estop latch — an unrecoverable one, needs a physical power cycle to clear — on single-frame radar noise. Added an N-frame threat-hold debounce so a hard-brake state has to persist 60 ms before we actually engage it. No more spurious e-stops.",
      "Steering was mysteriously sluggish: we'd command 200 units and get back ~5. Traced it to the DBC steering-angle-speed signal being set way below the physical actuator limit. Raised it from ~100 °/s to the 500 °/s DBC max and real response jumped from 1–3% to 70–100% of the commanded angle inside 200 ms.",
      "Built a waypoint-planning web UI that runs directly on the S32G — Leaflet frontend, multi-waypoint OSRM routing resampled at 5 m, served by a bash + netcat HTTP server on port 8080. Had to port OSRM native to aarch64 first (five build errors specific to the S32G toolchain).",
      "On the Jetson AGX Orin side, the autonomy runs a ROS Noetic stack — Livox HAP + Velodyne VLP-16 fused via EKF with IMU + RTK-GPS, NDT localization against a pre-built map from ALOAM SLAM, and an MPC path follower (N=12 horizon, DT=0.7 s). Talks to the vehicle PLC over Modbus TCP.",
      "Wrote the fleet deployment: a 124 MB self-extracting installer with AES-256-CBC payload encryption (PBKDF2 100k) and five Cython-locked Python modules for IP protection. Each Jetson gets its own device fingerprint from SHA-256(board_serial | eth0_MAC) — /etc/machine-id turned out to be cloned across boards flashed from the same image, which was a fun debugging session.",
      "Contributed to the multi-vehicle platooning trials — inter-vehicle spacing, waypoint sync, and decentralized formation control on the campus test-bed.",
      "Kept the safety-loop design aligned with ISO 26262 thinking — HARA-informed severity assessment, fault-reaction time budgets, safety-goal violation vocabulary. Not certifying anything, but writing code the way a certifiable stack expects.",
    ],
    tech: ["NXP S32G", "TI Jacinto TDA4VM", "AWR2944 mmWave", "CAN / DBC", "ROS Noetic", "Jetson AGX Orin", "Fixposition RTK", "Modbus TCP", "ISO 26262", "MPC", "NDT / ALOAM", "Cython + AES-256"],
  },
  {
    org: "NEWRRO Tech LLP",
    role: "Robotic Systems Training",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Engineered ESP32-based robotic control systems integrated with PLCs for hardware/software co-development.",
      "Designed 3D CAD models in Fusion 360 for robotic assemblies and end-effectors.",
    ],
    tech: ["ESP32", "PLC", "Fusion 360", "Embedded C"],
  },
  {
    org: "Cranes Varsity",
    role: "Post-Graduation Diploma in Data Science",
    period: "Aug 2022 – Feb 2023",
    points: [
      "Python programming, optimization, and data-structure fundamentals for real-world data pipelines.",
      "SQL proficiency — relational database design and complex query composition.",
      "Applied statistics + machine-learning fundamentals for exploratory data analysis and predictive modeling.",
    ],
    tech: ["Python", "SQL", "Pandas", "Machine Learning", "Data Analysis"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              <Briefcase className="h-3 w-3" />
              Career
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            <span className="text-primary glow-text-blue">Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block" style={{
            background: "linear-gradient(to bottom, hsl(var(--neon-blue) / 0.3), hsl(var(--neon-purple) / 0.15), transparent)"
          }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org}
                className="relative md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 hidden md:flex items-center justify-center shadow-[0_0_12px_hsl(var(--neon-blue)/0.15)]">
                  <div className="w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_6px_hsl(var(--neon-blue)/0.5)]" />
                </div>

                <div className="floating-card-glow p-6 md:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-base font-rajdhani font-bold text-foreground tracking-wide">{exp.org}</h3>
                      <p className="text-primary font-exo text-xs mt-0.5 font-medium tracking-wider">{exp.role}</p>
                    </div>
                    <span className="section-label !text-[9px] !py-1 mt-2 sm:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-foreground/75 flex gap-2.5 font-space">
                        <Rocket className="h-3.5 w-3.5 text-primary/70 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
