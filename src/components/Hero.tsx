import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6">
            Welcome to My
            <span className="block text-accent"> GitHub Portfolio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate developer creating innovative solutions with modern technologies. 
            Explore my projects, skills, and journey in the world of software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="hero" className="group">
              <Github className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </Button>
            <Button variant="outline" size="hero" className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-primary">
              <Download className="mr-2" />
              Download CV
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-background/80 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3+</div>
              <div className="text-background/80 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-background/80 text-sm">Commits</div>
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