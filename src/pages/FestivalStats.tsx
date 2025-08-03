import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
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
import FestivalsTable from "@/components/FestivalsTable";
import FestivalAttendanceDemo from '@/components/FestivalAttendanceDemo';
import { getPhotosForYear } from "@/data/galleryData";
import ElectionsGraph from "@/components/ElectionsGraph";

const FestivalStats = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

const getRandomImageForYear = (year: number): string => {
  const photos = getPhotosForYear(year);
  if (!photos || photos.length === 0) return "";
  return photos[Math.floor(Math.random() * photos.length)].src;
};

  // Election data for different years (2021 onwards)
  const electionData = {
    2021: [
      { candidate: "Наталія Кіндратів", votes: 5, party: "ЗМІ", color: "#3B82F6" },
      { candidate: "Дмитро Гнатків", votes: 4, party: "Управління флоту", color: "#EF4444" },
      { candidate: "Назарій Вовків", votes: 3, party: "Енергетики", color: "#10B981" },
      { candidate: "Назар Задорожний", votes: 1, party: "Юстиції", color: "#F59E0B" },
    ],
    2022: [
      { candidate: "Юра Бокало", votes: 9, party: "Господарства", color: "#EF4444" },
      { candidate: "Назар Задорожний", votes: 7, party: "Юстиції", color: "#10B981" },
      { candidate: "Віталій Ковальчук", votes: 2, party: "Закордонних справ", color: "#F59E0B" },
    ],
    2023: [
      { candidate: "Назарій Вовків", votes: 12, party: "Енергетики", color: "#10B981" },
      { candidate: "Наталя Нижник", votes: 9, party: "Господарства", color: "#8B5CF6" },
    ],
    2024: [
      { candidate: "Назар Задорожний", votes: 19, party: "Юстиції", color: "#F97316" },
      { candidate: "Аліна Ліщук", votes: 4, party: "Енергетики", color: "#6B7280" },
    ],
    2025: [
      { candidate: "Аліна Ліщук", votes: 9, party: "Енергетики", color: "#EC4899" },
      { candidate: "Світлана Петрук", votes: 8, party: "Фінансів", color: "#8B5CF6" },
      { candidate: "НЕДІЙСНІ ГОЛОСИ", votes: 1, party: "НЕДІЙСНІ ГОЛОСИ", color: "#10B981" },
    ],
  };

  // Content for each year - you can edit these individually
  const yearStats = {
    2014: {
      image: getRandomImageForYear(2014),
      title: "Детальна інформація про фестиваль: 2014",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>19-20 СЕРПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Перший фестиваль в історії. Проголошення Республіки Вейву відбулося саме на цьому Фестивалі.</li>
          <li>Вже на першому Фестивалі були визначені такі ознаки Республіки як прапор, герб, міністерства, міністри та Верховна Ліга Джекесу.</li>
          <li>Вже на першому Фестивалі була здійснена спроба державного перевороту та викрадення державної скарбниці, що була подавлена правоохоронними органами.</li>
        </ul>
      `
    },
    2015: {
      image: getRandomImageForYear(2015),
      title: "Детальна інформація про фестиваль: 2015",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>16-18 СЕРПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Наразі це Фестиваль з найменшою кількістю учасників, що є наслідком локального розколу у Республіці 2015-го року.</li>
          <li>Задля добирання до місця проведення Фестивалю необхідно було переїхати через річку.
        </ul>
      `
    },
    2016: {
      image: getRandomImageForYear(2016),
      title: "Детальна інформація про фестиваль: 2016",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>15-17 ЛИПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>На цьому Фестивалі відбувся відомий інцидент з викраденням автомобіля міністра юстиції, що спричинив політичне напруження у Республіці.</li>
        </ul>
      `
    },
    2017: {
      image: getRandomImageForYear(2017),
      title: "Детальна інформація про фестиваль: 2017",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>19-21 СЕРПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Новозапрошені жителі планували здійснити державний переворот у Республіці,
          що мало стати вже другою спробою такого перевороту за чотири роки, однак передумали через захоплення тим, як добре функціонувала держава.</li>
        </ul>
      `
    },
    2018: {
      image: getRandomImageForYear(2018),
      title: "Детальна інформація про фестиваль: 2018",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>18-19 СЕРПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>З певних причин з цього Фестивалю фактично відсутні медіаматеріали.</li>
          <li>Цей Фестиваль став одним з небагатьох і останнім станом на сьогодні, що тривав два дні, а не три.</li>
          <li>На цьому Фестивалі відбувся відомий "Голий нічний забіг", внаслідок якого було загублено пляшку горілки та тапочок.</li>
        </ul>
      `
    },
    2019: {
      image: getRandomImageForYear(2019),
      title: "Детальна інформація про фестиваль: 2019",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>16-18 СЕРПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>На цьому Фестивалі була запроваджена традиція відкриття Фестивалю та підняття прапору новими жителями Республіки.</li>
          <li>На цьому Фестивалі майже була порушена стаття 13 Конституції Республіки Вейву.</li>
        </ul>
      `
    },
    2020: {
      image: getRandomImageForYear(2020),
      title: "Детальна інформація про фестиваль: 2020",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>21-23 СЕРПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Цей Фестиваль - один з небагатьох, на якому відбулося зменшення кількості жителів.</li>
          <li>На цьому Фестивалі ЗНОВУ майже була порушена стаття 13 Конституції Республіки Вейву.</li>
        </ul>
      `
    },
    2021: {
      image: getRandomImageForYear(2021),
      title: "Детальна інформація про фестиваль: 2021",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>23-25 ЛИПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>На цьому Фестивалі вперше були впроваджені паспорти Республіки Вейву.</li>
          <li>На цьому Фестивалі була попередньо затверджена Конституція Республіки Вейву.</li>
          <li>На цьому Фестивалі була впроваджена посада Президента Республіки Вейву та вперше були проведені вибори Президента Республіки Вейву.</li>
          <li>Це єдиний Фестиваль, на якому під час виборів голоси отримав кандидат, що зняв свою кандидатуру. Частково це пояснюється тодішньою версією
          Конституції, згідно з якою ім'я кандидата залишалося в бюлетені навіть після його зняття з виборів.</li>
        </ul>
      `
    },
    2022: {
      image: getRandomImageForYear(2022),
      title: "Детальна інформація про фестиваль: 2022",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><br /><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>29-31 ЛИПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Саме на цьому Фестивалі відбувся відомий терористичний акт, який знерухомив близько половини населення Республіки. Експерти часто зазначають,
          що програш у виборах міністра юстиції міг бути пов'язаним з чутками про його причетність до цього акту.</li>
        </ul>
      `
    },
    2023: {
      image: getRandomImageForYear(2023),
      title: "Детальна інформація про фестиваль: 2023",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>14-16 ЛИПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Фестиваль 2023-го року ознаменувався дуже активним політичним сезоном. Звинувачення (як багато хто зазначає, безпідставні) кампанії заступниці
          міністра господарства у спробах державного перевороту могли повпливати на кінцевий результат виборів.</li>
        </ul>
      `
    },
    2024: {
      image: getRandomImageForYear(2024),
      title: "Детальна інформація про фестиваль: 2024",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>19-21 ЛИПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Політичний сезон 2024-го року виявився ще активнішим, ніж попереднього. Ключовими проблемами, що турбували населення Республіки, були 
          побоювання щодо неконтрольованої імміграції. Саме жорстка позиція міністра юстиції та його віце-президента з цього питання, як зазначають
          експерти, допомогла йому здобути рішучу перемогу. Тим не менше, вже після виборів деякі журналісти вказували на можливість неформальних 
          контактів між кандидатами перед виборами, що спричинило скандал.</li>
        </ul>
      `
    },
    2025: {
      image: getRandomImageForYear(2025),
      title: "Детальна інформація про фестиваль: 2025",
      content: "<span style='font-size: 1.5em; font-weight: bold;'>Дати фестивалю: </span><span style='font-size: 1.5em; font-weight: bold; color: red; text-decoration: underline;'>25-27 ЛИПНЯ</span>",
      details: `
        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
        <ul style="padding-left: 1.5em; list-style-type: disc;">
          <li>Політичний сезон 2025-го року видався спокійнішим. Тим не менше, популістична політика поточної адміністрації щодо впровадження 
          дискурсу стосовно ролі міністерства Господарства підігріла градус напруги. Результат виборів був найближчим з 2021-го року. Один бюлетень
          було визнано недійсним комісією з підрахунку голосів.</li>
        </ul>
      `
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAuthSuccess = () => {
    // Authentication is now handled by the context
  };

  const openStatModal = (year: number) => {
    setSelectedYear(year);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

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
            <FestivalsTable />
            <br />
            <PresidentsTable />   
            <br />
            <br />                    
            <p className="text-lg text-muted-foreground leading-relaxed">
              Нижче зібрана детальна інформація про всі проведені фестивалі проголошення Республіки Вейву. 
              Натисніть на відповідну кнопку, щоб переглянути статистику конкретного року.
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
              💡 Кожна кнопка відкриває нове вікно з детальною статистикою відповідного року.
              Дані оновлюються регулярно відповідними міністерствами.
            </p>
          </div>
        </div>
      </FestivalSection>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
           <DialogTitle className="text-2xl text-festival-blue">
             {selectedYear && yearStats[selectedYear as keyof typeof yearStats]?.title}
           </DialogTitle>
         </DialogHeader>
  
         {selectedYear && yearStats[selectedYear as keyof typeof yearStats] && (
            <div className="max-h-[70vh] overflow-y-auto p-4 sm:p-4">
              <div className="space-y-6">
                <img 
                  src={yearStats[selectedYear as keyof typeof yearStats].image}
                  alt={`Статистика ${selectedYear}`}
                  className="w-full h-96 object-cover rounded-lg"
               />

               <div className="space-y-4">
                 <div className="text-muted-foreground leading-relaxed w-full overflow-x-auto">
                    {selectedYear && yearStats[selectedYear as keyof typeof yearStats] && (
                      <>
                        <div
                          className="mb-4 text-muted-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: yearStats[selectedYear as keyof typeof yearStats].content,
                          }}
                        />
                        <FestivalAttendanceDemo
                          year={selectedYear.toString()}
                          title={`${selectedYear} - відвідувачі. Усі дані поточні, а не станом на фестиваль.`}
                        />
                        
                        {/* Add ElectionsGraph for years 2021 onwards */}
                        {selectedYear >= 2021 && electionData[selectedYear as keyof typeof electionData] && (
                          <div className="mt-6">
                            <ElectionsGraph
                              data={electionData[selectedYear as keyof typeof electionData]}
                              title={`Результати виборів президента ${selectedYear}`}
                              showPercentages={true}
                              showVoteCount={true}
                              year={selectedYear.toString()}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
          
                <div
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: yearStats[selectedYear as keyof typeof yearStats].details,
                  }}
                />
          
                 <div className="bg-festival-yellow/10 p-4 rounded-lg">
                   <p className="text-sm text-muted-foreground">
                     💡  Якщо ви помітили неточність або помилку, повідомте про неї.
                   </p>
                  </div>
                </div>
              </div>
           </div>
         )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// AN EXAMPLE FOR FORMATTING TEXT IN HTML FOR FUTURE USE
// `
//        <span style='font-size: 1.5em; font-weight: bold;'>Особливості фестивалю: </span> <br /><br />
//        <ul style="padding-left: 1.5em; list-style-type: disc;">
//          <li><strong style="color: green;">Відвідувачів:</strong> понад 10 000</li>
//          <li><span style="color: purple;">Локацій:</span> 5</li>
//          <li><span style="font-size: 1.2em; color: darkblue;">Хедлайнери:</span> Гурт A, Гурт B</li>
//        </ul>
//      `


export default FestivalStats;