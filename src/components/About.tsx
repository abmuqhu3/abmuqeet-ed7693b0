import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background image overlay - only visible at the top */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="section-container relative z-10">
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
                { icon: GraduationCap, title: "M.Tech — Robotics & AI", sub: "Nitte Meenakshi Institute of Technology", extra: "CGPA: 8.21 • 2024 – 2025", color: "primary" },
                { icon: GraduationCap, title: "B.E — Electronics & Communication", sub: "HMS Institute of Technology", extra: "CGPA: 6.24 • 2018 – 2022", color: "primary" },
                { icon: Award, title: "Certifications", sub: "UiPath Academy • Udemy ROS2 • NPTEL Edge Computing & Big Data • Smart India Hackathon 2024 • IEEE RAS Summit", extra: "", color: "accent" },
                { icon: BookOpen, title: "3 Publications", sub: "RCAAI 2025 (Taylor & Francis) • DDAWS Conference Paper", extra: "", color: "accent" },
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
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center border border-${item.color}/20 group-hover:glow-blue transition-shadow`}>
                      <Icon className={`h-5 w-5 text-${item.color}`} />
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
    </section>
  );
};

export default About;
