
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="border-none shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/50" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">NEWRRO Tech LLP – Robotic Training</h3>
                <div className="text-sm text-muted-foreground">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/30">
                    Nov 2024 – Dec 2024
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">Bangalore</div>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Worked with ESP32-based robots and Fusion 360 CAD modeling</li>
                <li>Gained exposure to PLCs and robotic system integration</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/50" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">CRANES VARSITY – Post-Graduation Diploma in Data Science</h3>
                <div className="text-sm text-muted-foreground">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/30">
                    Aug 2022 – Feb 2023
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">Bangalore</div>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Gained proficiency in Python, data structures, and analytics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
