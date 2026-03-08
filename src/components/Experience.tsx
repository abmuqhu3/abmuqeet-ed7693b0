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
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Experience</span>
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org}
                className="relative md:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background hidden md:block">
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.org}</h3>
                      <p className="text-sm text-primary font-medium font-mono">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0 font-mono tracking-wide px-2 py-1 bg-secondary/50 rounded border border-border">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0 font-mono">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] font-mono font-medium rounded border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
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
