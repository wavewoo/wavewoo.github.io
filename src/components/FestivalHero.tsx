import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-festival.jpg";
import heroEmblem from "@/assets/hero-emblem.png";

const FestivalHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
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
          <img 
            src={heroEmblem}
            alt="Емблема Республіки Вейву"
            className="w-64 h-64 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] mx-auto mb-6 drop-shadow-lg"
          />
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
            onClick={() => scrollToSection('constitution')}
            className="text-lg px-8 py-4 min-w-[200px]"
          >
            Конституція
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