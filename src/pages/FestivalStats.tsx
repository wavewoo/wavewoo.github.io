import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FestivalSection from "@/components/FestivalSection";
import AuthModal from "@/components/AuthModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InteractiveStatsGraph from "@/components/InteractiveStatsGraph"; 
import InteractiveStatsGraph1 from "@/components/InteractiveStatsGraph1";
import PresidentsTable from "@/components/PresidentsTable";

const FestivalStats = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Content for each year - you can edit these individually
  const yearStats = {
    2014: {
      image: "https://picsum.photos/600/300?random=2014",
      title: "Детальна статистика фестивалю 2014",
      content: "ЗРАЗОК",
      details: "ЗРАЗОК"
    },
    2015: {
      image: "https://picsum.photos/600/300?random=2015",
      title: "Детальна статистика фестивалю 2015",
      content: "ЗРАЗОК",
      details: "ЗРАЗОК"
    },
    2016: {
      image: "https://picsum.photos/600/300?random=2016",
      title: "Детальна статистика фестивалю 2016",
      content: "ЗРАЗОК",
      details: "ЗРАЗОК"
    },
    2017: {
      image: "https://picsum.photos/600/300?random=2017",
      title: "Детальна статистика фестивалю 2017",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2018: {
      image: "https://picsum.photos/600/300?random=2018",
      title: "Детальна статистика фестивалю 2018",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2019: {
      image: "https://picsum.photos/600/300?random=2019",
      title: "Детальна статистика фестивалю 2019",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2020: {
      image: "https://picsum.photos/600/300?random=2020",
      title: "Детальна статистика фестивалю 2020",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2021: {
      image: "https://picsum.photos/600/300?random=2021",
      title: "Детальна статистика фестивалю 2021",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2022: {
      image: "https://picsum.photos/600/300?random=2022",
      title: "Детальна статистика фестивалю 2022",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2023: {
      image: "https://picsum.photos/600/300?random=2023",
      title: "Детальна статистика фестивалю 2023",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2024: {
      image: "https://picsum.photos/600/300?random=2024",
      title: "Детальна статистика фестивалю 2024",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    },
    2025: {
      image: "https://picsum.photos/600/300?random=2025",
      title: "Детальна статистика фестивалю 2025",
      content: "ЗРАЗОК.",
      details: "ЗРАЗОК"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const openStatModal = (year: number) => {
    setSelectedYear(year);
    setIsModalOpen(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <CardTitle className="text-2xl text-festival-blue">
                Детальна статистика
              </CardTitle>
              <p className="text-muted-foreground">
                Доступ до детальної статистики надається лише громадянам Республіки
              </p>
            </CardHeader>
            <CardContent>
              <AuthModal onSuccess={handleAuthSuccess}>
                <Button variant="hero" className="w-full" size="lg">
                  Авторизуватися
                </Button>
              </AuthModal>
              
              <Button 
                variant="outline" 
                className="w-full mt-3"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Повернутися до головної
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-festival-blue text-white py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:text-festival-yellow"
          >
            ← Назад
          </Button>
          <h1 className="text-2xl font-bold">Детальна статистика фестивалів</h1>
        </div>
      </header>

      <FestivalSection id="stats" title="Статистика всіх фестивалів">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <InteractiveStatsGraph />
            <br />
            <br />
            <InteractiveStatsGraph1 />
            <br />
            <br />
            <PresidentsTable />
            <br />
            <br />            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Нижче зібрана детальна статистика всіх проведених фестивалів Республіки Вейву. 
              Натисніть на відповідну кнопку, щоб переглянути статистику конкретного року.
              РОЗДІЛ В РОЗРОБЦІ!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {Array.from({ length: 12 }, (_, index) => {
              const year = 2014 + index;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => openStatModal(year)}
                  className="h-16 text-lg font-bold border-2 border-festival-blue text-festival-blue hover:bg-festival-blue hover:text-white transition-all duration-300"
                >
                  {year}
                </Button>
              );
            })}
          </div>
          
          <div className="mt-8 p-6 bg-festival-yellow/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Кожна кнопка відкриває нове вікно з детальною статистикою відповідного року.
              Дані оновлюються регулярно відповідними міністерствами.
            </p>
          </div>
        </div>
      </FestivalSection>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-festival-blue">
              {selectedYear && yearStats[selectedYear as keyof typeof yearStats]?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedYear && yearStats[selectedYear as keyof typeof yearStats] && (
            <div className="space-y-6">
              <img 
                src={yearStats[selectedYear as keyof typeof yearStats].image}
                alt={`Статистика ${selectedYear}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {yearStats[selectedYear as keyof typeof yearStats].content}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {yearStats[selectedYear as keyof typeof yearStats].details}
                </p>
                
                <div className="bg-festival-yellow/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 Детальні звіти та аналітика доступні для міністрів та уповноважених осіб.
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FestivalStats;