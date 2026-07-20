import { useState } from 'react';
import { Button } from '@/components/ui/button';
import landingBg from '@/assets/landing-background.gif';
import heroEmblem from '@/assets/hero-emblem.png';
import heroImage from '@/assets/hero-festival.jpg';

interface FirstVisitLandingProps {
  onComplete: () => void;
}

export default function FirstVisitLanding({ onComplete }: FirstVisitLandingProps) {
  const [stage, setStage] = useState<'initial' | 'zooming' | 'transforming' | 'circular' | 'fading'>('initial');

  const handleButtonClick = () => {
    setStage('zooming');
    
    // Start transformation after zoom
    setTimeout(() => {
      setStage('transforming');
    }, 1000);
    
    // Make circular
    setTimeout(() => {
      setStage('circular');
    }, 2000);
    
    // Start fade out
    setTimeout(() => {
      setStage('fading');
      onComplete();
    }, 3000);
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-1000 ${
        stage === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}>
      {/* Initial Landing Screen */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-cover bg-center transition-transform duration-1000 ease-in-out ${
          stage === 'zooming' ? 'scale-150' : 'scale-100'
        } ${stage === 'initial' || stage === 'zooming' ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${landingBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        {stage === 'initial' && (
          <div className="relative z-10 text-center">
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="text-2xl px-12 py-6 bg-festival-yellow text-festival-blue hover:bg-festival-yellow/90 font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Покинути рутину
            </Button>
          </div>
        )}
      </div>

      {/* Hero Emblem Transformation */}
      {(stage === 'transforming' || stage === 'circular' || stage === 'fading') && (
        <div className={`absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center`} style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-festival-blue/70 via-festival-blue/50 to-festival-blue/70" />
          <div 
            className={`bg-cover bg-center transition-all duration-1000 ease-in-out shadow-2xl relative z-10 ${
              stage === 'transforming' 
                ? 'w-full h-full opacity-100' 
                : 'w-64 h-64 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] rounded-full opacity-90 scale-110'
            }`}
            style={{ backgroundImage: `url(${heroEmblem})` }}
          />
        </div>
      )}
    </div>
  );
}