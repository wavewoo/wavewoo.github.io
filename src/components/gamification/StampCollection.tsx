import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Stamp, Calendar, MapPin, Users, Star } from 'lucide-react';

interface FestivalStamp {
  year: number;
  location: string;
  theme?: string;
  specialEvent?: string;
  attendees: number;
  collected: boolean;
}

const festivalStamps: FestivalStamp[] = [
  { year: 2014, location: 'Карпати', theme: 'Заснування', attendees: 15, collected: false },
  { year: 2015, location: 'Карпати', theme: 'Перші кроки', attendees: 18, collected: false },
  { year: 2016, location: 'Карпати', theme: 'Розвиток', attendees: 22, collected: false },
  { year: 2017, location: 'Карпати', theme: 'Традиції', attendees: 25, collected: false },
  { year: 2018, location: 'Карпати', theme: 'Єднання', attendees: 20, collected: false },
  { year: 2019, location: 'Карпати', theme: 'Дружба', attendees: 28, collected: false },
  { year: 2020, location: 'Карпати', theme: 'Стійкість', specialEvent: 'Пандемічний фестиваль', attendees: 16, collected: false },
  { year: 2021, location: 'Карпати', theme: 'Відновлення', attendees: 24, collected: false },
  { year: 2022, location: 'Карпати', theme: 'Мужність', specialEvent: 'Воєнний час', attendees: 30, collected: false },
  { year: 2023, location: 'Карпати', theme: 'Надія', attendees: 32, collected: false },
  { year: 2024, location: 'Карпати', theme: 'Майбутнє', attendees: 35, collected: false },
  { year: 2025, location: 'Карпати', theme: 'Ювілей', specialEvent: '10 років республіці', attendees: 40, collected: false }
];

interface StampCollectionProps {
  attendedYears: number[];
}

export const StampCollection = ({ attendedYears }: StampCollectionProps) => {
  const [selectedStamp, setSelectedStamp] = useState<FestivalStamp | null>(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  // Mark stamps as collected based on attended years
  const stampsWithStatus = festivalStamps.map(stamp => ({
    ...stamp,
    collected: attendedYears.includes(stamp.year)
  }));

  const collectedCount = stampsWithStatus.filter(stamp => stamp.collected).length;
  const totalStamps = stampsWithStatus.length;

  const openCollection = () => {
    setIsCollectionOpen(true);
  };

  const getStampColor = (stamp: FestivalStamp, collected: boolean) => {
    if (!collected) return 'grayscale opacity-50';
    
    // Special colors for special events
    if (stamp.specialEvent) return 'text-purple-400 border-purple-400 bg-purple-400/20';
    if (stamp.year === 2014) return 'text-yellow-400 border-yellow-400 bg-yellow-400/20'; // Founding year
    if (stamp.year >= 2020) return 'text-blue-400 border-blue-400 bg-blue-400/20'; // Recent years
    
    return 'text-green-400 border-green-400 bg-green-400/20'; // Default collected
  };

  return (
    <>
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center gap-2">
            <Stamp className="w-6 h-6" />
            Колекція марок
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-white/90">
              Збирайте унікальні марки, відвідуючи фестивалі Республіки Вейву! 
              Кожен фестиваль має свою особливу марку з тематикою року.
            </p>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold">Прогрес колекції:</span>
                <Badge className="bg-festival-yellow/20 text-festival-yellow border-festival-yellow/50">
                  {collectedCount}/{totalStamps}
                </Badge>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-festival-yellow to-festival-yellow/70 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(collectedCount / totalStamps) * 100}%` }}
                />
              </div>
              
              <p className="text-white/70 text-sm mt-2">
                {collectedCount === 0 && 'Почніть збирати марки, відвідавши фестиваль!'}
                {collectedCount > 0 && collectedCount < totalStamps / 2 && 'Непоганий початок! Продовжуйте збирати.'}
                {collectedCount >= totalStamps / 2 && collectedCount < totalStamps && 'Відмінна колекція! Ви майже зібрали все.'}
                {collectedCount === totalStamps && 'Вітаємо! У вас повна колекція марок!'}
              </p>
            </div>

            {/* Preview of recent stamps */}
            <div className="grid grid-cols-4 gap-2">
              {stampsWithStatus.slice(-4).map((stamp) => (
                <div
                  key={stamp.year}
                  className={`
                    aspect-square rounded-lg border-2 p-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105
                    ${getStampColor(stamp, stamp.collected)}
                  `}
                  onClick={() => setSelectedStamp(stamp)}
                >
                  <Calendar className="w-4 h-4 mb-1" />
                  <span className="text-xs font-bold">{stamp.year}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={openCollection}
              className="w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-blue font-semibold"
            >
              Переглянути повну колекцію
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Full Collection Modal */}
      <Dialog open={isCollectionOpen} onOpenChange={setIsCollectionOpen}>
        <DialogContent className="bg-gradient-to-br from-festival-blue to-festival-blue/80 border-white/20 max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl flex items-center gap-3">
              <Stamp className="w-8 h-8" />
              Колекція фестивальних марок
              <Badge className="bg-festival-yellow/20 text-festival-yellow border-festival-yellow/50">
                {collectedCount}/{totalStamps}
              </Badge>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-96 overflow-y-auto">
            {stampsWithStatus.map((stamp) => (
              <div
                key={stamp.year}
                className={`
                  aspect-square rounded-lg border-2 p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105
                  ${getStampColor(stamp, stamp.collected)}
                `}
                onClick={() => setSelectedStamp(stamp)}
              >
                <Calendar className="w-6 h-6 mb-2" />
                <span className="text-sm font-bold">{stamp.year}</span>
                {stamp.specialEvent && (
                  <Star className="w-3 h-3 mt-1" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/70 text-sm">
              Натисніть на марку, щоб дізнатися більше про фестиваль
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Stamp Detail Modal */}
      <Dialog open={!!selectedStamp} onOpenChange={() => setSelectedStamp(null)}>
        <DialogContent className="bg-gradient-to-br from-festival-blue to-festival-blue/80 border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-xl flex items-center gap-3">
              Фестивальна марка {selectedStamp?.year}
              {selectedStamp?.collected && (
                <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                  Зібрано
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedStamp && (
            <div className="space-y-4">
              <div className="text-center">
                <div className={`
                  w-32 h-32 mx-auto rounded-lg border-4 p-4 flex flex-col items-center justify-center mb-4
                  ${getStampColor(selectedStamp, selectedStamp.collected)}
                `}>
                  <Calendar className="w-12 h-12 mb-2" />
                  <span className="text-2xl font-bold">{selectedStamp.year}</span>
                  {selectedStamp.specialEvent && (
                    <Star className="w-6 h-6 mt-2" />
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-white/70" />
                  <span className="text-white font-semibold">Рік:</span>
                  <span className="text-white/90">{selectedStamp.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white/70" />
                  <span className="text-white font-semibold">Місце:</span>
                  <span className="text-white/90">{selectedStamp.location}</span>
                </div>

                {selectedStamp.theme && (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-white/70" />
                    <span className="text-white font-semibold">Тема:</span>
                    <span className="text-white/90">{selectedStamp.theme}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-white/70" />
                  <span className="text-white font-semibold">Учасників:</span>
                  <span className="text-white/90">{selectedStamp.attendees}</span>
                </div>

                {selectedStamp.specialEvent && (
                  <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-5 h-5 text-purple-300" />
                      <span className="text-purple-300 font-semibold">Особлива подія:</span>
                    </div>
                    <p className="text-white/90">{selectedStamp.specialEvent}</p>
                  </div>
                )}

                {!selectedStamp.collected && (
                  <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3 text-center">
                    <p className="text-yellow-300">
                      Ця марка ще не зібрана. Відвідайте фестиваль {selectedStamp.year} року, щоб отримати її!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};