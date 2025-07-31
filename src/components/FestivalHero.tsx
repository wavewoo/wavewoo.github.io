import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-festival.jpg";
import heroEmblem from "@/assets/hero-emblem.png";
import { useState } from "react";

const FestivalHero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, dirX: number, dirY: number}>>([]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmblemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Create particles around the click
    const newParticles = Array.from({ length: 16 }, (_, i) => {
      const angle = (i / 16) * Math.PI * 2;
      const distance = 30 + Math.random() * 20;
      return {
        id: Date.now() + i,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        dirX: Math.cos(angle),
        dirY: Math.sin(angle),
      };
    });
    
    setParticles(newParticles);
    setIsClicked(true);
    
    // Reset animation after completion
    setTimeout(() => {
      setIsClicked(false);
      setParticles([]);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-festival-blue/70 via-festival-blue/50 to-festival-blue/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div 
            className={`relative mx-auto mb-6 w-64 h-64 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] group cursor-pointer ${isClicked ? 'animate-pulse' : ''}`}
            onClick={handleEmblemClick}
          >
            {/* Ripple effect */}
            {isClicked && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-festival-yellow/20 rounded-full animate-ping"></div>
                <div className="absolute inset-4 bg-festival-yellow/10 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute inset-8 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
            
            {/* Particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-3 h-3 bg-festival-yellow rounded-full pointer-events-none"
                style={{
                  left: `${particle.x}px`,
                  top: `${particle.y}px`,
                  animation: 'particle-burst 1.5s ease-out forwards',
                }}
              />
            ))}
            
            {/* Soft glow effect background */}
            <div className={`absolute inset-0 bg-gradient-radial from-white/15 via-white/5 to-transparent rounded-full blur-2xl scale-125 opacity-50 group-hover:opacity-70 group-hover:scale-140 transition-all duration-1000 ${isClicked ? 'opacity-90 scale-150' : ''}`}></div>
            
            {/* Main emblem */}
            <div className={`relative w-full h-full transition-all duration-500 ${isClicked ? 'scale-110 rotate-12' : ''}`}>
              <img 
                src={heroEmblem}
                alt="Емблема Республіки Вейву"
                className={`w-full h-full mx-auto filter drop-shadow-lg group-hover:drop-shadow-2xl group-hover:scale-105 transition-all duration-700 ease-out rounded-full object-cover hue-rotate-15 saturate-150 ${isClicked ? 'brightness-125 saturate-200' : ''}`}
                style={{
                  maskImage: 'radial-gradient(circle at center, black 40%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.2) 85%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.2) 85%, transparent 95%)'
                }}
              />
              
              {/* Enhanced particle effect */}
              <div className="absolute inset-0 rounded-full">
                <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse ${isClicked ? 'bg-festival-yellow/70 scale-150' : ''}`} style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className={`absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse ${isClicked ? 'bg-festival-yellow/60 scale-200' : ''}`} style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className={`absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse ${isClicked ? 'bg-festival-yellow/50 scale-150' : ''}`} style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
          Республіка Вейву
        </h1>
        
        <p className="text-xl md:text-2xl text-festival-yellow mb-12 drop-shadow-md font-medium">
          Територія твоєї свободи
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="text-lg px-8 py-4 min-w-[200px]"
          >
            Про Вейву
          </Button>
          
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => scrollToSection('next-festival')}
            className="text-lg px-8 py-4 min-w-[200px]"
          >
            Наступний фестиваль
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-festival-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-festival-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default FestivalHero;