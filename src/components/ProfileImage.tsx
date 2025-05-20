
import { cn } from "@/lib/utils";

const ProfileImage = () => {
  return (
    <div className="relative mx-auto max-w-md">
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-primary/5 to-primary/20 blur-xl" />
      <div className="absolute -z-10 bottom-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-md" />
      <div className="absolute -z-10 top-10 left-0 w-16 h-16 rounded-full bg-primary/10 blur-md" />
      
      {/* Profile frame */}
      <div className={cn(
        "relative aspect-square rounded-2xl overflow-hidden",
        "border-4 border-background shadow-2xl",
        "bg-gradient-to-tr from-background to-secondary/20",
        "p-1"
      )}>
        {/* This is where a real image would go - for now using a placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-primary/20 rounded-xl flex items-center justify-center">
          <span className="text-6xl font-semibold text-primary/50">KAM</span>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-20 bg-primary/80 rounded-full" />
    </div>
  );
};

export default ProfileImage;
