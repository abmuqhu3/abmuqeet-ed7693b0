import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-16 bg-primary mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an ADAS and Autonomous Systems Engineer with hands-on experience in embedded control, sensor integration, and ROS-based autonomy for ground vehicles and production road vehicles.
              </p>
              <p>
                My work spans AEBS braking logic, vehicle longitudinal dynamics, safety-critical decision-making, decentralized navigation, multi-agent coordination, and AI/ML models using real-time sensor data.
              </p>
              <p>
                Currently contributing to autonomous navigation research at TiHAN, IIT Hyderabad — working on campus shuttle autonomy, vehicle platooning, and indoor UAV navigation in GPS-denied environments.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">M.Tech — Robotics & AI</h3>
                  <p className="text-sm text-muted-foreground">Nitte Meenakshi Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">CGPA: 8.21 • 2024 – 2025</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">B.E — Electronics & Communication</h3>
                  <p className="text-sm text-muted-foreground">HMS Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">CGPA: 6.24 • 2018 – 2022</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Certifications</h3>
                  <p className="text-sm text-muted-foreground">UiPath Academy • Udemy ROS2 • NPTEL Edge Computing & Big Data • Smart India Hackathon 2024 • IEEE RAS Summit</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">2 Publications</h3>
                  <p className="text-sm text-muted-foreground">RCAAI 2025, Taylor & Francis (Accepted)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
