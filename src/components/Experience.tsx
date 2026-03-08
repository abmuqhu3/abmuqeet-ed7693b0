import { motion } from "framer-motion";

const experiences = [
  {
    org: "TiHAN, IIT Hyderabad",
    role: "R&D, Junior Research Academic Fellow (JRAF)",
    period: "Oct 2025 – Present",
    points: [
      "Contributed to autonomous navigation of a campus shuttle — waypoint following, obstacle avoidance, path tracking, and motion control using ROS.",
      "Worked on Advanced Emergency Braking System (AEBS) integrating sensor-based distance estimation, vehicle speed, and braking decision logic.",
      "Assisted in vehicle platooning for coordinated multi-vehicle movement, safe inter-vehicle spacing, and synchronized navigation.",
      "System-level testing, data logging, and validation of autonomous driving behavior in controlled campus environments.",
      "Autonomous indoor UAV navigation in GPS-denied environments using RGB-D & visual–inertial cameras.",
      "Built indoor maps using vision-based SLAM; enabled real-time localization and navigation for stable autonomous flight.",
      "Integrated perception and odometry for real-time obstacle avoidance during indoor UAV operations.",
    ],
    tech: ["ROS", "SLAM", "AEBS", "UAV", "Sensor Fusion", "Computer Vision"],
  },
  {
    org: "NEWRRO Tech LLP",
    role: "Robotic Systems Training",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Engineered ESP32-based robotic systems and designed CAD models in Fusion 360.",
      "Integrated PLCs and control modules to build practical robotic solutions.",
    ],
    tech: ["ESP32", "Fusion 360", "PLC", "Embedded Systems"],
  },
  {
    org: "Cranes Varsity",
    role: "Post-Graduation Diploma in Data Science",
    period: "Aug 2022 – Feb 2023",
    points: [
      "Acquired Python optimization and logic-building skills.",
      "Applied programming to real-world data structures and analysis.",
      "SQL proficiency — relational databases and complex query writing.",
    ],
    tech: ["Python", "SQL", "Data Science", "Analytics"],
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
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#00d4ff]/30" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d4ff]/60">Career</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light mb-12">
            <span className="font-serif-display italic text-foreground/70">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00d4ff]/20 via-[#00d4ff]/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org}
                className="relative md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-[#00d4ff]/20 bg-[#030308] hidden md:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/40" />
                </div>

                <div className="bg-foreground/[0.02] border border-foreground/[0.06] rounded p-6 hover:border-[#00d4ff]/15 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-base font-medium text-foreground/80">{exp.org}</h3>
                      <p className="text-sm text-[#00d4ff]/60 font-mono text-xs mt-0.5">{exp.role}</p>
                    </div>
                    <span className="text-[10px] text-foreground/25 mt-1 sm:mt-0 font-mono tracking-wider px-2 py-1 bg-foreground/[0.03] rounded border border-foreground/[0.05]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-foreground/40 flex gap-2">
                        <span className="text-[#00d4ff]/30 mt-0.5 flex-shrink-0 font-mono">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] font-mono rounded border border-foreground/[0.06] text-foreground/30 hover:text-[#00d4ff]/60 hover:border-[#00d4ff]/15 transition-colors">
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
