import { motion } from "framer-motion";
import { Briefcase, Rocket } from "lucide-react";

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
