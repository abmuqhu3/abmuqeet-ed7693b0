import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Blurred photo background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px) brightness(0.25)",
          transform: "scale(1.1)",
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
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-12 bg-primary/50" />
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary">Me</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am an <span className="text-foreground font-medium">ADAS and Autonomous Systems Engineer</span> with hands-on experience in embedded control, sensor integration, and ROS-based autonomy for ground vehicles and production road vehicles.
                </p>
                <p>
                  My work spans AEBS braking logic, vehicle longitudinal dynamics, safety-critical decision-making, decentralized navigation, multi-agent coordination, and AI/ML models using real-time sensor data.
                </p>
                <p>
                  Currently contributing to autonomous navigation research at <span className="text-primary font-medium">TiHAN, IIT Hyderabad</span> — working on campus shuttle autonomy, vehicle platooning, indoor UAV navigation, and <span className="text-primary font-medium">Software Defined Vehicle (SDV)</span> perception systems using TI Jacinto platforms.
                </p>
              </div>

              <div className="space-y-5">
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
                      className="flex gap-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:glow-blue transition-shadow">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                        {item.extra && <p className="text-xs text-muted-foreground font-mono mt-0.5">{item.extra}</p>}
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
