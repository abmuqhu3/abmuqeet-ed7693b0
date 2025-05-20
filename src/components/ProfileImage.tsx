
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileImage = () => {
  return (
    <div className="relative mx-auto max-w-xs">
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-primary/5 to-primary/20 blur-xl" />
      <div className="absolute -z-10 bottom-0 right-0 w-16 h-16 rounded-full bg-primary/10 blur-md" />
      <div className="absolute -z-10 top-10 left-0 w-12 h-12 rounded-full bg-primary/10 blur-md" />
      
      {/* Profile image using Avatar component */}
      <Avatar className="w-40 h-40 mx-auto border-4 border-background shadow-xl">
        <AvatarImage src="/placeholder.svg" alt="Kalaigar Abdul Muqeet" />
        <AvatarFallback className="bg-gradient-to-br from-secondary/50 to-primary/20 text-3xl font-semibold text-primary/70">
          KAM
        </AvatarFallback>
      </Avatar>
      
      {/* Decorative element */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-primary/80 rounded-full" />
    </div>
  );
};

export default ProfileImage;
