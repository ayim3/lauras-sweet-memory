import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts in different positions */}
      <Heart className="absolute top-1/4 left-1/4 w-8 h-8 text-romantic-medium/30 animate-float fill-current" style={{ animationDelay: '0s' }} />
      <Heart className="absolute top-1/3 right-1/4 w-6 h-6 text-romantic-deep/25 animate-float fill-current" style={{ animationDelay: '1s' }} />
      <Heart className="absolute bottom-1/3 left-1/3 w-5 h-5 text-romantic-light/40 animate-float fill-current" style={{ animationDelay: '2s' }} />
      <Heart className="absolute top-2/3 right-1/3 w-7 h-7 text-romantic-medium/20 animate-float fill-current" style={{ animationDelay: '1.5s' }} />
      <Heart className="absolute bottom-1/4 right-1/5 w-4 h-4 text-romantic-deep/30 animate-float fill-current" style={{ animationDelay: '0.5s' }} />
      <Heart className="absolute top-1/5 left-1/5 w-6 h-6 text-romantic-medium/25 animate-float fill-current" style={{ animationDelay: '2.5s' }} />
    </div>
  );
};

export default FloatingHearts;