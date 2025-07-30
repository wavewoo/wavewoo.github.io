import { Button } from "@/components/ui/button";
import { Ticket, Music, Download } from "lucide-react";
import festivalImage from "@/assets/festival-bg.jpg";

const Hero = () => {
  console.log("Hero component is rendering with Ukrainian content");
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={festivalImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 font-montserrat">
            Республіка
            <span className="block text-accent"> Вейву</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed font-montserrat">
            Приєднуйтесь до незабутнього вікенду музики, мистецтва та спільноти. Відчуйте неймовірних артистів, 
            смачну їжу та створіть спогади на все життя.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="hero" className="group font-montserrat">
              <Ticket className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Квитки
            </Button>
            <Button variant="outline" size="hero" className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-primary font-montserrat">
              <Download className="mr-2" />
              Лайн-ап
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-montserrat">25+</div>
              <div className="text-background/80 text-sm font-montserrat">Артистів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-montserrat">3</div>
              <div className="text-background/80 text-sm font-montserrat">Дні</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-montserrat">5к+</div>
              <div className="text-background/80 text-sm font-montserrat">Відвідувачів</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;