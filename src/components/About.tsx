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
              <div className="floating-card p-8 space-y-4 text-foreground/80 leading-relaxed text-sm font-space">
                <p>
                  Hi, I'm Abdul. I work on autonomous vehicles at <span className="text-primary font-semibold">TiHAN, IIT Hyderabad</span> — specifically the software that decides when the car should move, when it should brake, and when it should give up and let the human take over.
                </p>
                <p>
                  Day to day, I live inside the CAN bus of the <span className="text-foreground font-semibold">PixKit</span> research vehicle. The autonomy runs across two boards: an <span className="text-primary font-semibold">NXP S32G</span> that owns the VCU control loop and an RTK-GPS pipeline, and a <span className="text-primary font-semibold">TI Jacinto TDA4VM</span> that runs an mmWave radar classifier and streams objects back over CAN. Both boards have to agree, at 50 Hz, with rolling life counters and XOR checksums, or the VCU will fault-trigger — which is how I've spent a lot of my time debugging things like "why does the parking brake engage 1.5 seconds after we arm?" (turned out two Python processes were racing for the same CAN counter, which the VCU watchdog reads as non-monotonic and hard-safes on).
                </p>
                <p>
                  I also ship the Jetson AGX Orin side of things — the ROS Noetic navigation stack (ALOAM SLAM, NDT localization, an MPC path follower talking to the vehicle PLC over Modbus TCP) and a self-extracting fleet installer that Cython-locks the important bits, encrypts the payload with AES-256, and works around the fact that Jetsons flashed from the same image share <span className="font-mono-code">/etc/machine-id</span> (which broke fleet auth until I switched to hashing the board serial + MAC).
                </p>
                <p>
                  Before TiHAN I did an M.Tech in Robotics &amp; AI at NMIT Bengaluru. My thesis was on <em>decentralized navigation and obstacle avoidance for swarm robots</em> — a master–slave multi-robot setup where follower robots track a teleoperated leader, coordinate paths, and avoid obstacles without a central planner. On the side I built an indoor UAV navigation project using vision-based SLAM in GPS-denied environments (the kind of thing you can't stop tinkering with once you start). Two RCAAI 2025 papers came out of that period — medical imaging (Pneumonia U-Net) and OCR-based prescription reading — and a newer one on driver-drowsiness (DDAWS) got accepted at IEEE VTC 2026.
                </p>
                <p>
                  I'm looking for full-time ADAS or Autonomous Systems roles in Bengaluru or Hyderabad. Product companies, ideally. If you're building things that drive themselves, let's talk.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: GraduationCap, title: "M.Tech — Robotics & AI", sub: "Nitte Meenakshi Institute of Technology, Bengaluru", extra: "CGPA: 8.21 • Feb 2024 – Aug 2025" },
                  { icon: GraduationCap, title: "B.E — Electronics & Communication", sub: "HMS Institute of Technology, Tumkur", extra: "Aug 2018 – Feb 2022" },
                  { icon: Award, title: "Certifications", sub: "UiPath Academy RPA • ROS2 (Udemy) • NPTEL Edge Computing & Big Data • Smart India Hackathon 2024 • IEEE RAS Student Summit", extra: "" },
                  { icon: BookOpen, title: "3 Peer-Reviewed Publications", sub: "IEEE VTC 2026 (DDAWS) • RCAAI 2025, Taylor & Francis (Pneumonia U-Net + OCR Prescription Reader)", extra: "" },
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
                        <Icon className="h-4.5 w-4.5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-rajdhani font-semibold text-foreground text-sm tracking-wide">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 font-space">{item.sub}</p>
                        {item.extra && <p className="text-xs text-muted-foreground/70 font-mono-code mt-0.5">{item.extra}</p>}
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
