
import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "R", "SQL"],
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
  },
  {
    category: "Robotics Tools",
    skills: ["ROS2", "STM32CubeIDE", "Arduino IDE", "Fusion 360", "MATLAB"],
    color: "bg-purple-500/10 text-purple-700 dark:text-purple-300"
  },
  {
    category: "AI/ML",
    skills: ["SLAM", "Path Planning", "Computer Vision", "RL", "Image Processing"],
    color: "bg-green-500/10 text-green-700 dark:text-green-300"
  },
  {
    category: "Automation",
    skills: ["UiPath", "Firebase", "Google Vision API"],
    color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Adaptability", "Team Work"],
    color: "bg-teal-500/10 text-teal-700 dark:text-teal-300"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.category} className="border-none shadow-md bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${group.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
