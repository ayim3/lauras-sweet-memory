import Letter from "@/components/Letter";
import FloatingHearts from "@/components/FloatingHearts";
import romanticBg from "@/assets/romantic-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${romanticBg})` }}
      />
      
      {/* Floating hearts decoration */}
      <FloatingHearts />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-script text-romantic-deep mb-4 animate-heart-beat">
            Para Laura
          </h1>
          <p className="text-xl text-foreground/80 font-medium">
            Uma mensagem especial feita com carinho 💕
          </p>
        </div>
        
        <Letter />
        
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Feito com muito amor e carinho 💝</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
