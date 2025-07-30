import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/festival-logo.png";

const FestivalNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className={`flex items-center gap-3 text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-festival-blue" : "text-white"
            }`}
          >
            <img 
              src={logoImage} 
              alt="Республіка Вейву логотип" 
              className="w-10 h-10 object-contain"
            />
            Республіка Вейву
          </button>
          
          <div className="hidden md:flex space-x-6">
            {[
              { label: 'Про фестиваль', id: 'about' },
              { label: 'Міністерства', id: 'ministries' },
              { label: 'Державні символи', id: 'symbols' },
              { label: 'Галерея', id: 'gallery' },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-festival-blue hover:text-festival-yellow' 
                    : 'text-white hover:text-festival-yellow'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FestivalNavigation;