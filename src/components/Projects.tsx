
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectData = [
  {
    id: 1,
    title: "Decentralized Collision Free Path Planning for Swarm Robots",
    description: "Autonomous floor-cleaning swarm robots using ORCA and RL. Modular hardware with brush and water-dispensing mechanisms.",
    tags: ["Robotics", "AI", "ROS2"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Automated Extraction of Medicine Details from Prescriptions (OCR)",
    description: "Full-stack web app using Google Vision API and custom ML models for medicine data extraction from printed prescriptions.",
    tags: ["OCR", "ML", "Web App"],
    color: "from-green-500/20 to-blue-500/20"
  },
  {
    id: 3,
    title: "Pneumonia Detection with CNN and Segmentation",
    description: "Deep learning model to detect pneumonia from X-ray images with high accuracy using convolutional neural networks.",
    tags: ["CNN", "Healthcare", "AI"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "Zomato Data Analysis",
    description: "Comprehensive analysis of Zomato restaurant data to identify trends and patterns in customer preferences and ratings.",
    tags: ["Data Analysis", "Python", "Visualization"],
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    id: 5,
    title: "Air Pollution Monitoring System with SMS Alerts",
    description: "IoT-based system that monitors air quality and sends SMS alerts when pollution levels exceed defined thresholds.",
    tags: ["IoT", "Embedded", "SMS"],
    color: "from-teal-500/20 to-green-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Showcasing my work in robotics, AI, and embedded systems through these key projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectData.slice(0, 2).map((project) => (
            <Card 
              key={project.id}
              className="border-none overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`h-3 bg-gradient-to-r ${project.color}`} />
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="group w-full" size="sm">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h3 className="text-xl font-medium mb-6 text-center">Additional Projects</h3>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {projectData.slice(2).map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none h-full overflow-hidden shadow-lg">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 bg-secondary/50 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="ghost" className="w-full text-sm" size="sm">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static flex relative translate-y-0" />
            <CarouselNext className="static flex relative translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
