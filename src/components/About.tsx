
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-secondary/10 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="h-full border-none bg-card/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Bio</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Postgraduate student in Robotics & AI with hands-on experience in embedded systems, 
                  autonomous navigation, and intelligent robotic design. Skilled in ROS2, STM32, 
                  and real-time control algorithms, with proven success building decentralized swarm 
                  robots and AI-powered systems. Eager to contribute to innovative engineering teams 
                  solving real-world automation and robotics challenges.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium">M.Tech in Robotics & AI</h4>
                    <div className="text-sm text-muted-foreground">NMIT Bangalore, 2023–2025</div>
                    <div className="text-sm font-medium">CGPA: 8.21</div>
                  </div>
                  
                  <div className="border-l-2 border-primary/50 pl-4">
                    <h4 className="font-medium">B.Tech in Electronics & Communication Engineering</h4>
                    <div className="text-sm text-muted-foreground">HMS Institute of Technology, Tumakuru, 2023</div>
                    <div className="text-sm font-medium">CGPA: 6.45</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full border-none bg-card/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Interests</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <span role="img" aria-label="Bike" className="text-lg">🚴</span>
                    </div>
                    <span>Bike riding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <span role="img" aria-label="Cricket" className="text-lg">🏏</span>
                    </div>
                    <span>Playing cricket</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <span role="img" aria-label="Exploring" className="text-lg">🔍</span>
                    </div>
                    <span>Exploring new things</span>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4 mt-8">Services</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">Robotics Consulting</h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise on embedded systems, robotic frameworks, autonomous navigation, 
                    and robotic hardware design for startups, research teams, or industrial applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
