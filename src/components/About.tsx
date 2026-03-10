import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Blurred photo background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(4px) brightness(0.2)",
          transform: "scale(1)",
        }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="section-label">
                <Cpu className="h-3 w-3" />
                About
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
              About <span className="text-primary glow-text-blue">Me</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />

            <div className="grid md:grid-cols-2 gap-10">
              <div className="floating-card p-8 space-y-4 text-foreground/60 leading-relaxed text-sm font-space">
                <p>
                  I am an <span className="text-foreground/90 font-semibold">ADAS and Autonomous Systems Engineer</span> with hands-on experience in embedded control, sensor integration, and ROS-based autonomy for ground vehicles and production road vehicles.
                </p>
                <p>
                  My work spans AEBS braking logic, vehicle longitudinal dynamics, safety-critical decision-making, decentralized navigation, multi-agent coordination, and AI/ML models using real-time sensor data.
                </p>
                <p>
                  Currently contributing to autonomous navigation research at <span className="text-primary/90 font-semibold">TiHAN, IIT Hyderabad</span> — working on campus shuttle autonomy, vehicle platooning, indoor UAV navigation, and <span className="text-primary/90 font-semibold">Software Defined Vehicle (SDV)</span> perception systems using TI Jacinto platforms.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: GraduationCap, title: "M.Tech — Robotics & AI", sub: "Nitte Meenakshi Institute of Technology", extra: "CGPA: 8.21 • 2024 – 2025" },
                  { icon: GraduationCap, title: "B.E — Electronics & Communication", sub: "HMS Institute of Technology", extra: "CGPA: 6.24 • 2018 – 2022" },
                  { icon: Award, title: "Certifications", sub: "UiPath Academy • Udemy ROS2 • NPTEL Edge Computing & Big Data • Smart India Hackathon 2024 • IEEE RAS Summit", extra: "" },
                  { icon: BookOpen, title: "3 Publications", sub: "RCAAI 2025 (Taylor & Francis) • DDAWS Conference Paper", extra: "" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="floating-card-glow p-5 flex gap-4 group cursor-default"
                    >
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
                        <Icon className="h-4.5 w-4.5 text-primary/80" />
                      </div>
                      <div>
                        <h3 className="font-rajdhani font-semibold text-foreground/85 text-sm tracking-wide">{item.title}</h3>
                        <p className="text-xs text-muted-foreground/60 mt-0.5 font-space">{item.sub}</p>
                        {item.extra && <p className="text-xs text-muted-foreground/40 font-mono-code mt-0.5">{item.extra}</p>}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
