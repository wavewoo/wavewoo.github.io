import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Trophy, Guitar, Crown, Heart, BadgeCheck, BicepsFlexed, Shirt } from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  condition: (attendedYears: number[], additionalInfo?: any) => boolean;
  category: 'attendance' | 'social' | 'special';
}

const achievements: Achievement[] = [
  {
    id: 'party-goer',
    name: 'Тусовщик',
    description: 'Відвідайте п\'ять фестивалів. Показує вашу відданість республіці та любов до веселощів!',
    icon: Guitar,
    condition: (attendedYears) => attendedYears.length >= 5,
    category: 'attendance'
  },
  {
    id: 'veteran',
    name: 'Ветеран',
    description: 'Відвідайте десять фестивалів. Ви справжній стовп республіки та приклад для наслідування!',
    icon: BicepsFlexed,
    condition: (attendedYears) => attendedYears.length >= 10,
    category: 'attendance'
  },
  {
    id: 'married',
    name: 'Вейвівське кохання',
    description: 'Одружіться на Вейву. Гірко!',
    icon: Heart,
    condition: (attendedYears, additionalInfo) => !!additionalInfo?.maritalStatus,
    category: 'special'
  },
  {
    id: 'president',
    name: 'Лідер',
    description: 'Виграйте вибори Президента. Відбувати свій строк необов\'язково',
    icon: Crown,
    condition: (attendedYears, additionalInfo) => !!additionalInfo?.president,
    category: 'special'
  },
  {
    id: 'skinnydip',
    name: 'Свобода',
    description: 'Проведіть ритуальне купання на Вейву без одягу. Хтось, однак, має підтвердити виконання досягненя.',
    icon: Shirt,
    condition: (attendedYears, additionalInfo) => !!additionalInfo?.skinnyDip,
    category: 'social'
  }
];

interface AchievementsSectionProps {
  attendedYears: number[];
  additionalInfo?: any;
}

export const AchievementsSection = ({ attendedYears, additionalInfo }: AchievementsSectionProps) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const isUnlocked = (achievement: Achievement) => {
    return achievement.condition(attendedYears, additionalInfo);
  };

  return (
    <>
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Досягнення
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((achievement) => {
              const unlocked = isUnlocked(achievement);
              const IconComponent = achievement.icon;
              
              return (
                <div
                  key={achievement.id}
                  className={`
                    relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                    ${unlocked 
                      ? 'bg-gradient-to-br from-festival-yellow/20 to-festival-yellow/10 border-festival-yellow/50 hover:scale-105 shadow-lg shadow-festival-yellow/20' 
                      : 'bg-white/5 border-white/20 hover:bg-white/10 grayscale'
                    }
                  `}
                  onClick={() => setSelectedAchievement(achievement)}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <IconComponent 
                      className={`w-8 h-8 ${unlocked ? 'text-festival-yellow' : 'text-white/50'}`} 
                    />
                    <span className={`text-sm font-medium ${unlocked ? 'text-white' : 'text-white/60'}`}>
                      {achievement.name}
                    </span>
                    {unlocked && (
                      <div className="absolute -top-1 -right-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm">
              Відкрито: {achievements.filter(a => isUnlocked(a)).length} з {achievements.length}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Detail Modal */}
      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        <DialogContent className="bg-gradient-to-br from-festival-blue to-festival-blue/80 border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl flex items-center gap-3">
              {selectedAchievement && (
                <>
                  <selectedAchievement.icon 
                    className={`w-8 h-8 ${
                      isUnlocked(selectedAchievement) ? 'text-festival-yellow' : 'text-white/50'
                    }`} 
                  />
                  {selectedAchievement.name}
                  {isUnlocked(selectedAchievement) && (
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                      Отримано
                    </Badge>
                  )}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedAchievement && (
            <div className="space-y-4">
              <div className="text-center">
                <selectedAchievement.icon 
                  className={`w-20 h-20 mx-auto mb-4 ${
                    isUnlocked(selectedAchievement) ? 'text-festival-yellow' : 'text-white/50 grayscale'
                  }`} 
                />
              </div>
              
              <p className="text-white/90 text-lg leading-relaxed">
                {selectedAchievement.description}
              </p>
              
              <div className="flex items-center justify-center">
                <Badge variant="outline" className="border-white/30 text-white/70">
                  {selectedAchievement.category === 'attendance' && 'Відвідування'}
                  {selectedAchievement.category === 'social' && 'Соціальне'}
                  {selectedAchievement.category === 'special' && 'Особливе'}
                </Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};