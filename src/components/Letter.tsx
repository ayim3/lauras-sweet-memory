import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Mail } from "lucide-react";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Envelope */}
      <div className="relative">
        <div 
          className={`
            relative cursor-pointer transition-all duration-700 transform-gpu perspective-1000
            ${isOpen ? 'animate-envelope-open' : 'hover:scale-105'}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Card className="w-80 h-52 bg-gradient-card shadow-romantic border-romantic-medium/20 relative overflow-hidden">
            {/* Envelope flap */}
            <div className="absolute inset-0 bg-romantic-deep/10 border-b border-romantic-medium/30" />
            
            {/* Mail icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Mail className="w-12 h-12 text-romantic-deep animate-float" />
            </div>
            
            {/* Decorative hearts */}
            <Heart className="absolute top-4 right-4 w-6 h-6 text-romantic-deep/60 animate-heart-beat" />
            <Heart className="absolute bottom-4 left-4 w-4 h-4 text-romantic-medium/80" />
          </Card>
        </div>
        
        {!isOpen && (
          <p className="text-center mt-4 text-romantic-deep font-medium">
            Clique para abrir a carta 💕
          </p>
        )}
      </div>

      {/* Letter content */}
      {isOpen && (
        <Card className="w-full max-w-2xl bg-gradient-card shadow-romantic border-romantic-medium/20 animate-fade-in">
          <div className="p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-script text-romantic-deep mb-2">
                Para minha querida Laura
              </h2>
              <div className="flex justify-center space-x-2">
                <Heart className="w-5 h-5 text-romantic-deep fill-current" />
                <Heart className="w-4 h-4 text-romantic-medium fill-current" />
                <Heart className="w-5 h-5 text-romantic-deep fill-current" />
              </div>
            </div>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg font-medium text-center">
                Peço perdão de coração... 💝
              </p>
              
              <p>
                Laura, eu preciso que você saiba que sinto muito por qualquer coisa que possa ter te magoado. 
                Você é muito especial para mim, e a última coisa que eu queria era te causar qualquer tristeza.
              </p>
              
              <p>
                Quero que saiba que <span className="font-semibold text-romantic-deep">nunca vou esquecer nadinha do que você fala</span>. 
                Cada palavra sua é importante para mim, cada conversa que temos fica guardada no meu coração 
                com muito carinho.
              </p>
              
              <p>
                Você traz luz para os meus dias, e sua amizade é um presente que eu valorizo demais. 
                Espero que possamos conversar e que você possa me perdoar.
              </p>
              
              <div className="text-center pt-4">
                <p className="text-romantic-deep font-script text-xl">
                  Com todo o carinho do mundo,
                </p>
                <p className="text-lg font-medium mt-2">
                  Sempre lembrando de você 💕
                </p>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                className="bg-romantic-light/50 border-romantic-medium hover:bg-romantic-medium/30 text-romantic-deep"
              >
                Fechar carta
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Letter;