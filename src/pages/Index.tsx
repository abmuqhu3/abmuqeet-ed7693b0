
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        
        {/* Main Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Hero Content */}
          <div 
            className={`w-full md:w-1/2 space-y-6 transition-all duration-700 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Create Stunning Web Experiences
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Build modern, responsive web applications with our powerful toolset. 
              Start your journey today.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-xl bg-gradient-to-tr from-card/50 to-background">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-center space-y-4">
                          <div className="h-32 w-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                            <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-4xl font-bold">{index}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-medium">Feature {index}</h3>
                          <p className="text-muted-foreground text-sm">
                            Discover amazing functionality with our powerful features and tools.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative static left-0 translate-y-0 rounded-full" />
                <CarouselNext className="relative static right-0 translate-y-0 rounded-full" />
              </div>
            </Carousel>
          </div>
        </div>
        
        {/* Features Section Below */}
        <div className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {[
            { title: "Responsive Design", desc: "Create beautiful applications that work on any device." },
            { title: "Modern UI", desc: "Leverage the latest design patterns and components." },
            { title: "Easy Integration", desc: "Seamlessly connect with your existing tools and services." }
          ].map((feature, idx) => (
            <Card key={idx} className="border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
